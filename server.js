
const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const QRCode = require("qrcode");
const path = require("path");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const rooms = new Map();

const FRONTEND_URL =
    "https://gotkunal15.github.io/Sharebridge";

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "sharebridge.html"));
});

app.get("/api/qr", async (req, res) => {
    res.setHeader(
        "Access-Control-Allow-Origin",
        "https://gotkunal15.github.io"
    );

    const room = req.query.room;

    if (!/^[A-Za-z0-9-]{4,50}$/.test(room || "")) {
        return res.status(400).json({
            error: "Invalid room ID"
        });
    }

    try {
        const joinUrl =
            `${FRONTEND_URL}/?room=${encodeURIComponent(room)}&role=receive`;

        const qr = await QRCode.toDataURL(joinUrl);

        res.json({
            qr,
            joinUrl
        });
    } catch (error) {
        res.status(500).json({
            error: "QR generation failed"
        });
    }
});

wss.on("connection", socket => {
    let roomId = null;

    socket.on("message", message => {
        let data;

        try {
            data = JSON.parse(message);
        } catch {
            return;
        }

        if (data.type === "join") {
            if (roomId) return;

            if (!/^[A-Za-z0-9-]{4,50}$/.test(data.room || "")) {
                return;
            }

            roomId = data.room;

            if (!rooms.has(roomId)) {
                rooms.set(roomId, new Set());
            }

            const room = rooms.get(roomId);

            if (room.size >= 2) {
                socket.send(JSON.stringify({
                    type: "error",
                    message: "Room is full"
                }));

                roomId = null;
                return;
            }

            room.add(socket);

            socket.send(JSON.stringify({
                type: "joined"
            }));

            if (room.size === 2) {
                room.forEach(client => {
                    client.send(JSON.stringify({
                        type: "peer-joined"
                    }));
                });
            }

            return;
        }

        if (!roomId) return;

        const allowed = [
            "offer",
            "answer",
            "ice-candidate"
        ];

        if (!allowed.includes(data.type)) return;

        const room = rooms.get(roomId);
        if (!room) return;

        room.forEach(client => {
            if (
                client !== socket &&
                client.readyState === WebSocket.OPEN
            ) {
                client.send(message.toString());
            }
        });
    });

    socket.on("close", () => {
        if (!roomId || !rooms.has(roomId)) return;

        const room = rooms.get(roomId);
        room.delete(socket);

        room.forEach(client => {
            client.send(JSON.stringify({
                type: "peer-left"
            }));
        });

        if (room.size === 0) {
            rooms.delete(roomId);
        }
    });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, "0.0.0.0", () => {
    console.log(`ShareBridge running on port ${PORT}`);
});
