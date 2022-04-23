import React from "react";
import { useState } from "react";

const Filter = (props) => {
  let nameList = props.names.map(function (name) {
    if (name.indexOf(" ") >= 0) {
      name = name.split(" ").slice(0, -1).join(" ");
    }
    return name.toLowerCase();
  });

  const [newFilter, setNewFilter] = useState("");
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  };

  return (
    <div>
      filter:{" "}
      <input
        placeholder="search by first name..."
        value={newFilter}
        onChange={handleFilterChange}
      ></input>
      {nameList.map((name, index) => {
        if (newFilter.toLowerCase() === name) {
          return (
            <p key={props.persons[index].id}>
              <em>{props.names[index]}</em> -{" "}
              <strong>{props.numbers[index]}</strong>
              {/* {
                (document.getElementsByTagName("p")[index].style =
                  "background:yellow")
              } */}
            </p>
          );
        }
      })}
    </div>
  );
};

// var firstName = fullName.split(' ').slice(0, -1).join(' ');
// var lastName = fullName.split(' ').slice(-1).join(' ');

export default Filter;
