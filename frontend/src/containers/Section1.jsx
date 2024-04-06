import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Title from "../components/Title";
import { section1Content } from "../utils/content";

const { MainBG, ShootingStarImage, title, subtitle } = section1Content;

const writer = ["Automate Your Shorts Content ", "Using AI"];
const speed = 100;

const CustomButton = ({ children, ...props }) => (
  <Button
    variant="outlined"
    sx={{
      borderRadius: 4,
      color: "text.primary",
      borderColor: "text.primary",
      height: 58,
      px: 2,
    }}
    {...props}
  >
    {children}
  </Button>
);

const Section1 = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [displayedTitle, setDisplayedTitle] = useState("");
  const [displayedSubtitle, setDisplayedSubtitle] = useState("");

  useEffect(() => {
    typewriterEffect(writer, speed, setDisplayedTitle, setDisplayedSubtitle);
  }, [writer, speed, setDisplayedTitle, setDisplayedSubtitle]);

  function typewriterEffect(writer, speed, setTitle, setSubtitle) {
    let currentIndex = 0;
    let currentText = "";

    const interval = setInterval(() => {
      if (currentIndex < writer.length) {
        const target = writer[currentIndex];
        if (currentText.length < target.length) {
          if (currentIndex === 0) {
            setTitle(
              <Typography variant="h2" style={{ color: "White", fontStyle: "normal" , fontFamily: "Poppins",fontFamily:"sans-serif"}}>
                {target.substring(0, currentText.length + 1)}
              </Typography>
            );
          } else if (currentIndex === 1) {
            setSubtitle(
              <Typography variant="h2" style={{ color: "#ff71ab", fontWeight: "bold" }}>
                {target.substring(0, currentText.length + 1)}
              </Typography>
            );
          }
          currentText = target.substring(0, currentText.length + 1);
        } else {
          currentIndex++;
          currentText = "";
        }
      } else {
        clearInterval(interval);
      }
    }, speed);
  }

  return (
    <Box sx={{ width: "100%" }}>
      {/* Main Background */}
      <Box sx={{ position: "fixed", zIndex: -10, top: 0, left: 0, right: 0 }}>
        <img src={MainBG} style={{ width: "100%" }} alt="Main Background" />
      </Box>

      {/* backgrounds elements */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          zIndex: -1,
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        {/* Star */}
        <img
          src={ShootingStarImage}
          style={{
            position: "absolute",
            top: "30px",
            right: "15%",
            width: "500px",
          }}
          alt="Shooting Star"
        />
        <Box
          sx={{
            textAlign: "center",
            bgcolor: "background.default",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "800px",
          }}
        ></Box>
      </Box>

      {/* Content */}
      <Container
        sx={{
          textAlign: "center",
          height: "80vh",
          mt: 8,
          [theme.breakpoints.up("md")]: { mt: 6 },
        }}
      >
        <Stack sx={{ height: "100%" }} justifyContent="center">
          <Title
            variant={{ xs: "h3", sm: "h2", md: "h1" }}
            sx={{ letterSpacing: "0.02em", mb: 1 }}
          >
            {displayedTitle}
          </Title>
          <Title
            variant={{ xs: "h3", sm: "h2", md: "h1" }}
            sx={{ letterSpacing: "0.05em", mb: 5 }}
          >
            {displayedSubtitle}
          </Title>

          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems="center"
            spacing={4}
          >
            {/* <CustomButton fullWidth={isSmallScreen}>
              <AppleIcon sx={{ fontSize: 36, ml: -1 }} />

              <Stack sx={{ textAlign: "left", ml: 1 }}>
                <Typography variant="caption" sx={{ lineHeight: 1 }}>
                  Download on the
                </Typography>
                <Typography variant="h5">App Store</Typography>
              </Stack>
            </CustomButton>

            <CustomButton fullWidth={isSmallScreen}>
              <GoogleIcon sx={{ fontSize: 36, ml: -1 }} />

              <Stack sx={{ textAlign: "left", ml: 1 }}>
                <Typography variant="caption" sx={{ lineHeight: 1 }}>
                  Get in on
                </Typography>
                <Typography variant="h5">Google Play</Typography>
              </Stack>
            </CustomButton> */}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Section1;
