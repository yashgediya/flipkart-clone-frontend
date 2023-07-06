import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/ProductActions";
import { Box, Grid, Typography, styled } from "@mui/material";
import ActionItem from "./ActionItem";
import { Style } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";

const DetailsView = () => {
  const dispatch: any = useDispatch();
  const { id }: any = useParams();

  const Component = styled(Box)`
    background: #f2f2f2;
  `;

  const Container = styled(Grid)(({ theme }) => ({
    background: "#ffffff",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      margin: 0,
    },
  }));

  const RightContainer = styled(Grid)`
    margin-top: 50px;
    padding: 0px 20px;
  `;

  const { loading, products } = useSelector(
    (state: any) => state?.getProductDetails
  );

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  return (
    <Component>
      {!loading && Object.entries(products).length > 0 && (
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={products} />
          </Grid>
          <RightContainer lg={8} md={8} sm={8} xs={12}>
            <ProductDetails products={products} />
          </RightContainer>
        </Container>
      )}
    </Component>
  );
};

export default DetailsView;
