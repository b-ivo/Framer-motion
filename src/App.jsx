import { motion } from "framer-motion";

export default function App() {
  const names = ["Ivo", "Bryan", "Shema", "Ntwali"];

  return (
    <motion.ul
      variants={list}
      initial="hidden"
      animate="visible"
      style={{ listStyle: "none", padding: 0 }}
    >
      {names.map((name) => (
        <motion.li key={name} style={box} variants={item}>
          {name}
        </motion.li>
      ))}
    </motion.ul>
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
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const box = {
  width: 80,
  height: 80,
  backgroundColor: "#ff0088",
  margin: 10,
  borderRadius: 5,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  fontWeight: "bold",
};
