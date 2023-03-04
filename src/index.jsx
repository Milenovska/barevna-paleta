import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import palettes from "./palettes";
import Palette from "./components/Palette";

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Barevné palety</h1>
      </header>
      <main>
        {palettes.map(
          ({ name, description, attribution, colors, image, direction }) => (
            <Palette
              name={name}
              description={description}
              attribution={attribution}
              colors={colors}
              image={image}
              direction={direction}
              key={name}
            />
          ),
        )}
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};

createRoot(document.querySelector("#app")).render(<App />);
