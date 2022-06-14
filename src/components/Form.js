function Form() {
  function onFormSubmit(event) {
    event.preventDefault();

    console.log(event);
    console.log(this);

    const formData = new FormData(event.target);
    
    alert(`${formData.get('first_name')} ${formData.get('last_name')}`);
  }
  return (
    <for className="Form" onSubmit={onFormSubmit} >
      <div>
        <label>
          First name
          <input type="text" name="first_name"/>
        </label>
      </div>
      <div>
        <label>
          Last name
          <input type="text" name="last_name"/>
        </label>
      </div>
      <button>ok</button>
    </for>
  );
}

export default Form;