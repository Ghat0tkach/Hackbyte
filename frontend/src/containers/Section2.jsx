import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import CountUp from "react-countup";
import Title from "../components/Title";
import { section2Content } from "../utils/content";

const { items } = section2Content;

const CustomCounter = ({
  before = "",
  after = "",
  counter,
  subtitle,
  decimals = false,
}) => (
  <Stack spacing={{ xs: 1, md: 2 }} alignItems="center">
    {/* <CountUp prefix={before} suffix={after} end={counter} decimals={decimals}>
      {({ countUpRef }) => (
        <Title variant={{ xs: "h4", md: "h2" }} sx={{ fontWeight: 400 }}>
          <span ref={countUpRef} />
        </Title>
      )}
    </CountUp>

    <Typography variant="body2" color="text.secondary">
      {subtitle}
    </Typography> */}
  </Stack>
);

const Section2 = () => {
  return (
    <Container sx={{ mt: -10 }}>
      
    </Container>
  );
};

export default Section2;
