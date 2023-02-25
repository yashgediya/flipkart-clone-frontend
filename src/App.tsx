import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import { Box } from "@mui/system";
import Home from "./components/home";
import DataProvider from "./context/DataProvider";

function App() {
  return (
    <DataProvider>
      <Header />
      <Box style={{ marginTop: "56px" }}>
        <Home />
      </Box>
    </DataProvider>
  );
}

export default App;
