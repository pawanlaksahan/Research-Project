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


export default function WeekMplans() {
  return (
    <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "100vh" }}>
      <br/>
      <Typography
        variant="h3"
        sx={{ color: "#5A6473", my: 4, textAlign: "center" }}
      >
        Meal Plans
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
          <CardActionArea sx={{backgroundColor:"#b3ffda"}}>
          <CardContent >
              <Typography gutterBottom variant="h5" component="div">
                Breakfast
              </Typography>
              
            </CardContent>
            <CardMedia
              component="img"
              height="240"
              image={Breakfast}
              alt="Breakfast"
            />
            <CardContent sx={{backgroundColor:"#b3ffda"}}>
              <Typography variant="body2" color="text.secondary">
                *Greek Youghurt <br></br>
                *Berries <br></br>
                *Nuts <br></br>
                *Bananna <br></br>
                *You should at drink at least 650ml(3 cups) of water
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ minWidth: 345 }}>
          <CardActionArea sx={{backgroundColor:"#b3ffda"}}>
          <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lunch
              </Typography>
              
            </CardContent>
            <CardMedia
              component="img"
              height="240"
              image={Lunch}
              alt="Lunch"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                *Rice <br></br>
                *Beans <br></br>
                *Chicken <br></br>
                *A green race <br></br>
                *You should at drink at least 700ml of water
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ minWidth: 345 }}>
          <CardActionArea sx={{backgroundColor:"#b3ffda"}}>
          <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Dinner
              </Typography>
              
            </CardContent>
            <CardMedia
              component="img"
              height="240"
              image={Dinner}
              alt="Dinner"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                *Bread <br></br>
                *Curry <br></br>
                *Soup <br></br>
                *Simple Fruit <br></br>
                *You should at drink at least 850 of water
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Box>
  );
}
