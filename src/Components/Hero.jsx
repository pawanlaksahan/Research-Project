import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";
import RunningMan from "../media/RunningImg.png";
import CustomButton from "./CustomButton";
import "./Hero.css";

const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "80vh" }}>
      <Container>
        <Navbar />
        <CustomBox>
            <Box sx={{ flex: "1" }}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "18px",
                  color: "#687690",
                  fontWeight: "500",
                  mt: 1,
                  mb: 4,
                }}
              >
                Welcome to ProFitness
              </Typography>
              <Title variant="h1">Build Your Body Transform Your Life.</Title>
              <Typography
                variant="body2"
                sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
              >
                Welcome to our fitness page, where we believe that fitness is
                not just a hobby, but a way of life. Our page is dedicated to
                providing you with the latest fitness tips, workout routines,
                and healthy eating ideas that will help you achieve your fitness
                goals.
              </Typography>

              <div>
                <CustomButton
                  backgroundColor="#0F1B4C"
                  color="#fff"
                  buttonText="More About Us"
                  heroBtn={true}
                />
              </div>
              
            </Box>
         
          <Box sx={{ flex: "1.25" }}>
            <img
              src={RunningMan}
              alt="heroImg"
              style={{ maxWidth: "100%", marginBottom: "2rem" }}
            />
          </Box>

        </CustomBox>
      </Container>
    </Box>
  );
};

export default Hero;
