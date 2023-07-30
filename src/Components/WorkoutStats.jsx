import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const WorkoutStats = () => {
  const theme = useTheme();

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Novem",
      "Dec",
    ],
    datasets: [
      {
        data: [80, 78, 63, 62, 90, 10, 17, 35, 57, 89, 42, 56],
        backgroundColor: "transparent",
        borderColor: "#f26c6d",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.5,
      },
    ],
  };

  const options = {
    plugings: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 10,
          callback: (value) => value + "%",
        },
        grid: {
          borderDash: [10],
        },
      },
    },
  };

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

  return (
    <Box sx={{ mt: 5, backgroundColor: "#F5FAFE", py: 10 }}>
      <Container>
        <PropertiesTextBox>
          <Typography
            sx={{ color: "#000339", fontSize: "35px", fontWeight: "bold" }}
          >
            Your Workout Stats
          </Typography>
          <Typography sx={{ color: "#5A6473", fontSize: "16px", mt: 1 }}>
            Stats Related to every workout you been engaed in!
          </Typography>
        </PropertiesTextBox>
        <br></br>
        <br></br>
        <Paper>
          <br />
          <br></br>
          <br></br>
          <div style={{ width: "1100px", height: "500px", marginLeft: "20px" }}>
            <Line data={data} options={options}></Line>
          </div>
          <br />
          <br></br>
          <br></br>
        </Paper>
      </Container>
    </Box>
  );
};

export default WorkoutStats;
