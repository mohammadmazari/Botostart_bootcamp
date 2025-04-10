import React, { useState } from "react";
import cities from "./cities.json";

export default function Input() {
  const [input, setInput] = useState("");

  const filteredCities = cities.filter((city) =>
    city.toLowerCase().startsWith(input.toLowerCase())
  );

  const suggestion =
    input && filteredCities.length > 0 ? filteredCities[0] : "";

  return (
    <div className="container">
      <h1 className="title">City</h1>
      <div className="input-wrapper">
        <div className="ghost-text">
          <span className="visible-part">{input}</span>
          <span className="suggested-part">
            {suggestion.slice(input.length)}
          </span>
        </div>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input"
          placeholder="City Name..."
        />
      </div>

      <ul className="suggestions">
        {input &&
          filteredCities.map((city, index) => (
            <li
              key={index}
              className="city-item"
              onClick={(e) => {
                setInput(e.target.textContent);
              }}
            >
              {city}
            </li>
          ))}
      </ul>
    </div>
  );
}
