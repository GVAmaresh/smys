import * as React from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { FontSize } from "@mui/joy/styles";
interface PropsInterface {
  image: string;
  name: string;
}

export default function PropsTemplate({ name, image }: PropsInterface) {
  return (
    <Card sx={{ minHeight: "280px", width: 320 }}>
      <CardCover>
        <img
          src={image || ""}
          srcSet="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
        }}
      />
      <CardContent sx={{ justifyContent: "" }}>
        <Typography sx={{ color: "#fff", fontWeight: "bold", fontSize:"30px" }}>
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}
