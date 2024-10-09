import "../Styles/WorkExperience.css";
import { manageDisplay, LabelInput } from "../App";
import { createRoot } from "react-dom/client";

function WorkExperience() {
  return (
    <>
      <button
        className="mainCentral4Btn mainBtn"
        onClick={() => {
          const item1 = document.getElementById("addWorkExpBtn");
          const item2 = document.getElementById("workExpForm");
          manageDisplay(item1);
          manageDisplay(item2);
        }}
      >
        Work Experience
      </button>

      <form id="workExpForm"></form>

      <button
        id="addWorkExpBtn"
        onClick={() => {
          const form = document.getElementById("workExpForm");
          const div = document.createElement("div");
          const root = createRoot(div);
          root.render(
            <>
              <LabelInput text="Title:" />
              <LabelInput text="Company Name:" />
              <LabelInput text="Duration:" />
            </>
          );
          form.appendChild(div);
        }}
      >
        Add Work Experience
      </button>
    </>
  );
}

export default WorkExperience;
