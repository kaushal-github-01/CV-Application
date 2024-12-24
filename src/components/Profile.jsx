import "../styles/Profile.css";
import React, { useState } from "react"; // Import useState hook

function Profile({ data }) {
  const [profile, setProfile] = data;
  const [isVisible, setIsVisible] = useState(false); // New state for visibility

  const handleTextAreaChange = (event) => {
    setProfile(event.target.value);
  };

  return (
    <>
      <button
        className="mainBtn"
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        Profile
      </button>

      {isVisible && (
        <div>
          <textarea
            id="profile-textarea"
            value={profile}
            onChange={handleTextAreaChange}
          ></textarea>
        </div>
      )}
    </>
  );
}

export default Profile;
