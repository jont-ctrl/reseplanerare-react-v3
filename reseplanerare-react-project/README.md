# Reseplanerare

En enkel React-applikation för att lägga till och visa aktiviteter med datum och plats. Användare kan fylla i fält för aktivitet, datum och plats, och sedan visa en lista över alla tillagda aktiviteter.

## Teknologier:

- **React**: JavaScript-bibliotek för användargränssnitt.
- **Vite**: Ett snabbt och lätt byggverktyg som används för att utveckla och bygga applikationen.
- **React Router**: För att hantera flera sidor i applikationen och skapa en bättre navigationsupplevelse.
- **Redux Toolkit**: För globalt state management och enklare hantering av applikationens tillstånd.
- **State Management**: `useState`-hooken används för att hantera lokalt tillstånd.
- **Props**: För att skicka data mellan komponenterna.
- **API-anrop**: För att hämta bilder, väder och Google Maps-kartor.

## Installation:

1. Klona eller ladda ner detta repository. 
2. Installera nödvändiga dependencies:
npm install
3. Starta applikationen:
npm run dev

## Användning:

Gå till fliken 'Ny aktivitet'
1. Fyll i fälten för aktivitetens namn, datum och plats.
2. Klicka på "Lägg till" för att lägga till aktiviteten.
3. Klicka på "Ta bort" för att ta bort en aktivitet eller redigera för att redigera information.
4. Alla tillagda aktiviteter visas i en lista under fliken 'Detaljsida'.

Gå till fliken 'Resetips':
1. Här kan du få inspiration till resor från bilder på olika resmål. Bilderna hämtas via ett API, och du kan se vackra bilder av platser som du kan besöka.
2. Varje bild är kopplad till ett resemål som kan hjälpa dig att få idéer till framtida aktiviteter.

Gå till fliken 'Detaljsida':
1. När du klickar på en aktivitet i listan, kan du läsa mer om den och få en bild som hämtas via ett API.
2. För varje aktivitet visas en Google Maps-länk så att du lätt kan hitta platsen och få vägbeskrivningar till den.

