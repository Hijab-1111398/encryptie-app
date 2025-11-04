// Encryptie-functie
function encryptText(plainText, key) {
    return CryptoJS.AES.encrypt(plainText, key).toString();
}

// Decryptie-functie
function decryptText(cipherText, key) {
    try {
        const bytes = CryptoJS.AES.decrypt(cipherText, key);
        const decrypted = bytes.toString(CryptoJS.enc.Utf8);
        return decrypted || "Ongeldige sleutel of tekst!";
    } catch {
        return "Fout bij decryptie!";
    }
}

document.getElementById("encryptBtn").addEventListener("click", () => {
    const text = document.getElementById("inputText").value;
    const key = document.getElementById("keyInput").value;

    if (!text || !key) {
        alert("Vul zowel tekst als sleutel in!");
        return;
    }

    const encrypted = encryptText(text, key);
    document.getElementById("outputText").value = encrypted;
});

document.getElementById("decryptBtn").addEventListener("click", () => {
    const text = document.getElementById("inputText").value;
    const key = document.getElementById("keyInput").value;

    if (!text || !key) {
        alert("Vul zowel tekst als sleutel in!");
        return;
    }

    const decrypted = decryptText(text, key);
    document.getElementById("outputText").value = decrypted;
});
