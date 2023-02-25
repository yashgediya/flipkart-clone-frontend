import { styled } from "@mui/material";
import { height } from "@mui/system";
import React from "react";
import Carousel from "react-multi-carousel";
import { bannerData } from "../../constants/data";
import "react-multi-carousel/lib/styles.css";

const Image = styled("img")({
  width: "100%",
  height: 280,
});

const Banner = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
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
    <>
      <Carousel
        responsive={responsive}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
      >
        {bannerData &&
          bannerData?.map((bannerItem) => (
            <Image
              src={bannerItem?.url}
              alt="banner-item"
              width={"100%"}
              height={180}
            />
          ))}
      </Carousel>
    </>
  );
};

export default Banner;
