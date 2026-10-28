
✨ Funktioner
- 🔎 Sök efter länder – hitta länder snabbt genom att skriva deras namn.
- 🗺️ Filtrera efter region – utforska länder utifrån världsdel eller region.
- 📄 Sidindelning – bläddra mellan resultaten med 10 länder per sida.
- 🔗 Delbara länkar – sökning, region och sidnummer sparas i URL:en, så att du kan dela en specifik vy.
- 🏳️ Detaljerade landsidor – se flagga, huvudstad, befolkning, språk, valuta och geografisk information.
- 🌤️ Aktuellt väder – visa temperatur och väderinformation för landets huvudstad med Open-Meteo.
- 📚 Wikipedia-information – läs en kort sammanfattning om landet från svenskspråkiga Wikipedia.
- ♿ Tillgänglighet – semantisk HTML, tydliga formuläretiketter och stöd för tangentbordsnavigering.
- 📱 Responsiv design – anpassad för både mobil och dator.
- 🛠️ Felhantering – laddningsvyer, felmeddelanden, möjlighet att försöka igen och anpassade 404-sidor.
🚀 Live-demo
Öppna Avora på Vercel

Testa gärna en färdig sökning: Sök efter Sweden.
🧰 Tekniker
Teknik	Användning
Next.js (App Router)	Routing och serverrendering
React	Komponentbaserat användargränssnitt
TypeScript	Typsäker utveckling
CSS	Design och responsiv layout
REST API	Hämtning av landsinformation
Open-Meteo	Väderprognoser och geokodning
Wikipedia API	Sammanfattningar och bilder
GitHub	Versionshantering
Vercel	Hosting och publicering


💻 Kom igång lokalt
1. Klona projektet
git clone https://github.com/andi49/Avoratravels.git
cd Avoratravels
2. Installera beroenden
npm install
3. Konfigurera miljövariabler
Skapa en fil med namnet .env.local i projektets rotmapp och lägg till din egen API-nyckel:
REST_COUNTRIES_API_KEY=din_egen_api_nyckel
Viktigt: Lägg aldrig upp riktiga API-nycklar på GitHub. Kontrollera att .env.local finns i .gitignore.

4. Starta utvecklingsservern
npm run dev
Öppna sedan http://localhost:3000 i webbläsaren.
🗂️ Projektstruktur
app/
├── components/          # Återanvändbara komponenter
├── country/
│   └── [code]/          # Dynamiska landsidor
├── layout/
│   ├── contries/        # Landslista
│   └── regions/         # Regionfilter
├── services/            # API-anrop och datatjänster
├── types/               # TypeScript-typer
├── page.tsx             # Startsida
└── not-found.tsx        # Anpassad 404-sida
💡 Om projektet
Avora är utvecklat som ett webbprojekt med fokus på att kombinera flera externa API:er i en användarvänlig applikation. Projektet använder URL-parametrar för att bevara sökningar, filter och sidindelning även när sidan uppdateras eller delas med andra.
🌐 Publicering
Projektet är publicerat med Vercel och versionshanteras via GitHub.

Live: https://avoratravels.vercel.app/
