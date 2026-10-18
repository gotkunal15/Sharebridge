# 🌉 ShareBridge

> **[🚀 Try It Live](https://gotkunal15.github.io/Sharebridge/)** — Transfer files instantly between any devices

[![Live Demo](https://img.shields.io/badge/🚀-Live%20Demo-blue?style=for-the-badge)](https://gotkunal15.github.io/Sharebridge/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)
[![Made by Kunal Dave](https://img.shields.io/badge/Made%20by-Kunal%20Dave-orange?style=for-the-badge)](https://github.com/gotkunal15)

ShareBridge solves the frustrating problem of transferring files between different devices. No more email attachments, USB cables, or cloud uploads. Just open the same webpage on both devices and share instantly.

---

## ✨ Features

- 📱 **Universal** — Works on iPhone, Android, Mac, Windows, Linux
- ⚡ **Instant** — Direct peer-to-peer transfer over local WiFi
- 🔒 **Private** — Files never touch the cloud or any server
- 🎯 **Zero Setup** — No apps, no accounts, just a web browser
- 📲 **QR Code** — Scan to connect devices instantly
- 🎨 **Beautiful** — Clean, modern, dark-themed interface

---

## 🚀 Quick Start

### Option 1: Use Online (Recommended)
1. Open **[gotkunal15.github.io/Sharebridge](https://gotkunal15.github.io/Sharebridge/)** on Device A
2. Open the same link on Device B (must be on same WiFi)
3. Drag & drop files to transfer
4. Done! 🎉

### Option 2: Run Locally
```bash
# Clone the repo
git clone https://github.com/gotkunal15/Sharebridge.git
cd Sharebridge

# Open in browser
open sharebridge.html

# Or serve locally
python -m http.server 8080
# Visit: http://localhost:8080
📱 Supported Devices
Platform	Browser	Status
📱 iPhone	Safari 12+	✅ Tested
🤖 Android	Chrome 80+	✅ Tested
💻 macOS	Safari, Chrome, Firefox	✅ Tested
🖥️ Windows	Edge, Chrome, Firefox	✅ Tested
🐧 Linux	Chrome, Firefox	✅ Tested
📟 iPad	Safari 12+	✅ Tested
🎬 How It Works
┌─────────────┐                    ┌─────────────┐
│  Device A   │                    │  Device B   │
│   Browser   │                    │   Browser   │
└──────┬──────┘                    └──────┬──────┘
       │                                  │
       │  1. Open same webpage            │
       ├──────────────────────────────────┤
       │                                  │
       │  2. WebRTC handshake             │
       ├─────────────────────────────────>│
       │<─────────────────────────────────┤
       │                                  │
       │  3. Direct P2P connection        │
       │==================================│
       │                                  │
       │  4. File chunks transfer         │
       ├─────────────────────────────────>│
       │  (No server, pure local)         │
       │                                  │
       ✅ Complete                        ✅ Received
Technology Stack:

HTML5 File API
WebRTC Data Channels
Canvas QR Code Generator
LocalStorage for peer discovery
Vanilla JavaScript (no dependencies!)
🛠️ Development
Project Structure
Sharebridge/
├── sharebridge.html    # Complete single-file app
├── index.html          # Redirect helper
├── README.md          # This file
└── LICENSE            # MIT License
Contributing
Contributions welcome! Here's how:

Fork the repo
Create feature branch: git checkout -b feature/amazing-feature
Commit changes: git commit -m 'Add amazing feature'
Push to branch: git push origin feature/amazing-feature
Open a Pull Request
Ideas for contributions:

 Add encryption indicator
 Resume interrupted transfers
 Multiple file selection UI
 Transfer history
 Text/clipboard sharing
 Mobile app wrappers
 Progress animations
🐛 Known Limitations
Large files (>500MB) may timeout on slow networks
Safari on iOS requires user gesture for WebRTC
Corporate firewalls may block P2P connections
Both devices must be on same WiFi network
See Issues for full list and workarounds.

📋 Roadmap
 Basic file transfer
 QR code sharing
 Cross-platform support
 Drag & drop interface
 End-to-end encryption (AES-256)
 Resume broken transfers
 Group transfers (3+ devices)
 Real-time text chat
 Screen sharing mode
 Mobile native apps
🤝 Support & Contact
💬 Discussions: GitHub Discussions
🐛 Bug Reports: GitHub Issues
📧 Email: kunal@example.com
🐙 GitHub: @gotkunal15
📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

MIT License

Copyright (c) 2026 Kunal Dave

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
💖 Acknowledgments
Thanks to the WebRTC community for excellent documentation
Inspired by AirDrop's simplicity
Built with ☕ and determination to solve a real problem
⭐ Star History
If ShareBridge helps you, please give it a star! ⭐

It helps others discover the project.

<div align="center">
Made with ❤️ by Kunal Dave

⬆ Back to Top

</div> ```
