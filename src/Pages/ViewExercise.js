import React from "react";
import { useParams } from "react-router-dom";
import { Typography, Stack, Button, Box } from "@mui/material/";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const ViewExercise = ({ viewExeriseDetail }) => {
  const { id } = useParams();
  const { bodyPart, gifUrl, name, target, equipment, instructions } =
    viewExeriseDetail;
  console.log(id);
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack direction={"column"}>
      <Stack
        gap="60px"
        sx={{ flexDirection: { md: "row" }, p: "20px", alignItems: "center" }}
      >
        <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
        <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
          <Typography
            sx={{ fontSize: { lg: "3vw", xs: "6vw" } }}
            fontWeight={700}
            textTransform="capitalize"
          >
            {name}
          </Typography>
          <Typography
            sx={{ fontSize: { lg: "2vw", xs: "4vw" } }}
            color="#4F4C4C"
          >
            Exercises keep you strong.{" "}
            <span style={{ textTransform: "capitalize" }}>{name}</span> bup is
            one of the best <br /> exercises to target your {target}. It will
            help you improve your <br /> mood and gain energy.
          </Typography>
          {extraDetail?.map((item) => (
            <Stack
              key={item.name}
              direction="row"
              gap="24px"
              alignItems="center"
            >
              <Button
                sx={{
                  background: "#FFF2DB",
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                }}
              >
                <img
                  src={item.icon}
                  alt={bodyPart}
                  style={{ width: "50px", height: "50px" }}
                />
              </Button>
              <Typography
                textTransform="capitalize"
                sx={{ fontSize: { lg: "2vw", xs: "6vw" } }}
              >
                {item.name}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Box
        sx={{
          my: { xs: 5 },
          px: { xs: 4, sm: 10 },
          textAlign: "justify",
        }}
      >
        <Typography
          sx={{ fontSize: { lg: "3vw", xs: "6vw" } }}
          fontWeight={700}
          textTransform="capitalize"
        >
          Instructions
        </Typography>
        <ol>
          {instructions.map((instruction) => {
            return (
              <Typography
                sx={{ fontSize: { lg: "2vw", xs: "5vw" } }}
                color="#4F4C4C"
              >
                <li>{instruction}</li>
              </Typography>
            );
          })}
        </ol>
      </Box>
    </Stack>
  );
};

export default ViewExercise;
