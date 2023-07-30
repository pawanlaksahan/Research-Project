import * as React from 'react';
import Typography from '@mui/material/Typography';
import {Box  } from '@mui/material';
import Navbar from './Navbar';
import Paper from "@mui/material/Paper";
import BobdyBlast from "../media/BodyweightBlast.jpg"
import CustomButton from './CustomButton';


export default function Exercise(){


  return(
    <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "100vh" }}>
      <Navbar/>
      <Box sx={{ mt: 5, backgroundColor: "#F5FAFE", py: 10 }}> 
        <Paper sx={{display:"flex",flex:"1",flexDirection:"row"}}>
          
          <Box >
          <Typography
            sx={{ color: "#000339", fontSize: "25px", fontWeight: "bold"  }}
          >
            Bodyweight Blast
          </Typography>
          <br></br>
          
          <img
              src={BobdyBlast}
              alt="heroImg"
              style={{
                maxWidth: "550px",
                marginTop: "2rem",
                marginBottom:"5rem",
                marginLeft:"50px",
                marginRight:"200px",
              
               
                
              }}
            />

          </Box>
          
           

          <Box>
            <Typography variant='h2' sx={{color:"000339",fontSize:"20px", fontWeight: "bold"}}>
              STEPS:
            </Typography>
            <br></br>
            <br></br>
            <Typography variant='body5' sx={{color:"000339",fontSize:"14px"}}>
              1.Get Down on all fours, placing your hands slightly wider than your shoulders.<br></br><br></br>
              2.Straighten Your Arms and legs<br></br><br></br>
              3.Lower Your Body<br></br><br></br>
              4.Pause, Then Push Your Self Back up.<br></br><br></br>
              5.Repeat.<br></br><br></br><br></br>
            </Typography>
            <CustomButton
                  backgroundColor="#00e676"
                  color="#fff"
                  buttonText="Complete"
                  heroBtn={true}
                  
                />
          </Box>

         

        </Paper>

      </Box>
    </Box>


  );
}