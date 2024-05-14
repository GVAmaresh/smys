import * as React from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { FontSize } from "@mui/joy/styles";
import { CardMedia } from "@mui/material";
interface PropsInterface {
  image: string;
  name: string;
}

export default function PropsTemplate({ name, image }: PropsInterface) {
  return (
    <Card sx={{ minHeight: "280px", width: 320 }}>
      <CardCover>
      <CardMedia
    component="img"
    image={image || ""}
    alt=""
    loading="lazy"
    sx={{
      height: { xs: "200px", sm: "200px", md:"280px" },  // Adjust heights as needed for different breakpoints
      width: {sm:"80%",md:"100%"},
    }}
  />
      </CardCover>
      <CardCover
        // sx={{
        //   background:
        //     "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
        // }}
      />
      <CardContent sx={{ justifyContent: "" }}>
        <Typography sx={{ color: "#fff", fontWeight: "bold", fontSize:"30px" }}>
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}
