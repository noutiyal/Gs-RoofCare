import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  CardMedia,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/system";

interface FlippingCardProps {
  frontImage: string;
  frontText: string;
  backContent: string;
}
const FlippingCardContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: 370,
  height: 200,
  perspective: "1000px",
  "&:hover .flip-card-inner": {
    transform: "rotateY(180deg)",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: 300,
    height: 180,
  },
}));

const FlippingCardInner = styled(Box)({
  width: "100%",
  height: "100%",
  transition: "transform 0.6s",
  transformStyle: "preserve-3d",
  position: "relative",
});

const CardFace = styled(Card)({
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  textAlign: "center",
});

const CardFront = styled(CardFace)({
  backgroundColor: "#e0f2f7",
  color: "#000",
});

const CardBack = styled(CardFace)({
  backgroundColor: "#26a69a",
  color: "#fff",
  transform: "rotateY(180deg)",
});

const FlippingCard: React.FC<FlippingCardProps> = ({
  frontImage,
  frontText,
  backContent,
}) => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <FlippingCardContainer>
      <FlippingCardInner className="flip-card-inner">
        {/* Front Side */}
        <CardFront>
          <CardMedia
            component="img"
            height={isMobile ? "100%" : "100%"}
            image={frontImage}
            alt="Front Image"
            sx={{ objectFit: "cover" }}
          />
          <CardContent
            sx={{
              position: "absolute",
              bottom: 10,
              background: "rgba(0, 0, 0, 0.5)",
              color: "white",
              width: "100%",
              textAlign: "center",
              padding: "8px",
            }}
          >
            <Typography variant={isMobile ? "body1" : "h6"}>
              {frontText}
            </Typography>
          </CardContent>
        </CardFront>

        {/* Back Side */}
        <CardBack>
          <CardMedia
            component="img"
            height={isMobile ? "100%" : "100%"}
            image={frontImage}
            alt="Back Image"
            sx={{ objectFit: "cover" }}
          />
          <CardContent
            sx={{
              position: "absolute",
              bottom: isMobile ? 40 : 60,
              background: "rgba(0, 0, 0, 0.5)",
              color: "white",
              width: "100%",
              textAlign: "center",
              padding: "8px",
            }}
          >
            <Typography variant={isMobile ? "body2" : "h6"}>
              {backContent}
            </Typography>
          </CardContent>
        </CardBack>
      </FlippingCardInner>
    </FlippingCardContainer>
  );
};

export default FlippingCard;
