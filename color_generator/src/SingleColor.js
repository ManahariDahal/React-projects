import { useState, useEffect } from "react";
import rbgToHex from "./utils";

function SingleColor({ rgb, weight, index, hex }) {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  // const hexColor = rbgToHex(...rgb);
  const hexValue = `#${hex}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert"> copied to clipboard </p>}
    </article>
  );
}

export default SingleColor;
