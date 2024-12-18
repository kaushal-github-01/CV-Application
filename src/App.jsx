import "./App.css";
import { useState } from "react";

function App() {
  const [GeneralInformationData, setGeneralInformationData] = useState({
    name: "John Smith",
    title: "Finance Expert",
    number: 1234567890,
    email: "john@smith.com",
    address: "unknown",
  });

  function handleBtnClick() {
    const GeneralInformationForm = document.getElementById(
      "GeneralInformationForm"
    );

    if (GeneralInformationForm.style.display === "block") {
      GeneralInformationForm.style.display = "none";
    } else {
      GeneralInformationForm.style.display = "block";
    }
  }

  function handleInputChange(event) {
    const targetName = event.target.name;

    setGeneralInformationData({
      ...GeneralInformationData,
      [targetName]: event.target.value,
    });
  }

  return (
    <>
      <div id="component">
        <section id="EditSection">
          <button className="mainBtn" onClick={handleBtnClick}>
            General Information
          </button>
          <form id="GeneralInformationForm">
            <label>
              Name:{" "}
              <input
                type="text"
                name="name" // Added name attribute
                value={GeneralInformationData.name}
                onChange={handleInputChange}
              />
            </label>{" "}
            <br /> <br />
            <label>
              Title:{" "}
              <input
                type="text"
                name="title"
                value={GeneralInformationData.title}
                onChange={handleInputChange}
              />
            </label>
            <br /> <br />
            <label>
              Number:{" "}
              <input
                type="text"
                name="number"
                value={GeneralInformationData.number}
                onChange={handleInputChange}
              />
            </label>
            <br /> <br />
            <label>
              Email:{" "}
              <input
                type="text"
                name="email"
                value={GeneralInformationData.email}
                onChange={handleInputChange}
              />
            </label>
            <br /> <br />
            <label>
              Address:{" "}
              <input
                type="text"
                name="address"
                value={GeneralInformationData.address}
                onChange={handleInputChange}
              />
            </label>
          </form>
        </section>
        <section id="ViewSection">
          <h1>{GeneralInformationData.name}</h1>
          <p>{GeneralInformationData.title}</p>
          <p>{GeneralInformationData.number}</p>
          <p>{GeneralInformationData.email}</p>
          <p>{GeneralInformationData.address}</p>
        </section>
      </div>
    </>
  );
}

export default App;
