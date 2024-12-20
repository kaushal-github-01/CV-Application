import { HandleBtnClick } from "../App";

function SkillsInformation() {
  return (
    <>
      <button
        className="mainBtn"
        onClick={() => {
          const skillSubButton = document.getElementById("skill-sub-button");
          HandleBtnClick(skillSubButton);
        }}
      >
        Skills
      </button>
      <button id="skill-sub-button" className="sub-button">
        Add Skill
      </button>
    </>
  );
}

export default SkillsInformation;
