import { Box, InputBase, styled } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchContainer = styled(Box)`
  background: #fff;
  width: 38%;
  height: 36px;
  border-radius: 2px;
  margin-left: 10px;
  display: flex;
`;

const InputSearchBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  font-size: 14px;
`;

const InputSearchWrappeer = styled(Box)`
  color: #2874f0;
  padding: 5px;
  display: flex;
`;

const Search = () => {
  return (
    <SearchContainer>
      <InputSearchBase placeholder="Search for products, brands and more" />
      <InputSearchWrappeer>
        <SearchIcon />
      </InputSearchWrappeer>
    </SearchContainer>
  );
};

export default Search;
