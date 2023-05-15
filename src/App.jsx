import React from "react";
import "./App.scss";
import Layout from "./components/Layout/Layout";
import { ThemeProvider } from "./context"


export default function App (){
  return (
      <ThemeProvider >
        <Layout/>
      </ThemeProvider>
  );
};
