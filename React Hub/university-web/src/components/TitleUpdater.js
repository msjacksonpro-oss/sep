import React, { useState, useEffect } from 'react';
import './TitleUpdater.css';

function TitleUpdater() {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    document.title = `University Hub - ${clicks} clicks`;
  }, [clicks]);

  return (
    <div className="title-updater-container">
      <h3>Page Interaction Counter</h3>
      <button 
        className="title-updater-btn" 
        onClick={() => setClicks(clicks + 1)}
        aria-label={`Clicks counter: ${clicks} clicks`}
      >
        Clicks: {clicks}
      </button>
    </div>
  );
}

export default TitleUpdater;