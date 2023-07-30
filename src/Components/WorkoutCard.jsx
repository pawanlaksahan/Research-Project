import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import image from "../media/Bench.jpg";
import CustomButton from "./CustomButton";

const WorkoutsCard = ({title, description, img}) => {
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
//   console.log(props);
  return (
    <Box sx={{ mt: 1, backgroundColor: "#F5FAFE", py: 1 }}>
      <Container>
        <Card sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "22 0 auto" }}>
              
              <Typography variant="h5" component="div">
                {title}
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {description}
              </Typography>

              <br></br>
              <CustomButton
                  backgroundColor="#0F1B4C"
                  color="#fff"
                  buttonText="Start Excerise"
                  heroBtn={true}
                />
                <br></br>
                <CustomButton
                  backgroundColor="#00e676"
                  color="#fff"
                  buttonText="Complete process"
                  heroBtn={true}
                />
         
            </CardContent>

            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>
          <CardMedia
            component="img"
            sx={{
              width: 255,
              marginLeft: "602px",
              height: "182px",
              marginTop: "17px",
              borderRadius: "5px",
              marginBottom: "17px",
            }}
            image={image}
            alt="Live from space album cover"
          />
        </Card>
      </Container>
    </Box>
  );
};

export default WorkoutsCard;
