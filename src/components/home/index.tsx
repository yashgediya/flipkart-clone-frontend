import { Box, styled } from "@mui/system";
import React from "react";
import Banner from "./Banner";
import NavBar from "./NavBar";

const Component = styled(Box)`
  padding: 20px 10px;
  background: #f1f3f6;
`;

const Home = () => {
  return (
    <>
      <NavBar />
      <Component>
        <Banner />
      </Component>
    </>
  );
};

export default Home;
