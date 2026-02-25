import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Ensure the entire app fits within the viewport width
document.documentElement.style.overflowX = "hidden";
document.body.style.overflowX = "hidden";

createRoot(document.getElementById("root")!).render(<App />);
