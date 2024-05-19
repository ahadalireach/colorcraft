import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bgColor = rgb.join(",");
  const hexValue = `#${hexColor}`;

  useEffect(() => {
    if (alert) {
      toast.success("Copied to clipboard!");
    }
  }, [alert]);

  const handleCopy = () => {
    navigator.clipboard.writeText(hexValue);
    setAlert(true);
  };

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ background: `rgb(${bgColor})` }}
      onClick={handleCopy}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
    </article>
  );
};

export default SingleColor;
