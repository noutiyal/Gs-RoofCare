import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
} from "@mui/material";
import { Box } from "@mui/material";
import { CheckCircle, AccessTime, Handshake } from "@mui/icons-material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RoofingIcon from "@mui/icons-material/Roofing";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import FlippingCard from "@/components/Cardshare";
import Divider from "@mui/material/Divider";
import emailjs from "emailjs-com";
import SendIcon from "@mui/icons-material/Send";

const services = [
  {
    title: "New Roof Installations",
    icon: <RoofingIcon fontSize="large" />,
    description: "Strong, long-lasting roofs built to perfection.",
  },
  {
    title: "Roof Repairs",
    icon: <HomeRepairServiceIcon fontSize="large" />,
    description: "Fixing leaks, damages, and general wear and tear.",
  },
  {
    title: "Flat Roofing",
    icon: <RoofingIcon fontSize="large" />,
    description: "Sleek, modern, and weather-resistant solutions.",
  },
  {
    title: "Chimney Repairs",
    icon: <HomeRepairServiceIcon fontSize="large" />,
    description: "Keeping your chimney safe and functional.",
  },
  {
    title: "Guttering & Drainage",
    icon: <WaterDropIcon fontSize="large" />,
    description: "Efficient water management systems.",
  },
  {
    title: "Emergency Roofing",
    icon: <FlashOnIcon fontSize="large" />,
    description: "Quick response to urgent roofing issues.",
  },
];
const features = [
  {
    title: "Expert Craftsmanship",
    description:
      "Our team is highly skilled with years of experience delivering durable and aesthetic roofing solutions.",
    icon: <CheckCircle sx={{ fontSize: 50, color: "#ff5f6d" }} />,
  },
  {
    title: "24/7 Emergency Support",
    description:
      "We are available anytime to assist with urgent roofing issues and ensure your peace of mind.",
    icon: <AccessTime sx={{ fontSize: 50, color: "#ff5f6d" }} />,
  },
  {
    title: "Customer Satisfaction",
    description:
      "We prioritize your needs, ensuring every project is completed with the highest level of care and professionalism.",
    icon: <Handshake sx={{ fontSize: 50, color: "#ff5f6d" }} />,
  },
];

const filecarddata = [
  {
    frontImage: "/roof1.webp",
    frontText: "Modern Roof Installation",
    backContent: "High-quality roofing solutions for long-lasting protection.",
  },
  {
    frontImage: "/roof2.webp",
    frontText: "Durable Roof Shingles",
    backContent: "Upgrade your home with top-tier weather-resistant shingles.",
  },
  {
    frontImage: "/pexels-pixabay-48895.jpg",
    frontText: "Metal Roofing",
    backContent: "Durable and sleek metal roofing for enhanced protection.",
  },
  {
    frontImage: "/tarped roof-3.jpg",
    frontText: "Emergency Roof Repair",
    backContent: "Quick and efficient roof repair to prevent further damage.",
  },
  {
    frontImage: "/images.jpeg",
    frontText: "Professional Roofers at Work",
    backContent: "Skilled professionals ensuring a strong and reliable roof.",
  },
  {
    frontImage: "/chimney-sweep-cleans-on-house-600nw-2473253149.webp",
    frontText: "Chimney & Roof Maintenance",
    backContent: "Expert chimney cleaning and roof maintenance services.",
  },
];

