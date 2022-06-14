import { useState } from "react";

function Inputs() {
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");

  function onFirstNameChange(event) {
    setFirstName(event.target.value)
  }
  function onLastNameChange(event) {
    setLastName(event.target.value)
  }

  function onButtonClick() {
    alert(`${firstName} ${LastName}`)
  }
  return (
    <div className="Inputs">
      <div>
        <label>
          First name
          <input type="text" onChange={onFirstNameChange} required />
        </label>
      </div>
      <div>
        <label>
          Last name
          <input type="text" onChange={onLastNameChange} required />
        </label>
      </div>
      <button onClick={onButtonClick}>ok</button>
    </div>
  );
}

export default Inputs;