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

Live: https://avoratravels.vercel.app/