function Homepage() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData, "hjgjvj");

    emailjs
      .send(
        "service_vtql8zz", // EmailJS service ID
        "template_gofqyig", // EmailJS template ID
        {
          name: formData.name, // Ensure these match your EmailJS template variables
          email: formData.email,
          contact: formData.contact,
          message: formData.message,
        },
        "9zuVy_fCw12NxgbGV" // EmailJS public key
      )
      .then(
        (response) => {
          alert("Message sent successfully!");
          setFormData({ name: "", contact: "", email: "", message: "" }); // Clear form after successful send
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <Container>
      {/* Welcome Text */}
      <Box
        sx={{
          textAlign: "center",
          mt: 4,
          px: 2,
          animation: "fadeIn 1.5s ease-in-out",
        }}
      >
        {/* Animated Gradient Header */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            background: "linear-gradient(90deg, #ff8a00, #e52e71)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textTransform: "uppercase",
            letterSpacing: "2px",
            mb: 2,
          }}
        >
          Welcome to Gs RoofCare
        </Typography>

        {/* Subtext with subtle styling */}
        <Typography
          variant="h6"
          sx={{
            color: "gray",
            maxWidth: "80%",
            mx: "auto",
            fontSize: { xs: "1rem", md: "1.1rem" },
          }}
        >
          <strong> Gs RoofCare Ltd</strong> is a trusted roofing company based
          in London, specializing in high-quality roofing solutions for
          residential and commercial properties. With years of experience, our
          skilled team is committed to excellence in roof repairs, replacements,
          and new installations. We take pride in delivering durable and
          reliable roofing services to protect your home or business. At Gs
          RoofCare Ltd, customer satisfaction and top-tier craftsmanship are our
          priorities. Contact us today for expert roofing solutions in London
          and the surrounding areas.
        </Typography>
        <div>
          <Grid
            marginTop={2}
            container
            spacing={2}
            marginLeft={"1rem"}
            justifyContent="center"
            alignItems={"center"}
          >
            {filecarddata.map((card, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <FlippingCard
                  frontImage={card.frontImage}
                  frontText={card.frontText}
                  backContent={card.backContent}
                />
              </Grid>
            ))}
          </Grid>
        </div>

        {/* CTA Button with hover effects */}
        <Button
          variant="contained"
          color="primary"
          sx={{
            mt: 3,
            px: 4,
            py: 1.5,
            fontSize: "1.2rem",
            borderRadius: "50px",
            background: "linear-gradient(45deg, #ff416c, #ff4b2b)",
            boxShadow: "0px 4px 15px rgba(255, 64, 107, 0.3)",
            "&:hover": {
              background: "linear-gradient(45deg, #ff4b2b, #ff416c)",
              transform: "scale(1.05)",
              transition: "0.3s ease-in-out",
            },
          }}
        >
          🚀 Book an Appointment
        </Button>

        <Box sx={{ marginTop: "2rem", px: 2 }}>
          <Grid container spacing={4}>
            {/* Left Side - Services Description */}
            <Grid item xs={12} md={8}>
              <Box sx={{ textAlign: "left", mt: 2 }}>
                <Typography variant="h5" gutterBottom>
                  Services
                </Typography>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  sx={{ position: "relative", display: "inline-block" }}
                >
                  Roofing Company London
                  <Divider
                    sx={{
                      width: "50px",
                      height: "4px",
                      backgroundColor: "red",
                      position: "absolute",
                      bottom: "-5px",
                      left: 0,
                    }}
                  />
                </Typography>
              </Box>
              <Typography
                variant="h6"
                sx={{
                  color: "gray",
                  mt: 2,
                  fontSize: { xs: "1rem", md: "1rem" },
                }}
              >
                <strong>Gs RoofCare Ltd</strong> is a trusted roofing company
                based in London, specializing in high-quality roofing solutions
                for residential and commercial properties. With years of
                experience, our skilled team is committed to excellence in roof
                repairs, replacements, and new installations. We take pride in
                delivering durable and reliable roofing services to protect your
                home or business. At Gs RoofCare Ltd, customer satisfaction and
                top-tier craftsmanship are our priorities. Contact us today for
                expert roofing solutions in London and the surrounding areas.
              </Typography>

              {/* Services List */}
              <Grid container spacing={2} sx={{ mt: 3 }}>
                <Grid item xs={6}>
                  <Typography
                    variant="h6"
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <CheckCircleIcon sx={{ color: "#3e767e" }} /> New Roof
                    Installs
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <CheckCircleIcon sx={{ color: "#3e767e" }} /> Verge And
                    Ridge Repair
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <CheckCircleIcon sx={{ color: "#3e767e" }} /> Flat Roofing
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="h6"
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <CheckCircleIcon sx={{ color: "#3e767e" }} /> Storm Damage
                    Repair
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <CheckCircleIcon sx={{ color: "#3e767e" }} /> Chimney
                    Maintenance
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    <CheckCircleIcon sx={{ color: "#3e767e" }} />
                    UPVCFascia's,Soffits And Guttering
                  </Typography>
                </Grid>
              </Grid>

              {/* Buttons */}
              <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
                <Button
                  variant="outlined"
                  sx={{
                    color: "red",
                    borderColor: "red",
                    "&:hover": { backgroundColor: "red", color: "#fff" },
                  }}
                >
                  Call Us 📞
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    color: "red",
                    borderColor: "red",
                    "&:hover": { backgroundColor: "red", color: "#fff" },
                  }}
                >
                  Message Us ✉️
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "red",
                    color: "#fff",
                    "&:hover": { backgroundColor: "darkred" },
                  }}
                >
                  Contact Us →
                </Button>
              </Box>
            </Grid>

            {/* Right Side - Contact Form */}
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  p: 3,
                  boxShadow: 3,
                  position: "relative",
                  borderTopRightRadius: "50px",
                  border: "2px solid red",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "60px",
                    height: "60px",
                    backgroundColor: "red",
                    clipPath: "polygon(100% 0, 0 0, 100% 100%)",
                  }}
                />
                <Typography
                  sx={{ fontSize: "1.2rem", fontWeight: "bold", mb: 2 }}
                >
                  Get in touch, leave us a message.
                </Typography>

                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    variant="outlined"
                    value={formData.name}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                    required
                  />
                  <TextField
                    fullWidth
                    label="Contact Number"
                    name="contact"
                    variant="outlined"
                    value={formData.contact}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                    required
                  />
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    variant="outlined"
                    value={formData.email}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                    required
                  />
                  <TextField
                    fullWidth
                    label="Enquiry Message"
                    name="message"
                    variant="outlined"
                    multiline
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                    required
                  />

                  <Button
                    type="submit"
                    variant="outlined"
                    fullWidth
                    sx={{
                      mt: 2,
                      color: "red",
                      borderColor: "red",
                      "&:hover": { backgroundColor: "red", color: "#fff" },
                    }}
                    endIcon={<SendIcon />}
                  >
                    Send
                  </Button>
                </form>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ textAlign: "center", mt: 6, p: 3 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", mb: 3, color: "#0d47a1" }}
          >
            Why Choose Gs RoofCare?
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 3,
              flexWrap: "wrap",
            }}
          >
            {features.map((feature, index) => (
              <Card key={index} sx={{ maxWidth: 300, p: 2, boxShadow: 3 }}>
                <CardContent>
                  <Box
                    sx={{ display: "flex", justifyContent: "center", mb: 2 }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#0d47a1" }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#555", mt: 1 }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>

      <div maxWidth="lg" sx={{ py: 5 }}>
        <Typography
          variant="h3"
          fontWeight={700}
          textAlign="center"
          gutterBottom
        >
          Gs RoofCare – Your Trusted Roofing Experts
        </Typography>
        <Typography
          variant="h5"
          textAlign="center"
          color="text.secondary"
          gutterBottom
        >
          Serving Reading, Henley-on-Thames & Berkshire
        </Typography>

        <Typography
          variant="h6"
          textAlign="center"
          color="primary"
          fontWeight={600}
        >
          High-Quality Roofing Solutions Tailored for You
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          color="text.secondary"
          mb={4}
        >
          At Gs RoofCare, we take pride in delivering expert roofing solutions
          with exceptional craftsmanship. With over 15 years of experience, we
          provide durable, efficient, and high-quality roofing services that
          protect your home and business.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  textAlign: "center",
                  p: 3,
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              >
                {service.icon}
                <CardContent>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h5" textAlign="center" fontWeight={600} mt={5}>
          Why Choose Gs RoofCare?
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          color="text.secondary"
          mb={4}
        >
          ✅ Professional & Reliable | ✅ Fully Insured & Certified | ✅
          Checkatrade Verified | ✅ Competitive Pricing | ✅ Customer
          Satisfaction Guaranteed
        </Typography>

        <Grid container justifyContent="center">
          <Button
            variant="contained"
            style={{ backgroundColor: "#3e767e" }}
            color="primary"
            size="large"
          >
            Get a Free Quote
          </Button>
        </Grid>
      </div>
    </Container>
  );
}

export default Homepage;
