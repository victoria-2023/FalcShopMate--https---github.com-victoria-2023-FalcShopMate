import React, { useState, useEffect } from 'react';
import './Settings.css';

const Settings = () => {
  // Retrieve dark mode preference from localStorage, default to false if not set
  const initialDarkMode = localStorage.getItem('darkMode') === 'true';

  const [preferences, setPreferences] = useState({
    notifications: true,
    personalizedRecommendations: true,
    darkMode: initialDarkMode,
    language: 'English',
    location: 'United States',
  });

  useEffect(() => {
    if (preferences.darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }

    // Save dark mode preference to localStorage
    localStorage.setItem('darkMode', preferences.darkMode);
  }, [preferences.darkMode]);

  const handleToggle = (setting) => {
    setPreferences({
      ...preferences,
      [setting]: !preferences[setting],
    });
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setPreferences({
      ...preferences,
      [name]: value,
    });
  };

  return (
    <div className="settings">
      <h2>Settings</h2>
      <div className="setting-item">
        <label>
          <input
            type="checkbox"
            checked={preferences.notifications}
            onChange={() => handleToggle('notifications')}
          />
          Notifications
        </label>
      </div>
      <div className="setting-item">
        <label>
          <input
            type="checkbox"
            checked={preferences.personalizedRecommendations}
            onChange={() => handleToggle('personalizedRecommendations')}
          />
          Personalized Recommendations
        </label>
      </div>
      <div className="setting-item">
        <label>
          <input
            type="checkbox"
            checked={preferences.darkMode}
            onChange={() => handleToggle('darkMode')}
          />
          Dark Mode
        </label>
      </div>
      <div className="setting-item">
        <label>
          Language
          <select name="language" value={preferences.language} onChange={handleSelectChange}>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            {/* Add more languages as needed */}
          </select>
        </label>
      </div>
      <div className="setting-item">
        <label>
          Location
          <select name="location" value={preferences.location} onChange={handleSelectChange}>
            <option value="United States">United States</option>
            <option value="Pakistan">Pakistan</option>
            <option value="India">India</option>
            {/* Add more locations as needed */}
          </select>
        </label>
      </div>
      <div className="setting-item">
        <button className="btn-logout" onClick={() => alert('Logout functionality here')}>Logout</button>
      </div>
      <div className="setting-item">
        <button className="btn-account" onClick={() => alert('Account Privacy functionality here')}>Account Privacy</button>
      </div>
    </div>
  );
};

export default Settings;
