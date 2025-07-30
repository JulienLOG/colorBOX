import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import { StrictMode } from "react";
import "./assets/styles/index.css";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <h1 className="TEST_CSS">Hello World 👋</h1>
    </BrowserRouter>
  </StrictMode>
);
