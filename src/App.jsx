import "./App.css";
import { useState } from "react";
import GeneralInformation from "./components/GeneralInformation";

function HandleBtnClick(item) {
  if (item.style.display === "block") {
    item.style.display = "none";
  } else {
    item.style.display = "block";
  }
}

function handleInputChange(data) {
  const event = data[0];
  const GeneralInformationData = data[1];
  const setGeneralInformationData = data[2];

  setGeneralInformationData({
    ...GeneralInformationData,
    [event.target.name]: event.target.value,
  });
}

function App() {
  const [GeneralInformationData, setGeneralInformationData] = useState({
    name: "John Smith",
    title: "Finance Expert",
    number: 1234567890,
    email: "john@smith.com",
    address: "unknown",
  });

  return (
    <>
      <div id="component">
        <section id="EditSection">
          <GeneralInformation
            data={[
              GeneralInformationData,
              setGeneralInformationData,
              handleInputChange,
            ]}
          />
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
export { HandleBtnClick };
