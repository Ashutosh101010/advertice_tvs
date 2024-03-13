import { CardMedia, Card, CardContent, Typography, CardActions, Button, TextField, Box, Grid, FormControlLabel, Radio, Checkbox, InputLabel, Select, MenuItem, FormControl, useMediaQuery, RadioGroup, Dialog, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react';
import logo from "../assets/ronin-logo.png";
import bgImage from "../assets/banner-m.webp";
import LocationIcon from "../assets/MicrosoftTeams-image (7).png";
import axios from 'axios';

const SubmitForm = () => {
    const BASE_URL = "https://tvsapi.advertice.in"
    const isMobileDevice = useMediaQuery('(min-width:787px)');
    const [isValidNumber, setIsValidNumber] = useState(false);
    const [isValidOtp, setIsValidOtp] = useState(false);
    const [checked, setChecked] = useState(false);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [otpNumber, setOtpNumber] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [gender, setGender] = useState('');
    const [pinCode, setPinCode] = useState('');
    const [stateList, setStateList] = useState([]);
    const [cityList, setCityList] = useState([]);
    const [error, setError] = useState('');
    const [purchasePlan, setPurchasePlan] = useState('');
    const [successDialog, setSuccessDialog] = useState(false);

    const iconStyle = {
        background: 'linear-gradient(89.58deg, #c71c26 .51%, #213180 97.99%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'linear-gradient(89.58deg, #c71c26 .51%, #213180 97.99%)',
        cursor: "pointer"
    };
    useEffect(() => {
        fetchState();
    }, [])

    const fetchState = async () => {
        try {
            const response = await axios.get(BASE_URL + '/meta/state');
            const states = response?.data?.states;
            setStateList(states)
        } catch (error) {

        }
    }
    const handleFullName = (event) => {
        setFullName(event.target.value);
    };
    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleMobileNumber = (event) => {
        setMobileNumber(event.target.value)
        const value = event.target.value.trim();
        // Check if the input is a valid 10-digit number
        if (/^\d{10}$/.test(value)) {
            setIsValidNumber(true);
        } else {
            setIsValidNumber(false);
        }
    };
    const handleOtp = (event) => {
        setOtpNumber(event.target.value)
        const value = event.target.value.trim();
        // Check if the input is a valid 10-digit number
        if (/^\d{10}$/.test(value)) {
            setIsValidOtp(true);
        } else {
            setIsValidOtp(false);
        }
    };

    const handleState = (event) => {
        const city = event.target.value
        setCityList(city?.city)
        setState(event.target.value);
    };
    const handleCity = (event) => {
        setCity(event.target.value);
    };
    const handleLocation = (event) => {
        setPinCode(event.target.value);
    };
    const handleGender = (event) => {
        setGender(event.target.value);
    };

    const handleResendOtp = async () => {
        if (isValidNumber === true) {
            try {
                const response = await axios.post(BASE_URL + '/otp/send', { contact: Number(mobileNumber) });
            } catch (error) {
                console.log(error);
            }

        }
    }
    const handlePurchase = (event) => {
        setPurchasePlan(event.target.value);
    };
    const handleCheckbox = (event) =>{
        setChecked(!checked)
console.log(event.target.checked);
    }

    const handleSubmit = async () => {
        const body = {
            fullName: fullName,
            email: email,
            contact: mobileNumber,
            otp: otpNumber,
            cityId: city,
            pincode: pinCode,
            gender: gender,
            purchasePlan: purchasePlan
        }
        if (fullName && email && mobileNumber && otpNumber && city && pinCode && gender && purchasePlan) {
            const response = await axios.post(BASE_URL + '/lead/create', body);
            console.log('response', response.data);
            if (response.data.status === true) {
                setSuccessDialog(true)
            }
        } else {
            setError("All fields Are required")
        }
       
    }

    return (
        <div>
            <Box display={'flex'} justifyContent={'end'} sx={{ backgroundImage: !isMobileDevice ? `url(${bgImage})` : "", height: !isMobileDevice ? "250px" : "", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                <img src={logo} alt='logo' style={{ margin: "20px", height: !isMobileDevice ? "35px" : "" }} />
            </Box>
            <Box display={'flex'} justifyContent={'center'}>
                <Card sx={{ width: ['90%', '60%'], height: '100%', p: [0, 10], m: [1, 0] }}>
                    {/* <CardMedia
                    sx={{ height: 140 }}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="green iguana"
                /> */}
                    <Typography fontWeight={'600'} fontSize={'15px'} textAlign={'center'} color={'#192841'} mt={'30px'}>
                        PLEASE SHARE YOUR PERSONAL DETAILS
                    </Typography>
                    <CardContent>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2} pt={4}>
                                <Grid item xs={12} sm={6} md={6}>
                                    <TextField
                                        InputProps={{ style: { borderRadius: '25px', background: "#f2f2f2" } }}
                                        fullWidth
                                        type='text'
                                        placeholder='Full Name'
                                        onChange={handleFullName}
                                        value={fullName}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6}>
                                    <TextField
                                        InputProps={{ style: { borderRadius: '25px', background: "#f2f2f2" } }}
                                        fullWidth
                                        type='email'
                                        placeholder='Email'
                                        onChange={handleEmail}
                                        value={email}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} pt={4}>
                                <Grid item xs={12} sm={6} md={6}>
                                    <TextField
                                        inputProps={{
                                            maxLength: 10,
                                            minlength: 10
                                        }}
                                        InputProps={{
                                            style: { borderRadius: '25px', background: "#f2f2f2" },
                                            endAdornment: (
                                                <Typography
                                                    onClick={handleResendOtp}
                                                    fontWeight={'600'}
                                                    width={'25%'}
                                                    style={isValidNumber ? iconStyle : {}}
                                                >
                                                    Request OTP
                                                </Typography>
                                            )
                                        }}
                                        fullWidth
                                        type='tel'
                                        placeholder='Mobile Number'
                                        onChange={handleMobileNumber}
                                        value={mobileNumber}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6}>
                                    <TextField
                                        // inputProps={{
                                        //     maxLength: 10,
                                        //     minlength: 10
                                        // }}
                                        InputProps={{
                                            style: { borderRadius: '25px', background: "#f2f2f2" },
                                            endAdornment: (
                                                <Typography
                                                onClick={handleResendOtp}
                                                    fontWeight={'600'}
                                                    width={'25%'}
                                                    style={isValidOtp ? iconStyle : {}}
                                                >
                                                    Resend OTP
                                                </Typography>
                                            )
                                        }}
                                        onChange={handleOtp}
                                        value={otpNumber}
                                        fullWidth
                                        type='tel'
                                        placeholder='OTP' />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} pt={4}>
                                <Grid item xs={12} sm={6} md={6}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">State</InputLabel>
                                        <Select
                                            sx={{ borderRadius: '25px', background: "#f2f2f2" }}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            // value={age}
                                            label="State"
                                            onChange={handleState}
                                            value={state}
                                        >
                                            {
                                                stateList?.length > 0 && stateList?.map((state) => {
                                                    return <MenuItem value={state}>{state.name}</MenuItem>
                                                })
                                            }
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6} md={6}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">City</InputLabel>
                                        <Select
                                            sx={{ borderRadius: '25px', background: "#f2f2f2" }}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            // value={age}
                                            label="City"
                                            onChange={handleCity}
                                            value={city}
                                        >
                                            {
                                                cityList?.length > 0 && cityList?.map((city) => {
                                                    return <MenuItem value={city.id}>{city.city}</MenuItem>
                                                })
                                            }
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} pt={4}>
                                <Grid item xs={12} sm={6} md={6}>
                                    <TextField
                                        InputProps={{
                                            style: { borderRadius: '25px', background: "#f2f2f2" },
                                            endAdornment: (
                                                <>
                                                    <img src={LocationIcon} alt='' />
                                                </>
                                            )
                                        }}
                                        fullWidth
                                        type='text'
                                        placeholder='Pincode/Location'
                                        onChange={handleLocation}
                                        value={pinCode}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                        <Select
                                            sx={{ borderRadius: '25px', background: "#f2f2f2" }}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={gender}
                                            label="Gender"
                                            onChange={handleGender}
                                        >
                                            <MenuItem value={'male'}>Male</MenuItem>
                                            <MenuItem value={'female'}>Female</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>

                        </Box>
                        <Box>
                            <Typography
                                fontSize={'14px'} fontWeight={'600'} mt={2}>
                                Purches Plan?
                            </Typography>




                            <Box
                                display={['grid', 'flex']}
                            >
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    value={purchasePlan}
                                    onChange={handlePurchase}
                                >
                                   <FormControlLabel value="week" control={<Radio />} label="Within a week" />
                                    <FormControlLabel value="month" control={<Radio />} label="Within a month" />
                                    <FormControlLabel value="threemonth" control={<Radio />} label="Within next 3 months" />
                                </RadioGroup>
                            </Box>
                        </Box>
                        <h3 style={{ color: "red" }}>{error}</h3>
                    </CardContent>
                    <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
                        <FormControlLabel control={<Checkbox defaultChecked onChange={handleCheckbox} />} label="I authorise TVS Motor Company to contact me via SMS, email, WhatsApp and other modes
                                            of communication.
                                            " />
                    </CardContent>
                    <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                        disabled={checked === true ? true : false}
                            sx={{
                                background: 'linear-gradient(89.58deg, #c71c26 .51%, #213180 97.99%)',
                                borderRadius: '50px',
                                border: 'solid 1px #fff',
                                color: 'white',
                                boxShadow: '0px 6px 6px rgba(0,0,0,0.25)',
                                textTransform: 'uppercase',
                                fontWeight: '500',
                                fontSize: '18px',
                                padding: '10px 30px'
                            }}
                            onClick={handleSubmit}
                            size="small">Submit</Button>
                    </CardActions>
                </Card>
            </Box>
            <Dialog open={successDialog} onClose={() => setSuccessDialog(false)}>
               <Card sx={{padding: "20px", textAlign: "center"}}>
                <h1>Test Ride Confirmed</h1>
                <h3>Thank you for choosing</h3>
                    <div style={{textAlign: "center"}}><Button
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
            </Dialog>
        </div>
    )
}

export default SubmitForm