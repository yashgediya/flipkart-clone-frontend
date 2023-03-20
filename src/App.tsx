import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import { Box } from "@mui/system";
import Home from "./components/home";
import DataProvider from "./context/DataProvider";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <DataProvider>
        <Header />
        <Box style={{ marginTop: "56px" }}>
          <Home />
        </Box>
      </DataProvider>
    </Provider>
  );
}

export default App;
