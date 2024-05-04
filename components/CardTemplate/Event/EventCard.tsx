import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";

interface EventCardProp {
  name: string;
  image: string;
  description: string;
}

export default function EventCard({
  name,
  image,
  description,
}: EventCardProp) {
  return (
    <Card sx={{ border: 0, display: "flex", width: {sx:"73%", xs: "80%"}, height: "100%", marginTop: 3, backgroundColor: "white", borderColor: "white" }}>
      <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <CardContent>
          <Typography component="div" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {description}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{
          width: { xs: 150, md: 400 },
          height: 250,
          border: 0, 
          borderTopRightRadius: { xs: 100, md: 100 },
          borderBottomRightRadius: { xs: 100, md: 100 },
          marginLeft: { xs: "auto", md: 0 }, 
          marginRight: { xs: "auto", md: 0 },
        }}
        image={image}
        alt="Founder image"
      />
    </Card>
  );
}
