import { Box, Button, ButtonGroup, styled } from "@mui/material";
import React from "react";

const ButtonGroups = () => {
  const Component = styled(ButtonGroup)`
    maring-top: 30px;
  `;

  const StyledButton = styled(Button)`
    border-radius: 50%;
  `;
  return (
    <Component>
      <StyledButton>-</StyledButton>
      <Button>1</Button>
      <StyledButton>+</StyledButton>
    </Component>
  );
};

export default ButtonGroups;
