import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import styled from "@emotion/styled";

const ProductDetails = ({ products }: any) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const adURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";

  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

  const SmallText = styled(Box)`
    font-size: 14px;
    vertical-align: baseline;
    & > p {
      font-size: 14px;
      margin-top: 10px;
    }
  `;

  const StyledBedge = styled(LocalOfferIcon)`
    margin-right: 10px;
    color: #00cc00;
    font-size: 15px;
  `;

  const ColumnText = styled(TableRow)`
    font-size: 14px;
    &>td: {
      font-size: 14px;
      margin-top: 10px;
      border: none;
    }
  `;

  return (
    <>
      <Typography>{products?.title?.shortTitle}</Typography>
      <Typography style={{ marginTop: 5, color: "#878787" }}>
        8 Ratings & 1 Reviews
        <Box component="span">
          <img src={fassured} style={{ width: 77, marginLeft: 20 }} />
        </Box>
      </Typography>
      <Typography style={{ marginTop: 5, color: "#878787" }}>
        <Box component="span" style={{ fontSize: 28 }}>
          ₹{products?.price?.cost}
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span">
          <strong style={{ textDecoration: "line-through", color: "#878787" }}>
            {products?.price?.mrp}
          </strong>
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#388E3C" }}>
          {products?.price?.discount}
        </Box>
      </Typography>
      <Typography>Available Offers</Typography>
      <SmallText>
        <Typography>
          <StyledBedge />
          <strong>Special Price</strong>
          Get extra 10% off (price inclusive of cashback/coupon)
        </Typography>
        <Typography>
          <StyledBedge />
          <strong>Bank Offer</strong>
          Flat ₹1,250 Off on HDFC Bank Credit Card EMI Trxns on orders priced
          between ₹15,000 to ₹39,999
        </Typography>
        <Typography>
          <StyledBedge />
          <strong>Bank Offer</strong>
          10% instant discount on ICICI Bank Credit Cards, up to ₹300, on orders
          of ₹1750 and above
        </Typography>
        <Typography>
          <StyledBedge />
          <strong>Bank Offer</strong>
          Flat ₹3,000 Off on HDFC Bank Credit Card EMI Trxns on orders priced
          between ₹40,000 to ₹49,999
        </Typography>
      </SmallText>
      <Table>
        <TableBody>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Delivary</TableCell>
            <TableCell style={{ fontWeight: 600 }}>
              Delivary by {date?.toDateString()} | ₹40
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Warrenty</TableCell>
            <TableCell>No Warrenty</TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Seller</TableCell>
            <TableCell>
              <Box style={{ color: "#2874f0" }}>SuperComNet</Box>
              <Typography>GST invoice available</Typography>
              <Typography>10 Days Return Policy</Typography>
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell colSpan={2}>
              <img src={adURL} alt="flipkart-point" />
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Description</TableCell>
            <TableCell style={{ fontWeight: 600 }}>
              {products?.description}
            </TableCell>
          </ColumnText>
        </TableBody>
      </Table>
    </>
  );
};

export default ProductDetails;
