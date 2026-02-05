import { motion, useScroll } from "framer-motion";

export default function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div>
      {/* Scroll progress bar */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "5px",
          background: "#ff0088",
          width: "100%",
          scaleX: scrollYProgress,
          transformOrigin: "0%",
        }}
      />

      {/* Scrollable content */}
      <div style={{ paddingTop: "20px" }}>
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} style={box}>
            hello {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

const box = {
  width: 200,
  height: 60,
  backgroundColor: "#ff0088",
  margin: "10px auto",
  borderRadius: 8,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  fontWeight: "bold",
};
