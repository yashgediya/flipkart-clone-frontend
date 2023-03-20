import styled from "@emotion/styled";
import { Box, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const Component = styled(Menu)`
  margin-top: 5px;
`;

const Logout = styled(Typography)`
  font-size: 14px;
  margin-left: 20px;
`;

const Profile = ({ account, setAccount }: any) => {
  const [open, setOpen]: any = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event: any) => {
    setOpen(event.currentTarget);
  };

  const handleLogOut = () => {
    setAccount(""); 
  };

  return (
    <>
      <Box>
        <Typography
          onClick={handleClick}
          style={{ marginTop: 2, cursor: "pointer" }}
        >
          {account}dffew
        </Typography>
      </Box>
      <Menu anchorEl={open} open={Boolean(open)} onClose={handleClose}>
        <MenuItem
          onClick={(e) => {
            handleClose(e);

            handleLogOut();
          }}
        >
          <PowerSettingsNewIcon color="primary" fontSize="small" />
          <Logout>Logout</Logout>
        </MenuItem>
      </Menu>
    </>
  );
};

export default Profile;
