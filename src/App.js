import React from 'react';
import RadioPlayer from './RadioPlayer';
import UserInfo from './UserInfo';
import ConsentPopup from './ConsentPopup';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Popup zgody na cookies i geolokalizację */}
      <ConsentPopup />

      {/* Nagłówek */}
      <header className="header">
        <h1>Radio Internetowe</h1>
      </header>

      {/* Główna zawartość: Odtwarzacz radiowy i informacje o użytkowniku */}
      <main className="main-content">
        <RadioPlayer />
        <UserInfo />
      </main>

      {/* Stopka */}
      <footer className="footer">
        <p>&copy; 2025 Radio Internetowe. Wszelkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
}

export default App;
