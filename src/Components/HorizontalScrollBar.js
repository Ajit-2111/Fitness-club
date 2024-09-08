import React, { useRef } from "react";
import { Box, Button, Typography, Stack } from "@mui/material";
import LeftArrow from "../assets/icons/left-arrow.png";
import RightArrow from "../assets/icons/right-arrow.png";
const HorizontalScrollList = ({
  items,
  selectedBodyPart,
  setSelectedBodyPart,
}) => {
  const scrollRef = useRef(null);
  const offset = 300;

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  return (
    <Stack>
      <Box
        ref={scrollRef}
        sx={{
          //  overflowX: "auto",
          padding: 2,
          display: "flex",
          overflowX: "auto",
          px: "25px",
          width: "90vw", // Adjust width as needed
          scrollBehavior: "smooth", // Smooth scrolling
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none", // Hide scrollbar for Firefox
          msOverflowStyle: "none", // Hide scrollbar for Internet Explorer and Edge
          "&::-webkit-scrollbar": {
            display: "none", // Hide scrollbar for Chrome, Safari, and Opera
          },
        }}
      >
        {Object.entries(items).map(([key, value]) => (
          <Box
            key={key}
            sx={
              selectedBodyPart === key
                ? {
                    minWidth: "200px", // Ensures each item has a minimum width
                    padding: 2,
                    marginRight: 2,
                    flexShrink: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    borderTop: "4px solid #eb6d37",
                  }
                : {
                    minWidth: "200px", // Ensures each item has a minimum width
                    padding: 2,
                    marginRight: 2,
                    flexShrink: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }
            }
            onClick={() => {
              setSelectedBodyPart(key);
              console.log(selectedBodyPart, key);
            }}
          >
            <img
              src={value}
              alt={key}
              style={{ maxHeight: "200px", fill: "#eb6d37" }}
            />
            <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
              {key}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={() => scroll(-offset)} p={2}>
          <img src={LeftArrow} alt="Scroll Left" />
        </Button>
        <Button onClick={() => scroll(offset)} p={2}>
          <img src={RightArrow} alt="Scroll Right" />
        </Button>
      </Box>
    </Stack>
  );
};

export default HorizontalScrollList;
