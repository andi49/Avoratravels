🌍 Avora Travels
Avora är en resewebbplats där du kan utforska världens länder, söka efter ett land och filtrera efter region. Varje land har en egen sida med information om bland annat huvudstad, befolkning, språk och valuta. Där visas även aktuellt väder och en sammanfattning från Wikipedia när informationen finns tillgänglig.

🔗 Besök Avora
💻 GitHub-repository
✨ Funktioner
- Sök efter länder med namn, oavsett stora eller små bokstäver.
- Filtrera länder efter region.
- Bläddra mellan resultaten med 10 länder per sida.
- Behåll sökning, region och sidnummer i URL:en så att vyn kan uppdateras eller delas.
- Öppna en egen detaljsida för varje land via dess trebokstavskod, exempelvis /country/SWE.
- Se landinformation, väder från Open-Meteo och information från svenskspråkiga Wikipedia.
- Visa laddningsindikatorer, felmeddelanden och anpassade 404-sidor.
- Använd webbplatsen på både mobil och dator.
🛠️ Teknik och ramverk
- Next.js (App Router) – ramverket för sidor, dynamiska routes, navigering och serverrendering.
- React – komponenter och interaktiva funktioner som sökning.
- TypeScript – typer för komponenter och data från API:er.
- CSS – layout, utseende och responsiv design.
- REST Countries API – grundläggande information om länder.
- Open-Meteo – geokodning av huvudstäder och aktuellt väder.
- Wikipedia API – landbeskrivningar och bilder när de finns.
- GitHub och Vercel – versionshantering och publicering.
Varför Next.js?
Jag valde Next.js eftersom det bygger på React och gör det enkelt att kombinera serverkomponenter, interaktiva klientkomponenter och dynamiska sidor. Med App Router kan samma detaljsida användas för olika länder genom exempelvis /country/[code]. Next.js ger också smidig navigering och stöd för URL-parametrar.

🚀 Kom igång lokalt
1. Klona projektet och installera beroenden
git clone https://github.com/andi49/Avoratravels.git
cd Avoratravels
npm install
2. Lägg till miljövariabel
Skapa filen .env.local i projektets rotmapp och lägg till din egen API-nyckel:
REST_COUNTRIES_API_KEY=din_egen_api_nyckel


3. Starta utvecklingsservern
npm run dev
Öppna http://localhost:3000 i webbläsaren.
🔍 Fördjupningar
URL-styrd sökning, filtrering och sidindelning
Sökord, region och sidnummer sparas i URL-parametrar, till exempel /?region=Europe&page=2. Jag använder bland annat useSearchParams, useRouter och URLSearchParams för att läsa och uppdatera URL:en. När en ny sökning görs tas sidnumret bort så att resultaten börjar på första sidan. Det gör det också möjligt att dela en länk till en viss vy.
Dynamiska landsidor
Med Next.js App Router används app/country/[code]/page.tsx för att visa olika länder på samma sida. Landet hittas med sin trebokstavskod, och en anpassad 404-sida visas om koden inte finns.
Flera API:er och felhantering
För vädret hämtas huvudstadens koordinater via Open-Meteos geokodning. Om de inte kan hämtas används landets koordinater som reservlösning. Väder- och Wikipedia-anrop kan göras parallellt med Promise.all, och felen hanteras separat så att information från det ena API:et fortfarande kan visas om det andra misslyckas.

🤖 AI-redovisning
Jag har använt ChatGPT och Claude som stöd under utvecklingen av Avora. Jag har främst använt det för att:
- Få förklaringar av React, Next.js och TypeScript, till exempel props, useState, dynamiska routes och URL-parametrar.
- Felsöka problem med navigering, sökning, sidindelning och API-anrop.
- Diskutera kodförslag, felhantering och hur jag kan strukturera vissa lösningar.

Jag har arbetat vidare med och testat lösningarna i mitt eget projekt. Jag ansvarar för koden och ska kunna förklara hur den fungerar, även när jag har fått hjälp med förslag.


💭 Reflektion
Det som gick bäst var att få sökning, regionfilter och sidindelning att fungera tillsammans och att publicera webbplatsen på Vercel. Det svåraste var att hantera URL-parametrar och kombinera information från flera API:er, särskilt när vädret behövde rätt koordinater. Jag lärde mig mycket genom att felsöka steg för steg och testa varje förändring. Nästa gång skulle jag planera komponenternas ansvar och hur URL:en ska hanteras tidigare i projektet för att undvika onödiga ändringar senare.

🌐 Publicering
Avora är publicerad på Vercel och koden finns på GitHub.

Livewebbplats: https://avoratravels.vercel.app/
