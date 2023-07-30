import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Box } from "@mui/material";
import Breakfast from "../media/breakfast.jpg";
import Dinner from "../media/dinner.jpg";
import Lunch from "../media/lunch.jpg";
import Grid from "@mui/material/Grid";
import Navbar from "./Navbar";


export default function PlanDetail() {
  return (
    <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "100vh" }}>
      <br/>
      <Typography
        variant="h3"
        sx={{ color: "#5A6473", my: 4, textAlign: "center" }}
      >
        Breakfast : Monday
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
          <CardContent sx={{backgroundColor:"#b3ffda"}}> 
              <Typography gutterBottom variant="h5" component="div">
                Callories
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Carbs :50g <br></br>
                Protein :34g <br></br>
                Fats :8g <br></br>
                <br></br>
                Total :92g
              </Typography>
              
            </CardContent>
            <CardMedia
              component="img"
              height="240"
              image={Lunch}
              alt="Lunch"
            />
            
          </CardActionArea>
        </Card>

        <Card sx={{ minWidth: 345 }}>
          <CardActionArea>
          <CardContent sx={{backgroundColor:"#b3ffda"}}>
              <Typography gutterBottom variant="h5" component="div">
                Positive Effects
              </Typography>
              <Typography variant="body2" color="text.secondary">
                *Healthy Blood Pressure <br></br>
                *Natural Energy <br></br>
                *Healthy String Bones <br></br>
                *Keeps Skin, teeth and eyes healthy
              </Typography>
              
            </CardContent>
            <CardMedia
              component="img"
              height="240"
              image={Dinner}
              alt="Dinner"
            />
           
          </CardActionArea>
        </Card>
      </Grid>
    </Box>
  );
}
