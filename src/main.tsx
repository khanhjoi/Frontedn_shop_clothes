import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import ReactQuery from "./libs/react-query.tsx";
import Header from "./components/header/Header.tsx";
import Footer from "./components/Footer.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <NextUIProvider>
    <ReactQuery>
      <App></App>
    </ReactQuery>
  </NextUIProvider>
);
