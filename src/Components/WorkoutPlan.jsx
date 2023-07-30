import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea ,Box  } from '@mui/material';
import DietPlan from "../media/TrackPageDietPlan.png";
import WorkoutPlan from "../media/TrackerPageWorkoutPlan.png";
import BenchPress from "../media/Bench.jpg";
import ProgressTracker from "../media/TrackerPageProgreeTracker.png";
import Grid from '@mui/material/Grid';
import Navbar from './Navbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';





export default function WorkoutPlans() {
 return(
    <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "100vh" }}>
    <Navbar/>
    <Grid sx={{display:"flex", flexDirection:"row",marginTop:"5%", justifyContent:"space-around"}}>
        <Card sx={{minWidth:550}}>
            <CardContent>
                {/* <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Item One"  />
                    <Tab label="Item Two"  />
                    <Tab label="Item Three"/>
                </Tabs> */}
            </CardContent>
            <CardMedia
             component="img"
             height="300"
             image={WorkoutPlan}
             alt="Diet Plan"
             /> 
        </Card>

        <Card sx={{minWidth:550}}>
            <CardContent
            height="30"
            backgroundColor= "D9FFF1"
            >
                Chest Workout
            </CardContent>
            <CardMedia
             component="img"
             height="200"
             image={BenchPress}
             alt="Diet Plan"
             /> 

            <CardContent
            height="30"
            backgroundColor=""
            >
                Total Sets : 4
                <br></br>
                Total Reps : 10
            </CardContent>
        </Card>
    </Grid>



</Box>
 )



}