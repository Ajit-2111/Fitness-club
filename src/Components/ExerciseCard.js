import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";
const ExerciseCard = ({ exercise, setViewExerciseDetail }) => {
  console.log(`/exercise/${exercise.id}`);

  return (
    <Link
      className="exerciseCard"
      onClick={() => setViewExerciseDetail(exercise)}
      to={`/exercise/${exercise.id}`}
      // style={{ textDecoration: "none" }}
      style={{
        textDecoration: "none",
        borderTop: "4px solid #eb6d37",
        maxWidth: "300px",
        margin: "20px",
        transition: "transform 0.15s ease-in-out",
      }}
    >
      <img
        src={exercise.gifUrl}
        alt={exercise.name}
        loading="lazy"
        style={{ maxWidth: "300px" }}
      />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#FFA9A9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#FCC757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        sx={{ fontSize: { lg: "24px", xs: "20px" } }}
        mt="11px"
        pb="10px"
        textTransform="capitalize"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
