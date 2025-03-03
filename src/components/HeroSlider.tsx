import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Box, Typography } from "@mui/material";

const slides = [
  {
    image: "/pexels-adrien-olichon-1257089-2663254.jpg",
    title: "Top-Quality Roofing Services",
    // special: true,
  },
  {
    image: "/pexels-digitalbuggu-204976.jpg",
    title: "Emergency Roof Repairs 24/7",
    special: true,
  },
  {
    image: "/pexels-pixabay-276643.jpg",
    title: "Book a Free Inspection Today",
    special: true, // Mark this slide as the special one
  },
];

const HeroSlider = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100%",
        overflow: "hidden",
        marginTop: "100px",
        position: "relative",
        padding: "0px",
      }}
    >
      <Swiper
        modules={[Autoplay]} // Removed Navigation module
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        style={{ width: "100%", height: "500px" }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                backgroundImage: slide.image ? `url(${slide.image})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "500px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                color: "#fff",
              }}
              className="custom-swiper"
            >
              {/* Dark Overlay */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                }}
              />
              <Typography
                variant="h4"
                sx={{
                  position: "absolute",
                  bottom: { xs: "20px", md: "50px" }, // Lower on mobile
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 2,
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: { xs: "1.2rem", md: "2.5rem" }, // Smaller font on mobile
                  padding: { xs: "8px 15px", md: "15px 30px" }, // Less padding on mobile
                  borderRadius: "10px",
                  backdropFilter: "blur(10px)",
                  background: "rgba(255, 255, 255, 0.2)",
                  color: "white",
                  textShadow: "2px 2px 5px rgba(0,0,0,0.8)",
                  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)", // Softer shadow on mobile
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                }}
              >
                {slide.title}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default HeroSlider;
