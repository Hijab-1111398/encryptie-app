# Symmetrische Encryptie Webapp

Een eenvoudige webapplicatie waarmee gebruikers tekst lokaal kunnen versleutelen en ontsleutelen met een wachtwoord/sleutel, gebaseerd op symmetrische encryptie (AES-256).

## screenshot

![Screenshot van de app](screenshot.png)  

## Functionaliteiten

- Tekst versleutelen en ontsleutelen met een wachtwoord.
- Retro-neon interface, responsive design.
- Instructies direct zichtbaar naast de app.

## Encryptiemethoden

- **Algoritme:** AES-256 (Advanced Encryption Standard)  
- **Library:** [CryptoJS](https://cryptojs.gitbook.io/docs/)  
- **Reden voor keuze:** AES-256 is veilig, modern en breed getest. Het gebruik van CryptoJS zorgt ervoor dat cryptografie correct en betrouwbaar wordt toegepast in de browser.

**Voorbeeld van encryptie en decryptie in JS:**

```javascript
// Versleutelen
const ciphertext = CryptoJS.AES.encrypt(plaintext, key).toString();

// Ontsleutelen
const bytes = CryptoJS.AES.decrypt(ciphertext, key);
const originalText = bytes.toString(CryptoJS.enc.Utf8);

**Sleutelbeheer:**
Generatie: de gebruiker voert een wachtwoord of sleutel in; dit wordt direct gebruikt als cryptografische sleutel.
Opslag: de sleutel wordt niet opgeslagen in de app of server. Alles gebeurt lokaal.
Uitwisseling: de gebruiker moet de sleutel zelf veilig delen met anderen indien nodig.
Beveiligingsimplicaties: verlies van de sleutel betekent verlies van toegang tot de versleutelde tekst. Dit volgt de standaardprincipes van symmetrische encryptie.

## Kerckhoffs Principe
Kerckhoffs Principe stelt dat een versleutelingssysteem veilig moet zijn, zelfs als alle details van het systeem bekend zijn, behalve de sleutel.In deze app is de code volledig publiek: iedereen kan zien hoe encryptie werkt. De veiligheid hangt volledig af van de geheimhouding van de sleutel. Zelfs met volledige kennis van de app kan een aanvaller de tekst niet ontsleutelen zonder de sleutel.

## gebruik 
1. Typ de tekst die je wilt versleutelen in het tekstvak.
2. Voer een wachtwoord of sleutel in.
3. Klik op Encrypt om te versleutelen of Decrypt om te ontsleutelen.
4. De uitvoer verschijnt in het onderste tekstvak.
Tip: onthoud je sleutel, anders kun je de tekst niet terughalen.

## Installatie
1. Clone de repository:
git clone https://github.com/Hijab-1111398/encryptie-app.git 
cd encryptie-app

2. Open het project:
dubbelklik op index.html of open het bestand in je browser.

## Structuur 

ENCRYPTIE-APP
- json.packages/     #heeft de packages die nodig zijn voor node.js
- node_modules/      #bevat de node.js modules
- .gitignore         #bevat alles wat gemnegeerd kan worden(bv. node modules)
- app.js             #de encryptie logica
- index.html         #UI van app
- README.md          #bevat alle informatie + kort verslag
- screenshot.png     #screenshot van de applicatie
- style.css          #stylesheet voor de UI