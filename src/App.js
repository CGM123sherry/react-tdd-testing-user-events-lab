import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setInterests((prev) =>
      prev.includes(value)
        ? prev.filter((interest) => interest !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      <h2>Newsletter Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Interests:</label>
          <div>
            <input
              type="checkbox"
              id="coding"
              value="Coding"
              checked={interests.includes("Coding")}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="coding">Coding</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="design"
              value="Design"
              checked={interests.includes("Design")}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="design">Design</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="marketing"
              value="Marketing"
              checked={interests.includes("Marketing")}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="marketing">Marketing</label>
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div>
          <h3>Thank you for signing up, {name}!</h3>
          <p>We'll send updates to {email}.</p>
          {interests.length > 0 && (
            <p>Your interests: {interests.join(", ")}</p>
          )}
        </div>
      )}
    </main>
  );
}

export default App;
