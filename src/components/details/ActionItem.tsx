import { Box, Button, styled } from "@mui/material";
import React, { useState } from "react";
import { ShoppingCart } from "@mui/icons-material";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/CartAction";
import { payUsingPaytm } from "../../service/api";
import { post } from "../utils/paytm";

const ActionItem = ({ product }: any) => {
  const navigate = useNavigate();
  const dispatch: any = useDispatch();
  const [quantity, setQuantity]: any = useState(1);

  const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: "40%",
    padding: "40px 0 0 80px",
    [theme.breakpoints.down("lg")]: {
      padding: "20px 0 0 40px",
    },
  }));

  const Image = styled("img")({
    padding: "15px",
    width: "100%",
  });

  const StyledButton = styled(Button)(({ theme }) => ({
    width: "48%",
    height: "50px",
    borderRadius: "2px",
    [theme.breakpoints.down("lg")]: {
      width: "44%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "48%",
    },
  }));

  const { id }: any = product;

  const addItemToCart = () => {
    navigate("/cart");
    dispatch(addToCart(id, quantity));
  };

  const buyNow = () => {
    const response = payUsingPaytm({
      amount: 500,
      email: "codeforinterview01@gmail.com",
    });

    const information = {
      action: "https://securegw-stage.paytm.in/order/process",
      params: response,
    };
    post(information);
  };

  return (
    <LeftContainer>
      <Box
        style={{
          padding: "15px 20px",
          border: "1px solid #f0f0f0",
          width: "90%",
        }}
      >
        <Image src={product?.detailUrl} />
      </Box>
      <StyledButton
        variant="contained"
        style={{ marginRight: 10, background: "#ff9f00" }}
        onClick={addItemToCart}
      >
        <ShoppingCart /> Add to Cart
      </StyledButton>
      <StyledButton
        variant="contained"
        style={{ background: "#fb541b" }}
        onClick={buyNow}
      >
        <FlashOnIcon /> Buy Now
      </StyledButton>
    </LeftContainer>
  );
};

export default ActionItem;
