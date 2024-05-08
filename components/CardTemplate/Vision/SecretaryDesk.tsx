import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import { ImageConvert } from "@/lib/smys_details/Image_Conversion";
import Heading from "../Font/Heading";

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
          <div className="font-small text-sm">{description}</div>
          <div className="mt-4 font-extrabold">{name}</div>
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
              name={"- ಶ್ರೀ ಅಭಿಷೇಕ್ ಕೆ"}
              image={ImageConvert(data.photo)}
              description={"ಒಂದು ಸಂಸ್ಥೆ ಸಾರ್ಥಕ ಸೇವೆಯನ್ನು ಸಲ್ಲಿಸುತ್ತಾ ಸುಮಾರು 75 ವರ್ಷಗಳನ್ನು ಮೀರಿದೆಯೆಂದರೆ ನಿಜಕ್ಕೂ ಅದು ಭಗವತ್ ಅನುಗ್ರಹದ ನಿಜ ರೂಪವೇ ಸರಿ. ಶ್ರೀ ಮಾಧ್ಯ ಯುವಕ ಸಂಘ ವಿದ್ಯಾರ್ಥಿ ನಿಲಯ ಕೇವಲ ವಸತಿ ನಿಲಯವಷ್ಟೇ ಅಲ್ಲದೆ, ಉತ್ತಮ ಸಂಸ್ಕೃತಿ, ಸಂಸ್ಕಾರ ಸ್ವಾವಲಂಬನೆಯನ್ನು ವಿದ್ಯಾರ್ಥಿಗಳಲ್ಲಿ ಪ್ರಚೋದಿಸುವ  ಮಾದರಿ ಸಂಸ್ಥೆ ಅಷ್ಟೇ ಅಲ್ಲದೆ ಆದರ್ಶಪ್ರಾಯವಾಗಿದೆ. ಹಲವಾರು ಜನ ಮಹನೀಯರ, ವಿದ್ಯಾರ್ಥಿಗಳ, ಸಿಬ್ಬಂದಿ ವರ್ಗ, ದಾನಿಗಳ ಹಾಗೂ ದಕ್ಷ ಕಾರ್ಯಕಾರಿ ಸಮಿತಿಯ ಪರಿಶ್ರಮದಿಂದ ಇಂದು ನಮ್ಮ ವಿದ್ಯಾರ್ಥಿ ನಿಲಯ ಬೆಂಗಳೂರಿಗೆ ವ್ಯಾಸಂಗಕ್ಕಾಗಿ ಬರುವ ಬ್ರಾಹ್ಮಣ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಬಹು ಬೇಡಿಕೆ ಹಾಗೂ ಪ್ರಥಮ ಆಯ್ಕೆಯಾಗಿದೆ. ಇಂತಹ ಪವಿತ್ರ ಸಂಘದಲ್ಲಿ ಕಾರ್ಯದರ್ಶಿಯಾಗಿ ಸೇವೆ ಸಲ್ಲಿಸಲು ಹರಿ ವಾಯು ಗುರುಗಳ ಆಶೀರ್ವಾದ ನನ್ನ ಮೇಲಿರುವುದು ಸ್ಪಷ್ಟವಾಗಿದೆ. ಮುಂದಿನ ದಿನಗಳಲ್ಲಿ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಇನ್ನು ಹೆಚ್ಚು ಕಾರ್ಯಕ್ರಮ, ಯೋಜನೆ ಹಾಗೂ ಸೇವೆ ಸಲ್ಲಿಸಲು ಉತ್ಸುಕಾನ್ನಾಗಿದ್ದೇನೆ. ನಮ್ಮ ವಿದ್ಯಾರ್ಥಿಗಳು ನಮ್ಮ ಶಕ್ತಿ ಹಾಗೂ ಹೆಮ್ಮೆ"}
            />
          </div>
        </div>
      </>

  );
}