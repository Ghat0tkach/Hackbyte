import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const AnimatedCard = styled(Card)({
  transition: "transform 0.3s ease-in-out",
  borderRadius: "12px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

const OutlinedCard = () => {
  const [imageText1, setImageText1] = React.useState("");
  const [imageText2, setImageText2] = React.useState("");
  const [imageText3, setImageText3] = React.useState("");
  const [imageText4, setImageText4] = React.useState("");

  const addItem = () => {
    // Implement your addItem function here
    // You can use the imageText state values here
  };

  const handleImageTextChange1 = (event) => {
    setImageText1(event.target.value);
  };

  const handleImageTextChange2 = (event) => {
    setImageText2(event.target.value);
  };

  const handleImageTextChange3 = (event) => {
    setImageText3(event.target.value);
  };

  const handleImageTextChange4 = (event) => {
    setImageText4(event.target.value);
  };

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      sx={{ padding: "20px" }}
    >
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <AnimatedCard
          sx={{
            maxWidth: 300,
            margin: "auto",
            borderRadius: "12px",
            overflow: "hidden",
            border: "2px solid",
          }}
        >
          <CardContent>
            <Typography variant="h2" style={{ fontWeight: "bold" }}>
              Image Generator
            </Typography>
            <Typography variant="subtitle1">
              A cool awesome image can be generated here.
            </Typography>
            <TextField
              id="image-text-1"
              label="Image Text"
              variant="outlined"
              value={imageText1}
              onChange={handleImageTextChange1}
              fullWidth
              margin="normal"
            />
          </CardContent>
          <CardActions>
            <Button
              startIcon={<ControlPointIcon />}
              variant="contained"
              sx={{ backgroundColor: "#3f98e8", textTransform: "none" }}
              onClick={addItem}
            >
              Generate
            </Button>
          </CardActions>
        </AnimatedCard>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <AnimatedCard
          sx={{
            maxWidth: 300,
            margin: "auto",
            borderRadius: "12px",
            overflow: "hidden",
            border: "2px solid",
          }}
        >
          <CardContent>
            <Typography variant="h2" style={{ fontWeight: "bold" }}>
              Logo Generator
            </Typography>
            <Typography variant="subtitle1">
              A cool awesome logos can be generated here.
            </Typography>
            <TextField
              id="image-text-2"
              label="Enter Logo Theme"
              variant="outlined"
              value={imageText2}
              onChange={handleImageTextChange2}
              fullWidth
              margin="normal"
            />
          </CardContent>
          <CardActions>
            <Button
              startIcon={<ControlPointIcon />}
              variant="contained"
              sx={{ backgroundColor: "#3f98e8", textTransform: "none" }}
              onClick={addItem}
            >
              Generate
            </Button>
          </CardActions>
        </AnimatedCard>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <AnimatedCard
          sx={{
            maxWidth: 300,
            margin: "auto",
            borderRadius: "12px",
            overflow: "hidden",
            border: "2px solid",
            marginTop: "30px",
          }}
        >
          <CardContent>
            <Typography variant="h2" style={{ fontWeight: "bold" }}>
              Script Generator
            </Typography>
            <Typography variant="subtitle1">
              A cool awesome Script can be generated here.
            </Typography>
            <TextField
              id="image-text-3"
              label="Enter Script theme"
              variant="outlined"
              value={imageText3}
              onChange={handleImageTextChange3}
              fullWidth
              margin="normal"
            />
          </CardContent>
          <CardActions>
            <Button
              startIcon={<ControlPointIcon />}
              variant="contained"
              sx={{ backgroundColor: "#3f98e8", textTransform: "none" }}
              onClick={addItem}
            >
              Generate
            </Button>
          </CardActions>
        </AnimatedCard>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <AnimatedCard
          sx={{
            maxWidth: 300,
            margin: "auto",
            borderRadius: "12px",
            overflow: "hidden",
            border: "2px solid",
            marginTop: "30px",
          }}
        >
          <CardContent>
            <Typography variant="h2" style={{ fontWeight: "bold" }}>
              Video Generator
            </Typography>
            <Typography variant="subtitle1">
              A cool awesome video can be generated here.
            </Typography>
            <TextField
              id="image-text-4"
              label="Enter Script"
              variant="outlined"
              value={imageText4}
              onChange={handleImageTextChange4}
              fullWidth
              margin="normal"
            />
          </CardContent>
          <CardActions>
            <Button
              startIcon={<ControlPointIcon />}
              variant="contained"
              sx={{ backgroundColor: "#3f98e8", textTransform: "none" }}
              onClick={addItem}
            >
              Generate
            </Button>
          </CardActions>
        </AnimatedCard>
      </Grid>
    </Grid>
  );
};

export default OutlinedCard;
