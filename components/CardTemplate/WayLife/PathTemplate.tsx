import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";

interface FounderMemberProp {
  name: string;
  image: string;
  description: string;
  phone?: string;
  email?: string;
}

export default function FounderMember({
  name,
  image,
  description,
}: FounderMemberProp) {
  const theme = useTheme();
  console.log("this is image", image);
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        width: { sx: "73%", xs: "80%" },
        height: "100%",
        marginTop: 3,
        borderTopLeftRadius: "70px",
        borderBottomRightRadius: "70px",
        overflow: "hidden",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: { xs: "100%", md: 400 },
          height: { xs: 300, sm: 400, md: 250, lg: 350 },
        }}
        image={image}
        alt="Founder image"
      />
      <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <CardContent>
          <div className="font-bold text-4xl">{name}</div>
          <div className="font-small text-sm">{description}</div>
        </CardContent>
      </Box>
    </Card>
  );
}
