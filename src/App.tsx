import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import { Box } from "@mui/system";
import Home from "./components/home";
import DataProvider from "./context/DataProvider";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsView from "./components/details/DetailsView";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <DataProvider>
          <Header />
          <Box style={{ marginTop: "56px" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<DetailsView />} />
              <Route path="cart" element={<Cart />} />
            </Routes>
          </Box>
        </DataProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
