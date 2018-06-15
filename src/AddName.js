import React from "react";

const AddName = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        type="text"
        placeholder="enter name here..."
        value={props.value}
        onChange={props.handleChange}
      />
      <input type="submit" value="Add name" />
    </form>
  );
};

export default AddName;
