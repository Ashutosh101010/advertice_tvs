import { Box, Card, CardMedia, TextField, Typography, useMediaQuery } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import '../';
import image1 from "../assets/feature-slide-1 (1).webp"

const BannerSection = () => {

    const [banners, setBanners] = useState([]);
    const isMobile = useMediaQuery("(min-width:600px)");


    const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentIndex(prevIndex => (prevIndex + 1) % banners.length);
    //     }, 1500);
    //     return () => clearInterval(interval);
    // }, [banners]);

    // useEffect(() => {
    //     if (sliderRef.current) {
    //         sliderRef.current.style.transform = `translateX(-${currentIndex * (900 / banners.length)}%)`;
    //     }
    // }, [currentIndex, banners.length]);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    return (
        <Box display={'flex'} justifyContent={'center'}>
        <Card sx={{ width: ['90%', '60%'], height: '100%', p: [0, 10] }}>
            <Box
                sx={{
                    mb: 2,
                    mt: 4,
                    overflow: 'hidden',
                    '&:hover': { overflowX: 'auto' },
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#402f2f69 transparent',
                    WebkitOverflowScrolling: 'touch',
                    '&::-webkit-scrollbar': {
                        height: '6px'
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: '#888',
                        borderRadius: '10px',
                        width: '1px',
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                        background: '#402f2f69',
                    },
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <div style={{ width: isMobile ? '80%' : '100%' }}>
                    <Carousel
                        swipeable={false}
                        draggable={false}
                        showDots={false}
                        responsive={responsive}
                        ssr={true}
                        infinite={true}
                        autoPlay={false}
                        autoPlaySpeed={1000}
                        keyBoardControl={false}
                        // customTransition="all 3"
                        transitionDuration={1000}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["desktop"]}
                        // deviceType={this.props.deviceType}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                        arrows={true}
                        renderButtonGroupOutside={true}
                    >
                        <div style={{margin: "5px", width: "326px"}}>
                        <img alt='' width={'100%'} height={'220px'} src={image1} />
                        <h1>Image 1</h1>
                        </div>
                        <div style={{margin: "5px", width: "326px"}}>
                        <img alt='' width={'100%'} height={'220px'} src={image1} />
                        <h1>Image 1</h1>
                        </div>
                        <div style={{margin: "5px", width: "326px"}}>
                        <img alt='' width={'100%'} height={'220px'} src={image1} />
                        <h1>Image 1</h1>
                        </div>
                        {/* {
                            banners.map((item, i) => (
                                <div key={i} style={{padding: '1rem'}}>
                                    <img alt='' width={'100%'} height={'220px'} src={Endpoints.mediaBaseUrl + item?.banner} />
                                </div>
                            ))
                        } */}
                    </Carousel>
                </div>
            </Box>
            </Card>
        </Box >
    )
}

export default BannerSection
