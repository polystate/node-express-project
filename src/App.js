import "./App.css";
import Form from "./components/Form";
import RenderPeople from "./components/RenderPeople.js";
import Filter from "./components/Filter";
import { useState, useEffect } from "react";
import personService from "./services/persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    personService.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [addMessage, setAddMessage] = useState(null);

  const addPerson = (event) => {
    event.preventDefault();
    const personObj = {
      name: newName,
      number: newNumber,
    };
    for (let person in persons) {
      if (
        JSON.stringify(personObj.name.toLowerCase()) ===
        JSON.stringify(persons[person].name.toLowerCase())
      ) {
        alert(`${newName} is already added to phonebook`);
        return;
      }
    }

    personService.create(personObj).then((response) => {
      setPersons(persons.concat(response.data));
      setNewName("");
      setAddMessage(`Added ${newName}`);
      setTimeout(() => {
        setAddMessage(null);
      }, 5000);
    });
  };
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={addMessage} />
      <Filter
        persons={persons}
        names={persons.map((person) => {
          return person.name;
        })}
        numbers={persons.map((person) => {
          return person.number;
        })}
      />
      <h3>add a new</h3>
      <Form
        addperson={addPerson}
        newname={newName}
        handlenamechange={handleNameChange}
        newnumber={newNumber}
        handlenumberchange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <RenderPeople persons={persons} />
    </div>
  );
};

export default App;
