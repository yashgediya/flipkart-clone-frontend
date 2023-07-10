import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";
import { addEllipsis } from "../utils/commin-utils";
import ButtonGroups from "./ButtonGroup";
import { useDispatch } from "react-redux";
import { removeCart } from "../../redux/actions/CartAction";

const fassured =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

const Component = styled(Box)`
  border-top: 1px solid #f0f0f0;
  display: flex;
  background: #fff;
`;

const LeftComponent = styled(Box)`
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SmallText = styled(Typography)`
  color: #878787;
  font-size: 14px;
  margin-top: 10px;
`;

const Remove = styled(Button)`
  margin-top: 20px;
  font-size: 16px;
  color: #000;
  font-weight: 600;
`;

const CartItems = ({ item }: any) => {
  const dispatch: any = useDispatch();
  const removeCartItem = (id: any) => {
    return dispatch(removeCart(id));
  };
  return (
    <Component>
      <LeftComponent>
        <img
          src={item?.url}
          alt="product"
          style={{ width: 110, height: 110 }}
        />
        <ButtonGroups />
      </LeftComponent>
      <Box style={{ margin: 20 }}>
        <Typography>{addEllipsis(item?.title?.longTitle)}</Typography>
        <SmallText>
          ecar Seller:RetailNet
          <Box component="span">
            <img
              src={fassured}
              alt="flipkart"
              style={{ width: "50px", marginLeft: "10px" }}
            />
          </Box>
        </SmallText>
        <Typography style={{ margin: "20px 0" }}>
          <Box component="span" style={{ fontSize: 28 }}>
            ₹{item?.price?.cost}
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box component="span">
            <strong
              style={{ textDecoration: "line-through", color: "#878787" }}
            >
              {item?.price?.mrp}
            </strong>
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box component="span" style={{ color: "#388E3C" }}>
            {item?.price?.discount} off
          </Box>
        </Typography>
        <Remove onClick={() => removeCartItem(item?.id)}>Remove</Remove>
      </Box>
    </Component>
  );
};

export default CartItems;
