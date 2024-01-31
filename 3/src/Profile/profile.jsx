// src/components/ProfilePage.jsx
import React from 'react';
import './profile.css';

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <div className="photo-display">
        <img src="path/to/user-photo.jpg" alt="User Photo" />
      </div>
      <div className="details-panel">
        <h1>User Profile</h1>
        <div className="detail-item">
          <span>Name:</span>
          <span>John Doe</span>
        </div>
        <div className="detail-item">
          <span>Email:</span>
          <span>john.doe@example.com</span>
        </div>
        <div className="detail-item">
          <span>Location:</span>
          <span>New York, USA</span>
        </div>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default ProfilePage;
