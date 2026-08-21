import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MyStoreProvider } from "./context/MyStore.jsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
    <MyStoreProvider>
      <App />
    </MyStoreProvider>
);
