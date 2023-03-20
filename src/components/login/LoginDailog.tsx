import { Box, Button, Dialog, TextField, Typography } from "@mui/material";
import { style, styled } from "@mui/system";
import React, { useContext, useState } from "react";
import { authenticateLogin, authenticateSignup } from "../../service/api";
import { DataContext } from "../../context/DataProvider";

const Component = styled(Box)`
  max-height: 70vh;
`;

const Image = styled(Box)`
  height: inherit;
  width: 30%;
  background: #2874f0
    url(https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  padding: 45px 35px;
  & > p,
  & > h5 {
    color: #ffffff;
    font-weight: 600;
  }
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > button {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #ffffff;
  font-weight: 700;
  height: 48px;
  border-radius: 2px;
`;

const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  font-weight: 700;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
  margin-top: 20px;
`;

const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;
`;

const LoginDailog = ({ open, setOpen }: any) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    phone: "",
  });

  const [login, setLogin] = useState({ userName: "", password: "" });

  const { setAccount }: any = useContext(DataContext);

  const handleClose = () => {
    setOpen(false);
    setIsSignUp(false);
  };

  const handleInputChange = (e: any) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const onInputChangee = (e: any) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };


  const signupUser = async () => {
    await authenticateSignup(signupData)
      .then((res) => {
        handleClose();
        setAccount(res?.data?.data?.firstName);
      })
      .catch((err) => {
        return err;
      });
  };

  const loginUser = async () => {
    await authenticateLogin(login)
      .then((res) => {
        handleClose();
        setAccount(res?.data?.data?.firstName);
      })
      .catch((err) => {
        return err;
      });
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unsert" } }}
      maxWidth="md"
    >
      <Component>
        <Box style={{ display: "flex" }}>
          <Image>
            <Typography variant="h5">
              {!isSignUp ? "Login" : "Looks like you're new here!"}
            </Typography>
            <Typography style={{ marginTop: 20 }}>
              {!isSignUp
                ? "Get access to your Orders, Wishlist and Recommendations"
                : "Sign up with your mobile number to get started"}
            </Typography>
          </Image>

          {!isSignUp ? (
            <Wrapper>
              <TextField
                variant="standard"
                label="Enter Email/Mobile number"
                name="userName"
                onChange={(e) => onInputChangee(e)}
              />
              <TextField
                variant="standard"
                label="Enter Password"
                name="password"
                onChange={(e) => onInputChangee(e)}
              />
              <Text>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Text>
              <LoginButton onClick={loginUser}>Login</LoginButton>
              <Typography style={{ textAlign: "center", marginTop: 20 }}>
                OR
              </Typography>
              <RequestOTP>Request OTP</RequestOTP>
              <CreateAccount onClick={() => setIsSignUp(true)}>
                New to Flipkart? Create an account
              </CreateAccount>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                variant="standard"
                label="Enter Firstname"
                name="firstName"
                onChange={(e) => handleInputChange(e)}
              />
              <TextField
                variant="standard"
                label="Enter Lastname"
                name="lastName"
                onChange={(e) => handleInputChange(e)}
              />
              <TextField
                variant="standard"
                label="Enter Username"
                name="userName"
                onChange={(e) => handleInputChange(e)}
              />
              <TextField
                variant="standard"
                label="Enter Email"
                name="email"
                onChange={(e) => handleInputChange(e)}
              />
              <TextField
                variant="standard"
                label="Enter Password"
                name="password"
                onChange={(e) => handleInputChange(e)}
              />
              <TextField
                variant="standard"
                label="Enter Phone"
                name="phone"
                onChange={(e) => handleInputChange(e)}
              />

              <LoginButton onClick={signupUser}>Continue </LoginButton>
              <RequestOTP onClick={() => setIsSignUp(false)}>
                Existing User? Log in
              </RequestOTP>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDailog;
