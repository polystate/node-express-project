import React from "react";
import persons from "../services/persons";

const deletePerson = (id, name) => {
  if (window.confirm("Are you sure you want to delete " + name)) {
    persons.deletePersonServer(id);
    document.getElementById(id + "p").remove();
  }
};

const RenderPeople = (props) => {
  return (
    <>
      {props.persons.map((person) => {
        return (
          <p key={person.id} id={person.id + "p"}>
            {person.name} - {person.number}{" "}
            <button
              className="delete"
              onClick={() => deletePerson(person.id, person.name)}
            >
              delete
            </button>
          </p>
        );
      })}
    </>
  );
};

export default RenderPeople;
