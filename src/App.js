import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Values from "values.js";
import SingleColor from "./SingleColor";

function App() {
  const [color, setColor] = useState("#49a6e9");
  const [list, setList] = useState(new Values("#49a6e9").all(10));

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      let colors = new Values(color).all(10);
      setList(colors);
      toast.success("Color palette generated!");
    } catch (error) {
      toast.error("Invalid color format!");
    }
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleColorCopy = (hexColor) => {
    navigator.clipboard
      .writeText(`#${hexColor}`)
      .then(() => toast.success("Color copied to clipboard!"))
      .catch((err) => toast.error("Failed to copy color"));
  };

  return (
    <>
      <section className="container">
        <h3>Color Craft</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="color"
            value={color}
            onChange={handleColorChange}
            className="color-input"
          />
          <input
            type="text"
            value={color}
            onChange={handleColorChange}
            placeholder="e.g. #ccc"
          />
          <button
            type="submit"
            className="btn"
            style={{ backgroundColor: color }}
          >
            Submit
          </button>
        </form>
      </section>

      <section className="colors">
        {list.map((color, index) => (
          <SingleColor
            key={index}
            {...color}
            index={index}
            hexColor={color.hex}
            handleCopy={handleColorCopy}
          />
        ))}
      </section>
    </>
  );
}

export default App;
