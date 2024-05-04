import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import AnimatedWave from "./AnimatedWaves";
import Intro from "../CardTemplate/Intro/Intro";
import { ImageConvert } from "@/lib/smys_details/Image_Conversion";
import ReactCurvedText from "react-curved-text";
import "./index.css";
export default function Header({
  img,
  photo1,
  photo2,
  description1,
  description2,
}: {
  img: string;
  photo1: string;
  photo2: string;
  description1: string;
  description2: string;
}) {
  console.log("img ", ImageConvert(img));
  return (
    <>
      <Card sx={{ maxWidth: "100%", height: "90vh", overflow: "hidden" }}>

        <CardMedia
          sx={{ width: "100%", height: "100%" }}
          image={ImageConvert(img)}
          title=""
        />
      </Card>
{/* 
      <div style={{ position: "relative" }}>
        <AnimatedWave
          color={"#3E54AC"}
          animationDuration="4s"
          opacity={"0.9"}
          intro={true}
          photo1={photo1}
          photo2={photo2}
          description1={description1}
          description2={description2}
        />
        <AnimatedWave
          color={"#3E54AC"}
          animationDuration="12s"
          opacity={"0.4"}
          intro={false}
          photo1={photo1}
          photo2={photo2}
          description1={description1}
          description2={description2}
        />
        <AnimatedWave
          color={"#3E54AC"}
          animationDirection="reverse"
          animationDuration="10s"
          opacity={"0.2"}
          intro={false}
          photo1={photo1}
          photo2={photo2}
          description1={description1}
          description2={description2}
        />
      </div> */}
    </>
  );
}
