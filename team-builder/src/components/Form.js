import React, { useState } from "react";

const positions = ["Wide Receiver", "Quarterback", "Running Back"];

const Form = props => {
  var defaultState = {
    title: "",
    position: "Wide Receiver",
    yard: "0",
    touchdowns: "0",
    age: "0"
  };
  const [person, setPerson] = useState(defaultState);

  function handleSubmit(event) {
    event.preventDefault();

    props.addPlayer(person);
    setPerson(defaultState);
  }

  function handleChange(event) {
    setPerson({ ...person, [event.target.name]: event.target.value });
  }

  return (
    <form onSubmit={event => handleSubmit(event)}>
      <label htmlFor="title">  Title: </label>
      <input
        type="text"
        name="title"
        placeholder="name"
        value={person.title}
        onChange={event => handleChange(event)}
      />

      <label htmlFor="position"> Position: </label>
      <select
        name="position"
        value={person.position}
        onChange={event => handleChange(event)}
      >
        {positions.map(position => {
          return <option key={position} value={position} label={position} />;
        })}
      </select>

      <label htmlFor="yards"> Yards: </label>
      <input
        type="text"
        name="yards"
        placeholder="0"
        value={person.yards}
        onChange={event => handleChange(event)}
      />

      <label htmlFor="touchdowns"> Touchdowns: </label>
      <input
        type="text"
        name="touchdowns"
        placeholder="0"
        value={person.touchdowns}
        onChange={event => handleChange(event)}
      />
      <label htmlFor="age"> Age: </label>
      <input
        type="text"
        name="age"
        placeholder="0"
        value={person.age}
        onChange={event => handleChange(event)}
      />

      <button type="submit">Add person</button>
    </form>
  );
};

export default Form;
