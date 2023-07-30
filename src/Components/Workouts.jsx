import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import WorkoutsCard from "./WorkoutCard";

const Workouts = () => {
  const theme = useTheme();

  const PropertiesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const PropertiesTextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  }));

  const obj1 = {
    title: "Body Weight Blast",
    description: "Gain Body Weight Blast",
    img: "",
  };
  const obj2 = {
    title: "HIIT IT Excersises",
    description: "Gain HIIT IT Excersises",
    img: "",
  };
  const obj3 = {
    title: "Cardio Excersises",
    description: "Gain Cardio Excersises",
    img: "",
  };
  const obj4 = {
    title: "Yoga  Excersises..",
    description: "Gain Yoga  Excersises",
    img: "",
  };

  return (
    <Box sx={{ mt: 5, backgroundColor: "#F5FAFE", py: 10 }}>
      <Container>
        <PropertiesTextBox>
          <Typography
            sx={{ color: "#000339", fontSize: "35px", fontWeight: "bold" }}
          >
            Your Workouts
          </Typography>
          <Typography sx={{ color: "#5A6473", fontSize: "16px", mt: 1 }}>
            Everything you need to know when you are searching for a diet plan!
          </Typography>
        </PropertiesTextBox>
        <br></br>
        <br></br>
        <WorkoutsCard {...obj1} />
        <WorkoutsCard {...obj2} />
        <WorkoutsCard {...obj3} />
        <WorkoutsCard {...obj4} />
      </Container>
    </Box>
  );
};

export default Workouts;
