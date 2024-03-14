import { Box, Button, Card } from "@mui/material";
import React from "react";
import image1 from "../assets/feature-slide-1 (1).webp"

const ThankyouPage = ({setSuccessDialog}) =>{

    return(
        <React.Fragment>
  <Card sx={{padding: "20px", textAlign: "center"}}>
                <h1>Test Ride Confirmed</h1>
                <h3>Thank you for choosing</h3>
                <Box>
                <img alt='' width={'100%'} height={'220px'} src={image1} />
                </Box>
                    <div style={{textAlign: "center"}}>
                        <Button
                        variant="contained"
                        sx={{
                            padding: "1rem",
                            borderRadius: "0.8rem",
                            // background: `${colors.button.secondary}`,
                            "&:hover": {
                                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                            },
                        }}
                        // disabled={activeStep === -1}
                        onClick={() => setSuccessDialog(false)}
                    >
                      Okay
                    </Button></div>
               </Card>
        </React.Fragment>
    )
};

export default ThankyouPage;