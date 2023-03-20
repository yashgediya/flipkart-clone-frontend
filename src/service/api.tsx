import axios from "axios";
import React from "react";

const URL = "http://localhost:8000/";

export const authenticateSignup = async (data: any) => {
  try {
    return await axios.post(`${URL}signup`, data);
  } catch (error) {
    console.log("Error while callig signup api", error);
  }
};

export const authenticateLogin = async (data: any) => {
  try {
    return await axios.post(`${URL}login`, data);
  } catch (error) {
    console.log("Error while callig login api", error);
  }
};
