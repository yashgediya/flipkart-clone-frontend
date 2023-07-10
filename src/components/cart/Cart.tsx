import { Box, Grid, Typography, styled } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const cartItems = useSelector((state: any) => state?.cart?.cartItems);
  const Container = styled(Grid)`
    padding: 30px 130px;
    display: flex;
  `;

  const ButtonWrapper = styled(Box)`
    padding: 16px 22px;
    background: #fff;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
    border-top: 1px solid #f0f0f0;
  `;

  const StyledButton = styled(Box)`
    display: flex;
    margin-left: auto;
    background: #fb641b;
    color: #fff;
    width: 250px;
    height: 51px;
    justify-content: center;
    align-items: center;
  `;

  return (
    <>
      {cartItems?.length > 0 ? (
        <Container container>
          <Grid item lg={9} md={9} sm={12} xs={12}>
            <Box>
              <Typography>My Cart ({cartItems?.length})</Typography>
            </Box>
            {cartItems?.map((item: any) => (
              <CartItems item={item} />
            ))}
            <ButtonWrapper>
              <StyledButton>Place Order</StyledButton>
            </ButtonWrapper>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView cartItems={cartItems} />
          </Grid>
        </Container>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
