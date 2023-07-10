import { Box, styled, Typography } from "@mui/material";
import React from "react";
import { navData } from "../../constants/data";

const Component = styled(Box)`
  display: flex;
  padding: 0px 55px;
  justify-content: space-around;
  border-bottom: 1px solid rgb(0 0 0 / 16%);
`;

const Container = styled(Box)`
  padding: 12px 8px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
`;

const NavBar = () => {
  return (
    <Box style={{ background: "#fff" }}>
      <Component>
        {navData &&
          navData.map((navItem) => (
            <Container>
              <img src={navItem?.url} alt="nav-item" width={64} />
              <Text>{navItem?.text}</Text>
            </Container>
          ))}
      </Component>
    </Box>
  );
};

export default NavBar;
