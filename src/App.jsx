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
      variants={list}
      initial="hidden"
      animate="visible"
    >
      {names.map((name) => (
        <Reorder.Item
          key={name}
          value={name}
          style={box}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          whileDrag={{ rotate: 10 }}
          variants={item}
        >
          {name}
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}

const list = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

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
