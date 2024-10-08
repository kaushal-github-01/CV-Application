import "../Styles/GeneralInfo.css";
import { manageDisplay, LabelInput } from "../App";

function GeneralInfo() {
  return (
    <>
      <button
        className="main3Btn"
        onClick={() => {
          const item = document.getElementById("generalInfoForm");
          manageDisplay(item);
        }}
      >
        General Information
      </button>

      <form id="generalInfoForm">
        <LabelInput text="Name" />
        <LabelInput text="Title" />
        <LabelInput text="Phone No" />
        <LabelInput text="Email" />
        <LabelInput text="Address" />
      </form>
    </>
  );
}

export default GeneralInfo;
