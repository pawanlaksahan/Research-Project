import React from "react";
import houseCard from "../media/houseCard.png";

import { Box, Button, Container, styled, Typography } from "@mui/material";
import Navbar from "./Navbar";
import CustomButton from "./CustomButton";
import RunningMan from "../media/RunningImg.png";
import Workout from "../media/OIP.jpg";
import Slider, {
  SliderThumb,
  SliderValueLabelProps,
} from "@mui/material/Slider";
import Tooltip from "@mui/material/Tooltip";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Gym from "../media/Gym.jpg"

const DataInsertion = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(0),
    alignItems: "center",
    [theme.breakpoints.down("s")]: {
      flexDirection: "column",
      textAlign: "left",
    },
  }));

  const ImgContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const Divider = styled("div")(({ theme }) => ({
    width: "13%",
    height: "5px",
    backgroundColor: "#000339",
    [theme.breakpoints.down("md")]: {
      marginLeft: "auto",
      marginRight: "auto",
    },
  }));

  const PrettoSlider = styled(Slider)({
    color: "#52af77",
    height: 8,
    "& .MuiSlider-track": {
      border: "none",
    },
    "& .MuiSlider-thumb": {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit",
      },
      "&:before": {
        display: "none",
      },
    },
    "& .MuiSlider-valueLabel": {
      lineHeight: 1.2,
      fontSize: 12,
      background: "unset",
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: "50% 50% 50% 0",
      backgroundColor: "#52af77",
      transformOrigin: "bottom left",
      transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
      "&:before": { display: "none" },
      "&.MuiSlider-valueLabelOpen": {
        transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
      },
      "& > *": {
        transform: "rotate(45deg)",
      },
    },
  });

  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ py: 10 }}>
      <Container>
        <CustomBox>
          <ImgContainer>
            <img src={Gym} alt="house" style={{ maxWidth: "80%" }} />
          </ImgContainer>

          <Box>
            <Divider />
            <Typography
              sx={{
                fontSize: "35px",
                color: "#000339",
                fontWeight: "700",
                my: 3,
              }}
            >
              Insert your body measurements in the given form.
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#5A6473",
                lineHeight: "27px",
              }}
            >
              When you own a home, you commit to living in one location for a
              period of time. We are here to ensure that this will be a
              memorable experience for you.
            </Typography>
            <br />
            <br />
            <FormControl required sx={{ m: 1, minWidth: 520 }}>
              <InputLabel id="demo-simple-select-required-label">
                Gender
              </InputLabel>
              <Select
                labelId="demo-simple-select-required-label"
                id="demo-simple-select-required"
                value={age}
                label="Age *"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Male</MenuItem>
                <MenuItem value={20}>Female</MenuItem>
                <MenuItem value={30}>Do not want to disclose</MenuItem>
              </Select>
            </FormControl>

            <Box sx={{ flex: "1" }}>
              <Box sx={{ m: 3 }} />
              <Typography gutterBottom>Age</Typography>
              <PrettoSlider
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={20}
              />
            </Box>
            <Box sx={{ flex: "1" }}>
              <Box sx={{ m: 3 }} />
              <Typography gutterBottom>Weight</Typography>
              <PrettoSlider
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={20}
              />
            </Box>
            <Box sx={{ flex: "1" }}>
              <Box sx={{ m: 3 }} />
              <Typography gutterBottom>Height</Typography>
              <PrettoSlider
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={20}
              />
                <br/>
                <br/> <br/> 
              <CustomButton
                backgroundColor="#1a237e"
                color="#fff"
                buttonText="Submit Body Measurements"
                getStartedBtn={true}
              />
            </Box>
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default DataInsertion;
