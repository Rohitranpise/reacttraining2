import { useState } from "react";
import React from "react";

function Form(props) {
  const [text, setText] = useState("enter the text");

  const handleUp = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
  };

  const handleLow = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="form-floating">
          <h3>{props.heading}</h3>
          <textarea
            value={text}
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            onChange={handleOnChange}
          ></textarea>
          <label htmlFor="floatingTextarea">Text</label>
          <button
            type="button"
            className="btn btn-primary my-2"
            onClick={handleUp}
          >
            convert to uppercase
          </button>
          <button
            type="button"
            className="btn btn-secondary mx-2"
            onClick={handleLow}
          >
            convert to lowercase
          </button>
          <button type="button" class="btn btn-success" onClick={handleClear}>
            clear text
          </button>
          {/* <button type="button" class="btn btn-danger">
        Danger
        </button>
        <button type="button" class="btn btn-warning">
        Warning
      </button> */}
        </div>
      </div>
      <div className="container my-2">
        <h2>your text summery</h2>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
      </div>
    </>
  );
}

export default Form;
