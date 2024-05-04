import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import { ImageConvert } from "@/lib/smys_details/Image_Conversion";
import Heading from "../Font/Heading";
// import PathTemplate from "./PathTemplate";
import { Journey } from "@/lib/types/Data";

interface FounderMemberProp {
  name: string;
  image: string;
  description: string;
  phone?: string;
  email?: string;
}

export function SecretaryTemplate({
  name,
  image,
  description,
}: FounderMemberProp) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        width: { sx: "73%", xs: "80%" },
        height: "100%",
        marginTop: 3,
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
          <div className="font-bold text-4xl mb-4">{name}</div>
          <div className="font-small text-sm">{description}</div>
        </CardContent>
      </Box>
    </Card>
  );
}

export default function SecretaryVision({ data }: { data: Journey }) {
  return (

      <>
        <div className="mt-10 sm:mt-10 md:mt-10 lg:mt-10">
          <Heading text={"Secretary's Desk"} />
          <div className="flex flex-col items-center">
            <SecretaryTemplate
              name={""}
              image={ImageConvert(data.photo)}
              description={data.description}
            />
          </div>
        </div>
      </>

  );
}
