import React, { useState, useRef, useEffect } from 'react';

const stations = [
  { name: 'Antyradio', url: 'http://redir.atmcdn.pl/sc/o2/Eurozet/live/antyradio.livx' },
  { name: 'RMF FM', url: 'http://195.150.20.242:8000/rmf_fm' },
  { name: 'Radio ZET', url: 'http://n14.radiojar.com/8x2r8t2kxtzuv' }
];

const RadioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [currentStation, setCurrentStation] = useState(stations[0].url);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(new Audio(currentStation));

  useEffect(() => {
    audioRef.current.src = currentStation;
    audioRef.current.volume = volume;
  }, [currentStation, volume]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const togglePlayPause = () => {
    if (!audioRef.current) return;
  
    if (!isPlaying) {
      audioRef.current.load(); // Załaduj stream przed odtwarzaniem
      audioRef.current.play()
        .then(() => setIsPlaying(true)) // Jeśli uda się odtworzyć, aktualizujemy stan
        .catch(error => console.error("Błąd odtwarzania:", error));
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };
  

  return (
    <div className="radio-player">
      <h2>Odtwarzacz Radiowy</h2>
      <select onChange={(e) => setCurrentStation(e.target.value)} value={currentStation}>
        {stations.map((station, index) => (
          <option key={index} value={station.url}>
            {station.name}
          </option>
        ))}
      </select>
      <button onClick={togglePlayPause}>{isPlaying ? 'Pauza' : 'Odtwórz'}</button>
      <input type="range" min="0" max="1" step="0.01" value={volume} onChange={(e) => setVolume(e.target.value)} />
      <div className="date-time">
        <p>Data: {currentDateTime.toLocaleDateString()}</p>
        <p>Godzina: {currentDateTime.toLocaleTimeString()}</p>
      </div>
    </div>
  );
};

export default RadioPlayer;
