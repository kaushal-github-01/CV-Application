import "../Styles/Profile.css";
import { manageDisplay, LabelInput } from "../App";

function Profile() {
  return (
    <>
      <button
        className="mainCentral4Btn mainBtn"
        onClick={() => {
          const item = document.getElementById("profileForm");
          manageDisplay(item);
        }}
      >
        Profile
      </button>

      <form id="profileForm">
        <LabelInput />
      </form>
    </>
  );
}

export default Profile;
