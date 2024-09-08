import { Stack } from "@mui/material";
import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import ExerciseContext from "./Create Context/ExerciseContext";
import BodyPartAll from "./assets/icons/body-part-all.svg";
import BodyPartBack from "./assets/icons/body-part-back.svg";
import BodyPartCardio from "./assets/icons/body-part-cardio.svg";
import BodyPartChest from "./assets/icons/body-part-chest.svg";
import BodyPartLowerArms from "./assets/icons/body-part-lower-arm.svg";
import BodyPartLowerLegs from "./assets/icons/body-part-lower-leg.svg";
import BodyPartNeck from "./assets/icons/body-part-neck.svg";
import BodyPartShoulders from "./assets/icons/body-part-shoulder.svg";
import BodyPartUpperArms from "./assets/icons/body-part-upper-arm.svg";
import BodyPartUpperLegs from "./assets/icons/body-part-upper-leg.svg";
import BodyPartWaist from "./assets/icons/body-part-waist.svg";
// import ExercisesData from "./data.json";
import Loading from "./assets/images/loading.gif";
import ViewExercise from "./Pages/ViewExercise";

const App = () => {
  const bodyPartsList = {
    all: BodyPartAll,
    back: BodyPartBack,
    cardio: BodyPartCardio,
    chest: BodyPartChest,
    "lower arms": BodyPartLowerArms,
    "lower legs": BodyPartLowerLegs,
    neck: BodyPartNeck,
    shoulders: BodyPartShoulders,
    "upper arms": BodyPartUpperArms,
    "upper legs": BodyPartUpperLegs,
    waist: BodyPartWaist,
  };
  const [search, setSearch] = useState("");
  const [selectedBodyPart, setSelectedBodyPart] = useState("all");
  const [exercisesData, setExercisesData] = useState(null);
  const [visibleExercises, setVisibleExercises] = useState(null);
  const [viewExerciseDetail, setViewExerciseDetail] = useState("");
  async function fetchdata() {
    const url = "https://exercisedb.p.rapidapi.com/exercises?limit=0&offset=0";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setExercisesData(result);
      setVisibleExercises(result);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchdata();
  }, []);
  return exercisesData ? (
    <Stack m={0} p={0}>
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <ExerciseContext.Provider
              value={{
                bodyPartsList,
                search,
                setSearch,
                selectedBodyPart,
                setSelectedBodyPart,
                exercisesData,
                visibleExercises,
                setVisibleExercises,
                setViewExerciseDetail,
              }}
            >
              <Home></Home>
            </ExerciseContext.Provider>
          }
        />
        <Route
          path="/exercise/:id"
          element={<ViewExercise viewExeriseDetail={viewExerciseDetail} />}
        />
      </Routes>
    </Stack>
  ) : (
    <Stack
      direction="column"
      width="100%"
      height="100%"
      spacing={2}
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={Loading} alt="Loading" />
    </Stack>
  );
};

export default App;
