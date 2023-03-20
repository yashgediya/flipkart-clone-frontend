import { Box, styled } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/actions/ProductActions";
import Banner from "./Banner";
import NavBar from "./NavBar";
import Slide from "./Slide";

const Component = styled(Box)`
  padding: 20px 10px;
  background: #f1f3f6;
`;

const Home = () => {
  const dispatch: any = useDispatch();
  const productsList = useSelector((state: any) => state?.getProduct);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  return (
    <>
      <NavBar />
      <Component>
        <Banner />
        <Slide products={productsList?.products} />
      </Component>
    </>
  );
};

export default Home;
