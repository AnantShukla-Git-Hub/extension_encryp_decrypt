// ============================================
// ENCRYPTION/DECRYPTION LOGIC
// ============================================

// Text encryption (Caesar cipher for alphanumeric + XOR for symbols/emojis)
function caesarCipher(text, key, isEncrypt) {
  const shift = isEncrypt ? key : -key;
  let result = '';
  
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const code = char.charCodeAt(0);
    
    // Lowercase letters (a-z)
    if (char >= 'a' && char <= 'z') {
      const shifted = ((code - 97 + shift) % 26 + 26) % 26;
      result += String.fromCharCode(shifted + 97);
    }
    // Uppercase letters (A-Z)
    else if (char >= 'A' && char <= 'Z') {
      const shifted = ((code - 65 + shift) % 26 + 26) % 26;
      result += String.fromCharCode(shifted + 65);
    }
    // Digits (0-9)
    else if (char >= '0' && char <= '9') {
      const shifted = ((code - 48 + shift) % 10 + 10) % 10;
      result += String.fromCharCode(shifted + 48);
    }
    // Spaces - preserve
    else if (char === ' ') {
      result += char;
    }
    // Encrypt symbols and emojis using XOR
    else {
      // XOR encryption for symbols and emojis
      const encrypted = code ^ (key % 256);
      result += String.fromCharCode(encrypted);
    }
  }
  
  return result;
}

// Binary file encryption (XOR cipher)
function encryptBytes(bytes, key) {
  const result = new Uint8Array(bytes.length);
  for (let i = 0; i < bytes.length; i++) {
    result[i] = bytes[i] ^ (key % 256);
  }
  return result;
}

// ============================================
// TAB SWITCHING
// ============================================

const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const tabName = btn.dataset.tab;
    
    // Remove active class from all
    tabBtns.forEach(b => b.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));
    
    // Add active class to selected
    btn.classList.add('active');
    document.getElementById(`${tabName}-tab`).classList.add('active');
  });
});

// ============================================
// TEXT ENCRYPTION/DECRYPTION
// ============================================

const inputText = document.getElementById('inputText');
const keyInput = document.getElementById('keyInput');
const outputText = document.getElementById('outputText');
const encryptBtn = document.getElementById('encryptBtn');
const decryptBtn = document.getElementById('decryptBtn');
const clearBtn = document.getElementById('clearBtn');
const copyBtn = document.getElementById('copyBtn');

// Encrypt button
encryptBtn.addEventListener('click', () => {
  const text = inputText.value;
  const key = parseInt(keyInput.value);
  
  if (!text) {
    showNotification('Please enter text to encrypt', 'error');
    return;
  }
  
  if (isNaN(key) || key === 0) {
    showNotification('Please enter a valid numeric key', 'error');
    return;
  }
  
  const encrypted = caesarCipher(text, key, true);
  outputText.value = encrypted;
  showNotification('Text encrypted successfully!', 'success');
});

// Decrypt button
decryptBtn.addEventListener('click', () => {
  const text = inputText.value;
  const key = parseInt(keyInput.value);
  
  if (!text) {
    showNotification('Please enter text to decrypt', 'error');
    return;
  }
  
  if (isNaN(key) || key === 0) {
    showNotification('Please enter a valid numeric key', 'error');
    return;
  }
  
  const decrypted = caesarCipher(text, key, false);
  outputText.value = decrypted;
  showNotification('Text decrypted successfully!', 'success');
});

// Clear button
clearBtn.addEventListener('click', () => {
  inputText.value = '';
  outputText.value = '';
  showNotification('Cleared!', 'success');
});

// Copy button
copyBtn.addEventListener('click', () => {
  if (!outputText.value) {
    showNotification('Nothing to copy', 'error');
    return;
  }
  
  outputText.select();
  document.execCommand('copy');
  showNotification('Copied to clipboard!', 'success');
});

// ============================================
// FILE ENCRYPTION/DECRYPTION
// ============================================

