import "../Styles/Skills.css";
import { manageDisplay, LabelInput } from "../App";
import { createRoot } from "react-dom/client";

function Skills() {
  return (
    <>
      <button
        className="mainCentral4Btn mainBtn"
        onClick={() => {
          const item1 = document.getElementById("addSkillBtn");
          const item2 = document.getElementById("allSkillList");
          manageDisplay(item1);
          manageDisplay(item2);
        }}
      >
        Skills
      </button>

      <form id="allSkillList"></form>

      <button
        id="addSkillBtn"
        onClick={() => {
          const form = document.getElementById("allSkillList");
          const div = document.createElement("div");
          const root = createRoot(div);
          root.render(
            <>
              <LabelInput text="Enter Skill:" />
            </>
          );
          form.appendChild(div);
        }}
      >
        Add Skill
      </button>
    </>
  );
}

export default Skills;
