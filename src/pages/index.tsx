import Layout from "@/components/Layout";
import HeroSlider from "@/components/HeroSlider"; // Import the slider component
import { Box } from "@mui/material";
import { CheckCircle, AccessTime, Handshake } from "@mui/icons-material";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import RoofingIcon from "@mui/icons-material/Roofing";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import FlashOnIcon from "@mui/icons-material/FlashOn";

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

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSlider />

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
            maxWidth: "600px",
            mx: "auto",
            fontSize: { xs: "1rem", md: "1.2rem" },
          }}
        >
          Providing <strong>top-quality</strong> roofing services with expert
          craftsmanship.
        </Typography>

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

      <Container maxWidth="lg" sx={{ py: 5 }}>
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
          <Button variant="contained" color="primary" size="large">
            Get a Free Quote
          </Button>
        </Grid>
      </Container>
    </Layout>
  );
}
