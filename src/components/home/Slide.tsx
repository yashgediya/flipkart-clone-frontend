import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Component = styled(Box)`
  margin-top: 10px;
  background: #ffffff;
`;

const Deal = styled(Box)`
  padding: 15px 20px;
`;

const Slide = ({ products }: any) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Component>
      <Deal>
        <Typography>Deal of the Day</Typography>
      </Deal>
      <Carousel
        responsive={responsive}
        //   dotListClass="custom-dot-list-style"
        //   itemClass="carousel-item-padding-40-px"
        //   containerClass="carousel-container"
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        centerMode={true}
      >
        {products &&
          products.map((product: any) => {
            return <img src={product?.url} alt="product" />;
          })}
      </Carousel>
    </Component>
  );
};

export default Slide;