const fileInput = document.getElementById('fileInput');
const fileInfo = document.getElementById('fileInfo');
const fileKeyInput = document.getElementById('fileKeyInput');
const encryptFileBtn = document.getElementById('encryptFileBtn');
const decryptFileBtn = document.getElementById('decryptFileBtn');
const progressBar = document.getElementById('progressBar');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const fileResult = document.getElementById('fileResult');

let selectedFile = null;

// File selection
fileInput.addEventListener('change', (e) => {
  selectedFile = e.target.files[0];
  if (selectedFile) {
    const sizeMB = (selectedFile.size / (1024 * 1024)).toFixed(2);
    fileInfo.innerHTML = `
      <strong>${selectedFile.name}</strong><br>
      Size: ${sizeMB} MB | Type: ${selectedFile.type || 'Unknown'}
    `;
  } else {
    fileInfo.textContent = 'No file selected';
  }
  fileResult.innerHTML = '';
});

// Encrypt file
encryptFileBtn.addEventListener('click', () => processFile(true));

// Decrypt file
decryptFileBtn.addEventListener('click', () => processFile(false));

function processFile(isEncrypt) {
  if (!selectedFile) {
    showNotification('Please select a file first', 'error');
    return;
  }
  
  const key = parseInt(fileKeyInput.value);
  if (isNaN(key) || key === 0) {
    showNotification('Please enter a valid numeric key', 'error');
    return;
  }
  
  const reader = new FileReader();
  
  reader.onprogress = (e) => {
    if (e.lengthComputable) {
      const percent = Math.round((e.loaded / e.total) * 100);
      updateProgress(percent);
    }
  };
  
  reader.onload = (e) => {
    const arrayBuffer = e.target.result;
    const bytes = new Uint8Array(arrayBuffer);
    
    // Check if it's a text file
    const isTextFile = selectedFile.type.startsWith('text/') || 
                       selectedFile.name.match(/\.(txt|json|csv|md|html|css|js)$/i);
    
    let processedData;
    let newFileName;
    let mimeType;
    
    if (isTextFile) {
      // Text file processing
      const text = new TextDecoder().decode(bytes);
      const processedText = caesarCipher(text, key, isEncrypt);
      processedData = new TextEncoder().encode(processedText);
      
      if (isEncrypt) {
        // Encrypting: add .enc extension
        newFileName = selectedFile.name + '.enc';
      } else {
        // Decrypting: remove .enc or .dec extension if present
        newFileName = selectedFile.name.replace(/\.(enc|dec)$/i, '');
      }
      mimeType = 'text/plain';
    } else {
      // Binary file processing (XOR encryption)
      processedData = encryptBytes(bytes, key);
      
      if (isEncrypt) {
        // Encrypting: add .enc extension
        newFileName = selectedFile.name + '.enc';
      } else {
        // Decrypting: remove .enc or .dec extension if present
        newFileName = selectedFile.name.replace(/\.(enc|dec)$/i, '');
      }
      mimeType = selectedFile.type || 'application/octet-stream';
    }
    
    // Create download
    const blob = new Blob([processedData], { type: mimeType });
    const url = URL.createObjectURL(blob);
    
    fileResult.innerHTML = `
      <div class="success-message">
        <p>✅ File ${isEncrypt ? 'encrypted' : 'decrypted'} successfully!</p>
        <a href="${url}" download="${newFileName}" class="btn btn-download">
          💾 Download ${newFileName}
        </a>
      </div>
    `;
    
    updateProgress(100);
    setTimeout(() => {
      progressBar.style.display = 'none';
    }, 1000);
    
    showNotification(`File ${isEncrypt ? 'encrypted' : 'decrypted'} successfully!`, 'success');
  };
  
  reader.onerror = () => {
    showNotification('Error reading file', 'error');
    progressBar.style.display = 'none';
  };
  
  progressBar.style.display = 'block';
  updateProgress(0);
  reader.readAsArrayBuffer(selectedFile);
}

function updateProgress(percent) {
  progressFill.style.width = percent + '%';
  progressText.textContent = percent + '%';
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================

function showNotification(message, type = 'info') {
  // Remove existing notification
  const existing = document.querySelector('.notification');
  if (existing) existing.remove();
  
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => notification.classList.add('show'), 10);
  
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}
