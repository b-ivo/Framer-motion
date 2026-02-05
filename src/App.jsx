import { Reorder } from "framer-motion";
import { useState } from "react";

export default function App() {
  const [names, setNames] = useState(["Ivo", "Bryan", "Shema", "Ntwali"]);

  return (
    <Reorder.Group
      axis="y" 
      values={names} 
      onReorder={setNames}
      style={{ listStyle: "none", padding: 0 }}
    >
      {names.map((name) => (
        <Reorder.Item
          key={name}
          value={name}
          style={box}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {name}
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}

const box = {
  width: 200,
  height: 60,
  backgroundColor: "#ff0088",
  margin: "10px 0",
  borderRadius: 8,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  fontWeight: "bold",
  cursor: "grab",
};
