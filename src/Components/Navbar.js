import React from "react";
import { Link } from "react-router-dom";
import { Stack, Box } from "@mui/material";

const Navbar = () => {
  const navbarStyle = {
    textDecoration: "none",
    color: "#f9f9fb",
    fontFamily: "Roboto",
  };
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        backgroundColor: "#111217",
        gap: { sm: "123px", xs: "40px" },
        py: "14px",
        justifyContent: "space-between",
        alignItems: "center",
        px: "20px",
      }}
    >
      <Box
        sx={{
          fontSize: { sm: "6vw", md: "3.5vw", xl: "4vw" },
        }}
      >
        <Link
          to="/"
          style={{
            ...navbarStyle,
          }}
        >
          Fitness Club
        </Link>
      </Box>

      <Stack
        direction="row"
        gap="40px"
        fontFamily="Alegreya"
        alignItems="flex-end"
        sx={{
          fontSize: { xs: "3vw", sm: "4vw", md: "2vw", xl: "2vw" },
        }}
      >
        <Link
          to="/"
          style={{
            ...navbarStyle,
          }}
        >
          Home
        </Link>
        <a
          href="/#exercises"
          style={{ ...navbarStyle, scrollBehavior: "smooth" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
