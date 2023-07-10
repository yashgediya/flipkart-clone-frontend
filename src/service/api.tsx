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

export const payUsingPaytm = async (data: any) => {
  try {
    const response = await axios.post(`${URL}/payment`, data);
    return response?.data;
  } catch (err) {
    console.log("Error while calling payment API", err);
  }
};
