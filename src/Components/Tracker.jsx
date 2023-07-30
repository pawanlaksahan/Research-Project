import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Box } from "@mui/material";
import DietPlan from "../media/TrackPageDietPlan.png";
import WorkoutPlan from "../media/TrackerPageWorkoutPlan.png";
import ProgressTracker from "../media/TrackerPageProgreeTracker.png";
import Grid from "@mui/material/Grid";
import Navbar from "./Navbar";

export default function Tracker() {
  return (
    <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "100vh" }}>
      <br/>
      <Typography
        variant="h3"
        sx={{ color: "#5A6473", my: 4, textAlign: "center" }}
      >
        Track And Stay Updated
      </Typography>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: "10%",
        }}
      >
        <Card sx={{ minWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image={WorkoutPlan}
              alt="Diet Plan"
            />
            <CardContent sx={{
              backgroundColor:"#00e676",
              color:"#fff",
              "&:hover": {
                backgroundColor:"#fff",
                color:"#00e676",
                borderColor: "00e676"
              },
              }}>
              <Typography gutterBottom variant="h5" component="div">
                Workout Tracker
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Track Workouts and Performaces
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ minWidth: 345 }}>
        <CardActionArea >
            <CardMedia
              component="img"
              height="240"
              image={DietPlan}
              alt="Diet Plan"
            />
            <CardContent sx={{
              backgroundColor:"#00e676",
              color:"#fff",
              "&:hover": {
                backgroundColor:"#fff",
                color:"#00e676",
                borderColor: "00e676"
              },
              }}>
              <Typography gutterBottom variant="h5" component="div">
                Diet Tracker
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Track Diet Plans & adherence
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ minWidth: 345 }}>
        <CardActionArea >
            <CardMedia
              component="img"
              height="240"
              image={ProgressTracker}
              alt="Progress Tracker"
            />
            <CardContent sx={{
              backgroundColor:"#00e676",
              color:"#fff",
              "&:hover": {
                backgroundColor:"#fff",
                color:"#00e676",
                borderColor: "00e676"
              },
              }}>
              <Typography gutterBottom variant="h5" component="div">
                Progress
              </Typography>
              <Typography variant="body2" color="text.secondary">
                View the progress of diet & workout plans
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Box>
  );
}
