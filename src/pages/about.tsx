import Layout from "../components/Layout";
import {
  Container,
  Typography,
  Box,
  Grid,
  Button,
  Card,
  CardContent,
} from "@mui/material";
export default function About() {
  return (
    <Layout>
      <Container maxWidth="lg" sx={{ py: 5 }}>
        {/* Hero Section */}
        <Box textAlign="center" mb={5}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            About Gs RoofCare
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Your Trusted Roofing Experts in Reading, Henley-on-Thames &
            Berkshire
          </Typography>
        </Box>

        {/* Company Story */}
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Our Story
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Gs RoofCare was founded with a vision to provide top-notch roofing
              solutions with a focus on quality, safety, and customer
              satisfaction. With are experience, our skilled team has worked on
              countless projects, ensuring durable and efficient roofing
              services tailored to our clients’ needs.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/pexels-cristian-rojas-8853474.jpg"
              alt="Our Roofing Team"
              sx={{ width: "100%", borderRadius: 2, boxShadow: 3 }}
            />
          </Grid>
        </Grid>

        {/* Core Values */}
        <Box mt={6}>
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            gutterBottom
          >
            Our Core Values
          </Typography>
          <Grid container spacing={3} mt={2}>
            {[
              {
                title: "Quality Craftsmanship",
                desc: "We ensure top-tier materials and precise workmanship in every project.",
              },
              {
                title: "Customer Satisfaction",
                desc: "Your happiness and trust in our services are our priority.",
              },
              {
                title: "Transparency & Integrity",
                desc: "We provide honest pricing and clear communication at every step.",
              },
              {
                title: "Reliability & Efficiency",
                desc: "We complete projects on time with minimal disruption.",
              },
            ].map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ textAlign: "center", p: 2, boxShadow: 2 }}>
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {value.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {value.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Call to Action */}
        <Box textAlign="center" mt={6}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Get in Touch With Us
          </Typography>
          <Typography variant="body1" color="textSecondary" mb={3}>
            Whether you need a new roof, repairs, or routine maintenance, Gs
            RoofCare is here to help.
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Contact Us
          </Button>
        </Box>
      </Container>
    </Layout>
  );
}
