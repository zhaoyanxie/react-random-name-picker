import React from "react";

const AddName = props => {
  return (
    <div>
      <input type="text" placeholder="enter name here..." />
      <button onClick={props.addName}>Add name</button>
    </div>
  );
};

export default AddName;
