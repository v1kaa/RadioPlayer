import React, { useState, useEffect } from 'react';

const UserInfo = () => {
  const [location, setLocation] = useState(null);
  const [browserInfo] = useState({
    userAgent: navigator.userAgent,
    platform: navigator.platform
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        () => {
          setLocation({ error: 'Brak zgody na lokalizację' });
        }
      );
    } else {
      setLocation({ error: 'Geolokalizacja nie jest wspierana' });
    }
  }, []);

  return (
    <div className="user-info">
      <h3>Informacje o użytkowniku</h3>
      <p>Przeglądarka: {browserInfo.userAgent}</p>
      <p>Platforma: {browserInfo.platform}</p>
      {location ? (
        location.error ? (
          <p>{location.error}</p>
        ) : (
          <p>Lokalizacja: {location.latitude}, {location.longitude}</p>
        )
      ) : (
        <p>Ładowanie lokalizacji...</p>
      )}
    </div>
  );
};

export default UserInfo;
