import {
  Box,
  Button,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
  TextField,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  MenuItem,
  InputLabel,
  Select,
} from "@mui/material";
import {
  Header,
  StatBox,
  LineChart,
  ProgressCircle,
  BarChart,
  GeographyChart,
} from "../../components";
import {
  DownloadOutlined,
  Email,
  Language,
  PersonAdd,
  PointOfSale,
  Traffic,
} from "@mui/icons-material";
import React, { useState } from "react";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import { Help, Margin } from "@mui/icons-material";
import Loader from "../contacts/components/Loader";
import Slider from "../../components/Slider";

function Dashboard() {
  const theme = useTheme();
  const [generateParams, setGenerateParams] = useState({
    is_script: "true",
    module_language: "English",
    topic: "",
    num_images: 10,
    background_video_url: "",
    background_music_url: "",
    scrip: "",
  });
  const colors = tokens(theme.palette.mode);
  const isXlDevices = useMediaQuery("(min-width: 1260px)");
  const isMdDevices = useMediaQuery("(min-width: 724px)");
  const isXsDevices = useMediaQuery("(max-width: 436px)");
  const [brandNameAnswer, setBrandNameAnswer] = useState("");
  const [showBrandNameBox, setShowBrandNameBox] = useState(false);
  const [loading, setLoading] = useState(false);

  const [scriptAnswer, setScriptAnswer] = useState("");
  const [showScriptBox, setShowScriptBox] = useState(false);
  const [videoSelection, setVideoSelection] = useState("slider");
  const [videoUrl, setVideoUrl] = useState("");
  const [sliderValue, setSliderValue] = useState(0);

  const handleVideoSelectionChange = (event) => {
    setVideoSelection(event.target.value);
  };
  const [backgroundMusicUrl, setBackgroundMusicUrl] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleBackgroundMusicUrlChange = (event) => {
    setBackgroundMusicUrl(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleVideoUrlChange = (event) => {
    setVideoUrl(event.target.value);
  };

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  const handleSubmit = () => {
    // Use videoSelection, videoUrl, and sliderValue for API call
    console.log("Video Selection:", videoSelection);
    console.log("Video URL:", videoUrl);
    console.log("Slider Value:", sliderValue);
  };
  const handleBrandNameChange = (event) => {
    setBrandNameAnswer(event.target.value);
  };

  const handleScriptChange = (event) => {
    setScriptAnswer(event.target.value);
  };

  const handleBrandNameIconButtonClick = () => {
    setShowBrandNameBox(!showBrandNameBox);
    setShowScriptBox(false);
  };

  const handleScriptIconButtonClick = () => {
    setShowScriptBox(!showScriptBox);
    setShowBrandNameBox(false);
  };
  const handleVideoGenerate = async () => {
    const url = "http://127.0.0.1:8000/video/generate-content";

    const requestBody = {
      topic: `${scriptAnswer}`,
      background_video_url: `${videoUrl}`,
      background_music_url: `${backgroundMusicUrl}`,
      num_images: 10,
      module_language: `${selectedLanguage}`,
      is_script: true,
      script: `${scriptAnswer}`,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const responseData = await response.json();
      console.log("Response:", responseData);
      // Handle the response here
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };
  const handleBrandNameSubmit = async () => {
    setLoading(true);

    const url = "http://127.0.0.1:8000/google_gemini/generate_channel_name/";
    const data = {
      prompt: `${brandNameAnswer}`,
    };
    setBrandNameAnswer("");

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      console.log(responseData);
      setBrandNameAnswer(responseData.brand_name);
      console.log(responseData);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }

    // Handle submit logic for brand name here
  };

  const handleScriptGenerate = async () => {
    setLoading(true);
    const url = "http://127.0.0.1:8000/google_gemini/generate_script/";
    const data = {
      prompt: `${scriptAnswer}`,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      console.log(responseData);
      setScriptAnswer(responseData.script);
      console.log(responseData);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between">
        <Header
          title="Welcome , Our Next Shining Star⭐"
          subtitle="This is your dashboard, let's get started!"
        />
      </Box>
      <Box mt={2} display="flex" alignItems="center">
        <Box sx={{ width: "40%" }}>
          <Typography variant="h6" gutterBottom>
            What is your brand name?
          </Typography>
          <TextField
            id="brand-name-input"
            label="Brand Name"
            value={brandNameAnswer}
            onChange={handleBrandNameChange}
            variant="outlined"
            fullWidth
            className="brand-name-text-area" // Add classname to differentiate
          />
        </Box>

        <IconButton
          sx={{
            position: "relative",
            top: "10px",
            left: "10px",
            backgroundColor: colors.blueAccent[700],
            "&:hover": { backgroundColor: colors.blueAccent[800] },
          }}
          onClick={handleBrandNameIconButtonClick}
        >
          {loading ? <Loader /> : <Help />}
        </IconButton>
        {showBrandNameBox && (
          <Box
            id="brand-name-box"
            sx={{
              position: "fixed",
              top: "42%",
              right: "140px",
              transform: "translateY(-50%)",
              width: "30%",
              backgroundColor: "#141B2D",
              p: "1rem",
              borderRadius: "0.5rem",
              boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.2)",
            }}
          >
            <Typography variant="h4" gutterBottom>
              Our Snappy wants to know
            </Typography>
            <Typography variant="h6" gutterBottom>
              What is your theme?
            </Typography>
            <TextField
              id="Theme"
              label="e.g. Sports, Facts"
              value={brandNameAnswer}
              onChange={handleBrandNameChange}
              variant="outlined"
              fullWidth
              className="theme-text-area" // Add classname to differentiate
            />
            <Button
              variant="contained"
              style={{ marginTop: "15px", backgroundColor: "blue" }}
              onClick={handleBrandNameSubmit}
            >
              Generate / 🔃
            </Button>
            <Button
              variant="contained"
              style={{ marginTop: "15px", backgroundColor: "blue" }}
              onClick={handleBrandNameIconButtonClick}
            >
              Looks Great / 👍
            </Button>
          </Box>
        )}
      </Box>

      {/* Script Question Box */}
      <Box mt={2} display="flex" alignItems="center">
        <Box sx={{ width: "40%" }}>
          <Typography variant="h6" gutterBottom>
            What is your Script?
          </Typography>
          <TextField
            id="script-input"
            label="Script"
            value={scriptAnswer}
            onChange={handleScriptChange}
            variant="outlined"
            fullWidth
            multiline
            className="script-text-area " // Add classname to differentiate
          />
        </Box>
        <IconButton
          sx={{
            position: "relative",
            top: "10px",
            left: "10px",
            backgroundColor: colors.blueAccent[700],
            "&:hover": { backgroundColor: colors.blueAccent[800] },
          }}
          onClick={handleScriptIconButtonClick}
        >
          <Help />
        </IconButton>
        {showScriptBox && (
          <Box
            id="script-box"
            sx={{
              position: "fixed",
              top: "42%",
              right: "140px",
              transform: "translateY(-50%)",
              width: "30%",
              backgroundColor: "#141B2D",
              p: "1rem",
              borderRadius: "0.5rem",
              boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.2)",
            }}
          >
            <Typography variant="h4" gutterBottom>
              Do our Snappy generate your script?
            </Typography>
            <Typography variant="h6" gutterBottom>
              What do you want to show?
            </Typography>
            <TextField
              id="script-input"
              label="e.g. gaming, driving"
              value={scriptAnswer}
              onChange={handleScriptChange}
              variant="outlined"
              fullWidth
              className="script-text-area" // Add classname to differentiate
            />

            <Button
              variant="contained"
              style={{ marginTop: "15px", backgroundColor: "blue" }}
              onClick={handleBrandNameSubmit}
            >
              Generate / 🔃
            </Button>
            <Button
              variant="contained"
              style={{ marginTop: "15px", backgroundColor: "blue" }}
              onClick={handleScriptIconButtonClick}
            >
              Looks Great / 👍
            </Button>
          </Box>
        )}
      </Box>
      <Box mt={5}>
        <Box>
          {/* Video Selection */}
          <FormControl component="fieldset" sx={{ mb: 2 }}>
            <RadioGroup
              aria-label="videoSelection"
              name="videoSelection"
              value={videoSelection}
              onChange={handleVideoSelectionChange}
              row
            >
              <FormControlLabel
                value="slider"
                control={<Radio />}
                label="Choose from Slider"
              />
              <FormControlLabel
                value="custom"
                control={<Radio />}
                label="Enter URL"
              />
            </RadioGroup>
          </FormControl>

          {/* Video URL Input */}
          {videoSelection === "custom" && (
            <TextField
              label="Video URL"
              variant="outlined"
              value={videoUrl}
              onChange={handleVideoUrlChange}
              fullWidth
              sx={{ mb: 2 }}
            />
          )}

          {/* Slider for Video Selection */}
          {videoSelection === "slider" && (
            <Box mt={5}>
              <Slider
                value={sliderValue}
                onChange={handleSliderChange}
                aria-labelledby="continuous-slider"
              />
            </Box>
          )}

          {/* Submit Button */}
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
        <Box display="flex" alignItems="center">
          {/* Background Music URL Input */}
          <TextField
            label="Background Music URL"
            variant="outlined"
            value={backgroundMusicUrl}
            onChange={handleBackgroundMusicUrlChange}
            fullWidth
            sx={{ mr: 1 }}
          />

          {/* Language Selection Dropdown */}
          <FormControl variant="outlined" fullWidth sx={{ minWidth: 120 }}>
            <InputLabel id="language-label">Language</InputLabel>
            <Select
              labelId="language-label"
              id="language-select"
              value={selectedLanguage}
              onChange={handleLanguageChange}
              label="Language"
            >
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Spanish">Spanish</MenuItem>
              {/* Add more language options as needed */}
            </Select>
          </FormControl>

          {/* Submit Button */}
        </Box>
      </Box>

      {/* Generate Button */}
      <Box mt={2} display="flex">
        <Button
          variant="contained"
          style={{ backgroundColor: "blue" }}
          onClick={handleVideoGenerate}
        >
          Generate Shorts!
        </Button>
      </Box>
    </Box>
  );
}

export default Dashboard;
