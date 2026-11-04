# 🌉 ShareBridge

<p align="center">
  <strong>Simple. Fast. Cross-device file sharing.</strong>
  <br />
  Transfer files between devices without cables, complicated setup, or installing an application.
  <br /><br />
  <a href="https://gotkunal15.github.io/Sharebridge/">
    <img src="https://img.shields.io/badge/🚀_Try_ShareBridge-Live_Demo-blue?style=for-the-badge" alt="Live Demo" />
  </a>
  <a href="https://github.com/gotkunal15/Sharebridge">
    <img src="https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github" alt="GitHub" />
  </a>
  <br /><br />
  <img src="https://img.shields.io/badge/License-MIT-green" alt="MIT License" />
  <img src="https://img.shields.io/badge/Platform-Web-orange" alt="Web Platform" />
  <img src="https://img.shields.io/badge/Status-In_Development-yellow" alt="In Development" />
</p>

---

## 📸 Preview

<!-- Replace this placeholder with a screenshot or GIF of ShareBridge. -->

<p align="center">
  <i>ShareBridge interface preview coming soon.</i>
</p>

---

## 💡 What is ShareBridge?

ShareBridge is a browser-based file-sharing project designed to make transferring files between devices simple and convenient.

Whether you're using a Windows computer, Android phone, iPhone, or another supported device, ShareBridge aims to make sharing easier.

No complicated installation. No unnecessary accounts. Just open the website and connect your devices.

**Our goal:** Make file sharing as simple as opening a link.

## ✨ Features

| Feature | Description |
|---|---|
| 🌐 Cross-device | Designed for computers, phones, and tablets |
| 📱 QR pairing | Connect devices using a QR code |
| ⚡ Fast transfers | Designed around direct device-to-device communication |
| 🔒 Privacy-focused | File contents are intended to stay between connected devices |
| 🖥️ Browser-based | No dedicated application installation required |
| 🎨 Modern interface | Clean, dark-themed user interface |
| 🌍 Online access | Connect through the hosted website |

## 🚀 Try ShareBridge

**Live website:**  
https://gotkunal15.github.io/Sharebridge/

1. Open ShareBridge on your first device.
2. Generate a connection and display its QR code.
3. Open ShareBridge on your second device.
4. Scan the QR code to join the connection.
5. Follow the on-screen instructions to share files.

## ⚙️ How It Works

ShareBridge uses a frontend website and a signalling backend to help devices establish a connection.

```text
       DEVICE A                    DEVICE B
    ┌────────────┐              ┌────────────┐
    │  Browser   │              │  Browser   │
    └─────┬──────┘              └─────┬──────┘
          │                           │
          │       ShareBridge         │
          ├──────── Signalling ───────┤
          │                           │
          └──── Direct connection ────┘
                 (P2P design)
```

The signalling server helps devices exchange connection information. The intended architecture uses peer-to-peer communication for file transfer rather than storing file contents on the signalling server.

## 🧰 Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Website structure |
| CSS3 | Interface and styling |
| JavaScript | Application functionality |
| Node.js | Backend runtime |
| Express.js | HTTP server |
| WebSocket | Device signalling |
| WebRTC | Peer-to-peer communication |
| QR Code | Device pairing |

## 🏗️ Project Structure

```text
Sharebridge/
│
├── index.html
├── sharebridge.html
├── server.js
├── package.json
├── package-lock.json
├── README.md
├── LICENSE
│
└── .github/
    └── workflows/
        └── pages.yml
```

## 💻 Run Locally

### Requirements

- Node.js
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/gotkunal15/Sharebridge.git
```

### 2. Open the project folder

```bash
cd Sharebridge
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the server

```bash
node server.js
```

### 5. Open ShareBridge

Visit:

```text
http://localhost:3000
```

The local server must remain running while using the local version.

## 🌍 Deployment

ShareBridge uses two hosted components:

| Component | Platform |
|---|---|
| Frontend | GitHub Pages |
| Backend | Render |

**Frontend:**  
https://gotkunal15.github.io/Sharebridge/

**Backend:**  
https://sharebridge-server-rgbs.onrender.com/

The GitHub Actions workflow deploys the frontend when changes are pushed to the `main` branch. The Render backend deploys from the repository separately.

## 🗺️ Roadmap

ShareBridge is an evolving project. Planned improvements include:

- [ ] Faster and adaptive file transfers
- [ ] Live transfer progress
- [ ] Transfer speed and estimated time
- [ ] Multiple-file sharing improvements
- [ ] Drag-and-drop support
- [ ] Better mobile experience
- [ ] Large-file transfer optimisation
- [ ] Transfer cancellation
- [ ] Improved connection recovery
- [ ] More detailed error messages

## 🤝 Contributing

Contributions, suggestions, and bug reports are welcome!

1. Fork this repository.
2. Create a feature branch.
3. Make your changes.
4. Commit your changes.
5. Push your branch.
6. Open a Pull Request.

```bash
git checkout -b feature/your-feature
git add .
git commit -m "Add your feature"
git push origin feature/your-feature
```

## 🐛 Report Issues

Found a bug or have an idea?

- [Report a bug](https://github.com/gotkunal15/Sharebridge/issues)
- [View existing issues](https://github.com/gotkunal15/Sharebridge/issues)

## 📄 License

ShareBridge is distributed under the MIT License.

See [LICENSE](LICENSE) for details.

## 👨‍💻 Creator

**Kunal Dave**

Created to explore better ways of connecting devices and sharing files.

- GitHub: [@gotkunal15](https://github.com/gotkunal15)
- Project: [ShareBridge](https://github.com/gotkunal15/Sharebridge)

---

<p align="center">
  If you find ShareBridge interesting, consider giving the repository a ⭐.
  <br /><br />
  <strong>Built with curiosity. Connected with ShareBridge.</strong>
</p>
