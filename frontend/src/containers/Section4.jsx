import { Container, Grid, Stack, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import OutlinedButton from "../components/Buttons/OutlinedButton";
import Title from "../components/Title";
import { section4Content } from "../utils/content";
import vid1  from "../assets/videos/vid1.mp4"
import vid2  from "../assets/videos/vid2.mp4"
const { top, bottom } = section4Content;

const Section4 = () => {
  const [tabValue, setTabValue] = useState(0);

  return (
    <Container sx={{ mt: { xs: 15, md: 20, lg: 25 } }}>
      {/* TOP */}
      <Grid container spacing={10} flexWrap="wrap-reverse" alignItems="center">
        {/* Left */}
        <Grid item xs={12} md={6}>
          <Stack spacing={2} sx={{ maxWidth: 480 }}>
            <Title variant={{ xs: "h3", md: "h2" }}>{top.title}</Title>

            <Typography variant="body2" color="text.secondary" sx={{ pb: 2 }}>
              {top.subtitle}
            </Typography>

          </Stack>
        </Grid>

        {/* Right */}
        <Grid item xs={12} md={6}  >
          <video autoPlay muted loop width={400} height={800} style={{borderRadius:"10px",border:"2px solid #77B5AA ",margin:"0",padding:"0"}}>
            <source src={vid1} type="video/mp4" />
          </video>
        </Grid>
      </Grid>

      <Grid container spacing={0} flexWrap="wrap-reverse" alignItems="center">
        {/* Left */}
        <Grid item xs={0} md={6} >
        <video autoPlay muted loop width={500} height={800} style={{borderRadius:"10px",border:"2px solid #3E4396 "}}>
            <source src={vid2} type="video/mp4" />
          </video>
        </Grid>
        {/* Right */}
        <Grid item xs={10} md={6}>
          <Stack spacing={2} sx={{ maxWidth: 480 }}>
            <Title variant={{ xs: "h3", md: "h2" }}>Get your personalised video with Quicksnap</Title>

            <Typography variant="body2" color="text.secondary" sx={{ pb: 2 }}>
              
            </Typography>
          </Stack>
        </Grid>

      </Grid>
    </Container>
  );
};

export default Section4;
