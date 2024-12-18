import { HandleBtnClick } from "../App";

function GeneralInformation({ data }) {
  function handleChange(event) {
    const newData = [event, data[0], data[1]];
    data[2](newData);
  }

  return (
    <>
      <button
        className="mainBtn"
        onClick={() => {
          const GeneralInformationForm = document.getElementById(
            "GeneralInformationForm"
          );

          HandleBtnClick(GeneralInformationForm);
        }}
      >
        General Information
      </button>
      <form id="GeneralInformationForm">
        <label>
          Name:{" "}
          <input
            type="text"
            name="name" // Added name attribute
            value={data[0].name}
            onChange={handleChange}
          />
        </label>{" "}
        <br /> <br />
        <label>
          Title:{" "}
          <input
            type="text"
            name="title"
            value={data[0].title}
            onChange={handleChange}
          />
        </label>
        <br /> <br />
        <label>
          Number:{" "}
          <input
            type="text"
            name="number"
            value={data[0].number}
            onChange={handleChange}
          />
        </label>
        <br /> <br />
        <label>
          Email:{" "}
          <input
            type="text"
            name="email"
            value={data[0].email}
            onChange={handleChange}
          />
        </label>
        <br /> <br />
        <label>
          Address:{" "}
          <input
            type="text"
            name="address"
            value={data[0].address}
            onChange={handleChange}
          />
        </label>
      </form>
    </>
  );
}

export default GeneralInformation;
