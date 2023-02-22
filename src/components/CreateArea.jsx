import React, { useState } from "react";

function CreateArea(props) {
  const [Note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  function handleClick(event) {
    props.onAdd(Note);
    event.preventDefault();
    setNote((prevValue) => {
      return {
        title: "",
        content: ""
      };
    });
  }
  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={Note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={Note.content}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
