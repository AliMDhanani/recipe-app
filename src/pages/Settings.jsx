import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const Settings = () => {
  const [theme, setTheme] = useState("light");
  const primaryColors = [
    "rgb(255, 0, 86)",
    "rgb(33, 150, 243)",
    "rgb(255, 193, 7)",
    "rgb(0, 200, 83)",
    "rgb(156, 39, 176)",
  ];
  return (
    <div>
      <div className="section block">
        <h2>Preferred Theme</h2>
        <div className="options__container">
          <div className="option light">
            {theme === "light" && (
              <div className="tick">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            )}
          </div>
          <div className="option dark">
            {theme === "dark" && (
              <div className="tick">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="section block">
        <h2>Preferred Colour</h2>
        <div className="options__container">
          <div className="option light">
            {theme === "light" && (
              <div className="tick">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
