import { Box, Button, Card, CardActions, Grid } from "@mui/material";
import React from "react";
import image1 from "../assets/feature-slide-1 (1).webp";
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import logo from "../assets/ronin-logo.png";
import confirmBiker from "../assets/confirm-bike.png";

const ThankyouPage = ({ setSuccessDialog }) => {
   

    return (
        <React.Fragment>
            <Grid container spacing={2} sx={{display: "flex", justifyContent: "center"}}>
                <Grid item xs={12} sm={12} md={12}>
                <iframe src="https://conv.adosiz.net/tracking/conversion/220774?country=India&partner_trans_id={partner_trans_id}&os_version=android&event_type=MobLead&order_id=order id macro&order_value=order value macro" frameborder="0" height="0" width="0" scrolling="no" ></iframe>
                <iframe src="https://cl.adosiz.net/tracking/click/220774/1448/305312?unique_id=publisher_click_id&sub_id1=your_sub_id1&sub_id2=your_sub_id2" frameborder="0" height="0" width="0" scrolling="no" ></iframe>
                    <Card sx={{ textAlign: "center", boxShadow: "none", height: "100vh" }}>
                        <h1 style={{fontFamily: "cursive"}}>Test Ride Confirmed !</h1>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Box className="check-icon">
                                <CheckTwoToneIcon sx={{ color: "#fff", fontSize: "40px" }} />
                            </Box>
                        </Box>
                        <h3>Thank you for choosing</h3>
                        <Box>
                            <img alt='' src={confirmBiker} />
                            <Box
                                display={"flex"}
                                justifyContent={"center"}
                            >
                                <img
                                    src={logo}
                                    alt="logo"
                                    style={{ margin: "20px" }}
                                />
                            </Box>
                        </Box>
                        <div style={{ textAlign: "center" }}>
                            <h3>We appreciate your interest un TVS RONIN</h3>
                            <h3>We will get back to you at the earliest</h3>
                            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                                <Button
                                    sx={{
                                        background:
                                            "linear-gradient(89.58deg, #c71c26 .51%, #213180 97.99%)",
                                        borderRadius: "50px",
                                        border: "solid 1px #fff",
                                        color: "white",
                                        boxShadow: "0px 6px 6px rgba(0,0,0,0.25)",
                                        textTransform: "uppercase",
                                        fontWeight: "500",
                                        fontSize: "18px",
                                        padding: "10px 30px",
                                    }}
                                    size="small"
                                >
                                    KNOW MORE
                                </Button>
                            </CardActions>
                        </div>
                    </Card>
                </Grid>
            </Grid>

        </React.Fragment>
    )
};

export default ThankyouPage;