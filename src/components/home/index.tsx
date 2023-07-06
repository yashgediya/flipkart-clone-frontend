import { Box, styled } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/actions/ProductActions";
import Banner from "./Banner";
import MidSlide from "./MidSlide";
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
        <MidSlide
          products={productsList?.products}
          title="Deal of the Day"
          timer={true}
        />
        <Slide products={productsList?.products} title="Discount for You" />
        <Slide products={productsList?.products} title="Suggesting Items" />
        <Slide products={productsList?.products} title="Top Selection" />
        <Slide products={productsList?.products} title="Recommended Items" />
        <Slide products={productsList?.products} title="Trending Offers" />
        <Slide products={productsList?.products} title="Season's top picks" />
        <Slide
          products={productsList?.products}
          title="Top Deals on Accessories"
        />
      </Component>
    </>
  );
};

export default Home;
