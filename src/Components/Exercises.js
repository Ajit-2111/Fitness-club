import React, { useState, useContext, useRef } from "react";
import ExerciseContext from "../Create Context/ExerciseContext";
import { Typography, Box, Stack, Pagination } from "@mui/material";
import ExerciseCard from "../Components/ExerciseCard";

const Exercises = ({ ExercisesData, setViewExerciseDetail }) => {
  const exerciseDivRef = useRef(null);
  const { search } = useContext(ExerciseContext);
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 6;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  console.log("exercisesData ", ExercisesData);

  const currentExercises = ExercisesData.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
  function paginate(event, value) {
    setCurrentPage(value);
    exerciseDivRef.current.scrollIntoView();
    // window.scrollTo({ top: 1800, behavior: "smooth" });
  }
  return (
    <Box id="exercises" ref={exerciseDivRef}>
      <Typography variant="body2" color="initial">
        {search}
      </Typography>
      <Stack direction="row" flexWrap="wrap" justifyContent="center">
        {currentExercises.map((exercise, index) => (
          <ExerciseCard
            key={index}
            exercise={exercise}
            setViewExerciseDetail={setViewExerciseDetail}
          ></ExerciseCard>
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
        {ExercisesData.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(ExercisesData.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
