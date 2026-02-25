import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { i18nReady } from "./i18n";

const root = createRoot(document.getElementById("root")!);

i18nReady.then(() => {
  root.render(<App />);
});
