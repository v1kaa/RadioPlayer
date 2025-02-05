import React, { useState } from 'react';

const ConsentPopup = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleAccept = () => {
    localStorage.setItem('userConsent', 'true');
    setShowPopup(false);
  };

  return showPopup ? (
    <div className="popup">
      <p>Ta aplikacja wykorzystuje geolokalizację i pliki cookies. Czy wyrażasz na to zgodę?</p>
      <button onClick={handleAccept}>Akceptuję</button>
      <button onClick={() => setShowPopup(false)}>Odrzuć</button>
    </div>
  ) : null;
};

export default ConsentPopup;
