import { AppBar, Box, styled, Toolbar, Typography } from "@mui/material";
import React from "react";
import FLipKartLogo from "../../assets/images/flipkart-logo.png";
import PlusIcon from "../../assets/icon/plus-icon.png";
import Search from "./Search";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 56px;
`;

const Component = styled(Link)`
  margin-left: 12%;
  line-height: 0;
  text-decoration: none;
`;
const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;

const PlusImage = styled("img")({
  width: 10,
  height: 10,
  marginLeft: 4,
});

const CustomHeader = styled(Box)`
  margin: 0 5% 0 auto;
`;

const Header = () => {
  return (
    <div>
      <StyledHeader>
        <Toolbar style={{ minHeight: "56px" }}>
          <Component to={"/"}>
            <img src={FLipKartLogo} alt="logo" width={75} />
            <Box style={{ display: "flex" }}>
              <SubHeading>
                Explore&nbsp;
                <Box component="span" style={{ color: "#FFE500" }}>
                  Plus
                </Box>
              </SubHeading>
              <PlusImage src={PlusIcon} alt="plus-icon" />
            </Box>
          </Component>
          <Search />
          <CustomHeader>
            <CustomButton />
          </CustomHeader>
        </Toolbar>
      </StyledHeader>
    </div>
  );
};

export default Header;
