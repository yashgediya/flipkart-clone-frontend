import { Box, Button, styled, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginDailog from "../login/LoginDailog";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";

const Wrapper = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;
  & > button,
  & > p,
  & > div {
    margin-right: 40px;
    font-size: 16px;
    font-weight: 500;
    align-items: center;
  }
`;

const Container = styled(Box)`
  display: flex;
`;

const LoginButtun = styled(Button)`
  color: #2874f0;
  background: #ffffff;
  text-transform: none;
  padding: 5px 40px;
  bordeer-radius: 2px;
  box-sahdow: none;
  font-weight: 600;
  height: 32px;
`;

const CustomButton = () => {
  const [open, setOpen]: any = useState(false);
  const { account, setAccount }: any = useContext(DataContext);

  return (
    <Wrapper>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <LoginButtun variant="contained" onClick={() => setOpen(!open)}>
          Login
        </LoginButtun>
      )}
      <Typography style={{ marginTop: 3, width: 135 }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>
      <Container>
        <ShoppingCartIcon />
        <Typography>Cart</Typography>
      </Container>
      <LoginDailog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default CustomButton;
