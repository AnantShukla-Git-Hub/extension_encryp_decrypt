# AnantCrypt 🔐

by Anant Shukla

A text and file encryption tool. Works completely offline, no signup required!

## 🚀 Two Ways to Use

### Option 1: Standalone Website (Easiest!) ⭐
**Just download one file and open it!**

1. Download `index.html`
2. Double-click to open in your browser
3. Start encrypting!

**No installation, no setup, works instantly!**

### Option 2: Browser Extension
Install as a browser extension for quick access from toolbar.

See installation instructions below.

## ✨ Features

- **Text Encryption**: Encrypt/decrypt text, symbols, and emojis with a numeric key
- **File Encryption**: Encrypt any file type (text files, images, PDFs, ZIPs, etc.)
- **Beautiful UI**: Modern gradient design with tab interface
- **100% Offline**: No data collection, no internet required
- **Cross-Browser**: Works on Chrome, Edge, Brave, Firefox

## 🚀 Installation

### Standalone Website (Recommended for most users)

1. Download `index.html` from this repository
2. Double-click the file to open in your browser
3. Done! Start encrypting immediately

**No installation required!**

### Browser Extension (For toolbar access)

#### Step 1: Create Icons (2 minutes)

1. Open `create-icons.html` in your browser
2. Right-click each canvas and "Save image as...":
   - First canvas → `icon16.png`
   - Second canvas → `icon48.png`
   - Third canvas → `icon128.png`
3. Save all 3 files in this folder

**Or use the helper scripts:**
- Windows: Double-click `generate-icons.bat`
- Mac/Linux: Run `./generate-icons.sh`

### Step 2: Load Extension (2 minutes)

**Chrome/Edge/Brave:**
1. Go to `chrome://extensions/` (or `edge://extensions/` or `brave://extensions/`)
2. Enable "Developer mode" (toggle in top-right)
3. Click "Load unpacked"
4. Select this folder
5. Done! ✅

**Firefox:**
1. Go to `about:debugging#/runtime/this-firefox`
2. Click "Load Temporary Add-on"
3. Select `manifest.json` from this folder
4. Done! ✅

## 📖 How to Use

### Text Encryption
1. Click the AnantCrypt icon in your browser
2. Enter your text
3. Enter a numeric key (e.g., 5, 13, 25)
4. Click "🔒 Encrypt" or "🔓 Decrypt"
5. Copy the result!

### File Encryption
1. Switch to "📁 Files" tab
2. Select any file
3. Enter a numeric key
4. Click "🔒 Encrypt File" or "🔓 Decrypt File"
5. Download the result!

**File naming:**
- **Encrypt**: `document.pdf` → `document.pdf.enc`
- **Decrypt**: `document.pdf.enc` → `document.pdf` (original name restored!)

**Important:** Use the same key for encryption and decryption!

## 🎯 Quick Test

**Test 1 - Basic Text:**
1. Type: `Hello World`
2. Key: `5`
3. Click Encrypt
4. Result: `Mjqqt Btwqi`

**Test 2 - With Emojis:**
1. Type: `Hello 😊 World!`
2. Key: `5`
3. Click Encrypt
4. Result: Encrypted text with scrambled emoji and symbols!

## 📋 What's Included

**Core Files (Required):**
- `popup.html` - User interface
- `popup.js` - Encryption logic
- `styles.css` - Styling
- `manifest.json` - Extension config
- `icon16.png`, `icon48.png`, `icon128.png` - Icons (create these!)

**Helper Files:**
- `create-icons.html` - Icon generator
- `generate-icons.bat` - Windows helper script
- `generate-icons.sh` - Mac/Linux helper script
- `INSTALLATION.md` - Detailed installation guide
- `QUICK-START.md` - Quick reference

## 🔒 Security Note

This extension uses:
- **Caesar cipher** for letters and digits
- **XOR cipher** for symbols and emojis
- **XOR cipher** for binary files

Designed for learning and basic privacy needs, not for highly sensitive data.

## 🛠️ Technical Details

- **Manifest Version**: 3
- **Permissions**: None required
- **Languages**: HTML, CSS, JavaScript (no dependencies)
- **Algorithms**: Caesar cipher (letters/digits), XOR cipher (symbols/emojis/files)

## 📱 Browser Support

- ✅ Chrome
- ✅ Edge
- ✅ Brave
- ✅ Firefox
- ✅ Opera

## 🐛 Troubleshooting

**Extension won't load?**
- Make sure all 3 icon files exist (icon16.png, icon48.png, icon128.png)
- Check that all files are in the same folder

**Can't find the extension icon?**
- Click the puzzle piece 🧩 in your browser toolbar
- Find "AnantCrypt" and click the pin 📌

**Firefox: Extension disappeared after restart?**
- This is normal for temporary add-ons
- Reload it from `about:debugging`

## 📄 License

Open source - feel free to use and modify!

Based on the CryptoCLI project.

## 👨‍💻 Credits

Created by **Anant Shukla**

---

**Enjoy encrypting! 🔐**
