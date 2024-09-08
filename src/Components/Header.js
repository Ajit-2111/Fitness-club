import { Box, Typography, Button, Slide } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import Background from "../assets/images/background.png";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    const currentRef = boxRef.current; // Store the current ref value

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3, // Adjust threshold as needed
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <Box position="relative">
      {/* Image as background */}
      <Box
        component="img"
        src={Background}
        alt="background image"
        width="100%"
        height="100%"
        sx={{ objectFit: "cover" }}
      />

      {/* Overlay content */}
      <Box
        ref={boxRef}
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="start"
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.3)", // semi-transparent background
        }}
      >
        <Slide direction="right" in={isVisible} mountOnEnter unmountOnExit>
          <Box sx={{ pl: { sm: "5px", lg: "70px", xs: "10px" } }}>
            <Typography
              color="white"
              sx={{
                fontFamily: "Carter One",
                fontSize: { sm: "7vw", xs: "7vw", lg: "4vw" },
              }}
            >
              Transform <br />
              Your <span style={{ color: "#eb6d37" }}>Body</span>
            </Typography>
            <Typography
              color="white"
              pt={3}
              sx={{
                fontFamily: "Carter One",
                fontSize: { sm: "4vw", xs: "4vw", lg: "2vw" },
                fontWeight: "200",
                letterSpacing: "2px",
                display: { xs: "none", lg: "initial" },
              }}
            >
              <br /> Check out the most effective Exercises. <br /> <br />
            </Typography>
            <Button
              variant="contained"
              href="#exercises"
              sx={{
                display: { xs: "none", lg: "initial" },
                bgcolor: "#eb6d37",
                fontSize: { sm: "4vw", xs: "4vw", lg: "2vw" },
                px: "7%",
                py: "2%",
                fontWeight: "bold",
              }}
            >
              Explore Exercises
            </Button>
          </Box>
        </Slide>
      </Box>
    </Box>
  );
};

export default Header;
