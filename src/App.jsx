import React from "react";
import "./App.scss";
import Layout from "./components/Layout/Layout";
import { ThemeProvider, FontProvider } from "./context";

const App =() => {
  return (
    <ThemeProvider>
      <FontProvider>
        <Layout />
      </FontProvider>
    </ThemeProvider>
  );
}
export default App;