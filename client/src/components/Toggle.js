import React from "react";
import { usePinkMode } from "../hooks/usePinkMode";

const Toggle = () => {
  const [pinkMode, setPinkMode] = usePinkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setPinkMode(!pinkMode);
  };
  return (
      <div data-testid="divtag" className="pink-mode__toggle">
        <div
          onClick={toggleMode}
          className={pinkMode ? "toggle toggled" : "toggle"}
        />
        <p>Orchid Mode</p>
      </div>
  );
};

export default Toggle;