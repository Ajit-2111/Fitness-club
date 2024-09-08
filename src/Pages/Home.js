import React, { useContext, useEffect } from "react";
// import Exercises from "../data.json";
import ExerciseContext from "../Create Context/ExerciseContext";
import { Stack, Typography, Box, TextField, Button } from "@mui/material";
import HorizontalScrollBar from "../Components/HorizontalScrollBar";
import Exercises from "../Components/Exercises";
import Header from "../Components/Header";

const Home = () => {
  const {
    bodyPartsList,
    search,
    setSearch,
    selectedBodyPart,
    setSelectedBodyPart,
    exercisesData,
    visibleExercises,
    setVisibleExercises,
    setViewExerciseDetail,
  } = useContext(ExerciseContext);
  console.log("Home exercisesData", exercisesData);

  useEffect(() => {
    if (selectedBodyPart === "all") {
      setVisibleExercises(exercisesData);
    } else {
      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(selectedBodyPart) ||
          item.target.toLowerCase().includes(selectedBodyPart) ||
          item.equipment.toLowerCase().includes(selectedBodyPart) ||
          item.bodyPart.toLowerCase().includes(selectedBodyPart)
      );
      setVisibleExercises(searchedExercises);
    }
    console.log("Home visibleExercises", visibleExercises);
  }, [selectedBodyPart]);

  function customSearchExercise() {
    if (search) {
      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setVisibleExercises(searchedExercises);
    }
  }
  console.log(selectedBodyPart);
  console.log(search, typeof search);

  return (
    <Stack>
      <Header></Header>
      <Stack
        my={10}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          style={{
            textAlign: "center",
            fontFamily: "Carter One",
          }}
          sx={{ fontSize: { sm: "7vw", xs: "7vw", lg: "4vw" } }}
        >
          Awesome Exercises You <br /> Should Know
        </Typography>
        <Box
          pt={7}
          sx={{
            width: { xs: "85%", sm: "70%" },
            display: "flex",
          }}
        >
          <TextField
            variant="outlined"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            sx={{ width: "90%" }}
            placeholder="Search Exercises"
          />
          <Button
            onClick={() => customSearchExercise()}
            variant="contained"
            sx={{
              bgcolor: "#eb6d37",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Search
          </Button>
        </Box>
        <HorizontalScrollBar
          items={bodyPartsList}
          setSelectedBodyPart={setSelectedBodyPart}
          selectedBodyPart={selectedBodyPart}
        ></HorizontalScrollBar>
        <Exercises
          ExercisesData={visibleExercises}
          setViewExerciseDetail={setViewExerciseDetail}
        ></Exercises>
      </Stack>
    </Stack>
  );
};

export default Home;
