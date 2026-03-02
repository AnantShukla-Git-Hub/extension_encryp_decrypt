# 📤 Upload to GitHub - Quick Guide

## Step 1: Create Repository on GitHub

1. Go to https://github.com/
2. Click "+" (top-right) → "New repository"
3. Fill in:
   - **Name**: `AnantCrypt`
   - **Description**: `Text and file encryption browser extension`
   - **Public** ✅
   - Don't add README (we have one)
4. Click "Create repository"

## Step 2: Upload Using Command Line

Open terminal/command prompt in your project folder and run:

```bash
# Navigate to your project folder
cd C:\Users\anant\OneDrive\Desktop\extension_encryp_decrypt

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - AnantCrypt v1.4.0"

# Rename branch to main
git branch -M main

# Add your GitHub repository (REPLACE YOUR-USERNAME!)
git remote add origin https://github.com/YOUR-USERNAME/AnantCrypt.git

# Push to GitHub
git push -u origin main
```

**Important:** Replace `YOUR-USERNAME` with your actual GitHub username!

## Step 3: Done! 🎉

Visit: `https://github.com/YOUR-USERNAME/AnantCrypt`

---

## Alternative: GitHub Desktop (Easier)

1. Download: https://desktop.github.com/
2. Install and sign in
3. File → New Repository → Name: "AnantCrypt"
4. Copy your files to the repository folder
5. Commit and publish

---

## What Gets Uploaded

✅ Core extension files (popup.html, popup.js, styles.css, manifest.json)
✅ Helper tools (create-icons.html, generate-icons scripts)
