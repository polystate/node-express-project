import React from "react";

const Form = (props) => {
  return (
    <form onSubmit={props.addperson}>
      <div>
        name: <input value={props.newname} onChange={props.handlenamechange} />
      </div>
      <div>
        number:{" "}
        <input value={props.newnumber} onChange={props.handlenumberchange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Form;
