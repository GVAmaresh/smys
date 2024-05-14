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
  designation?: string;
  email?: string;
}

export function PresidentTemplate({
  name,
  image,
  designation,
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
        textAlign:"justify",
      }}
      className="border-2"
      style={{
        borderBottomRightRadius: "50px",
        borderTopLeftRadius: "50px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <CardContent>
          <div className="font-bold text-4xl mb-4">{}</div>
          <div className="font-small text-base ">{description}</div>
          <div className="mt-4 font-extrabold">{name}</div>
          <div className="ml-4 font-semibold ">{designation}</div>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{
          width: { xs: "100%", md: 400 },
          height: { xs: 300, sm: 400, md: 250, lg: 350 },
        }}
        image={image}
        alt="Founder image"
      />
    </Card>
  );
}

export function PresidentVision({ data }: { data: Journey }) {
  return (
    <>
      <>
        <div className="mt-10 sm:mt-10 md:mt-10 lg:mt-10">
          <Heading text={"President's Vision"} />
          <div className="flex flex-col items-center">
            <PresidentTemplate
              name={"-ಡಾ. ಎಂ ಆರ್ ವೆಂಕಟೇಶ್ ಪ್ರಸಾದ"}
              designation={"ಗೌರವ ಅಧ್ಯಕ್ಷರು"}
              image={"/images/president.jpg"}
              description={
                'ನಮ್ಮ ವಿದ್ಯಾರ್ಥಿ ನಿಲಯ ಮಕ್ಕಳ ಶೈಕ್ಷಣಿಕ ಮತ್ತು ವೈಯಕ್ತಿಕ ಬೆಳವಣಿಗೆಗೆ ಒಂದು ಸುರಕ್ಷಿತ ಮತ್ತು ಪ್ರೇರಣಾದಾಯಕ ವಾತಾವರಣ ಒದಗಿಸುವ ಸಂಕಲ್ಪದೊಂದಿಗೆ ಸ್ಥಾಪಿಸಲಾಗಿದೆ. ನಾವು ಮಕ್ಕಳಿಗೆ ಉತ್ತಮ ಸಂಸ್ಕಾರ ಮತ್ತು ಸಮಾಜದ ಪ್ರತಿಷ್ಠಿತ ಸದಸ್ಯರಾಗಿ ಬೆಳೆಯುವಲ್ಲಿ ಸಹಾಯ ಮಾಡುವ ಗುರಿಯನ್ನು ಹೊಂದಿದೆ. ನಾವು ನಮ್ಮ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಸಮರ್ಥ ಜೀವನ ಕೌಶಲ್ಯಗಳನ್ನು ಕಲಿಸಲು ಬದ್ಧವಾಗಿದ್ದೇವೆ. ನಮ್ಮ ವಿದ್ಯಾರ್ಥಿ ನಿಲಯ ನಿಮ್ಮ ಮಕ್ಕಳಿಗೆ ಅವರ ಸಾಧನೆಗಳಲ್ಲಿ ಯಶಸ್ಸು ಸಾಧಿಸಲು ಅಗತ್ಯವಾದ ಸಹಾಯ ಮತ್ತು ಮಾರ್ಗದರ್ಶನ ಒದಗಿಸುತ್ತದೆ.ನಾವು ನಿಮ್ಮ ಮಕ್ಕಳ ಭವಿಷ್ಯದ ನಿರ್ಮಾಣಕರ್ತರಾಗಿ ಅವರ ಸಮಗ್ರ ಬೆಳವಣಿಗೆಗೆ ಸಹಾಯ ಮಾಡುವ ಹೊಣೆಯನ್ನು ಹೆಗಲೇರಿಸಿಕೊಂಡಿದ್ದೇವೆ. ನಿಮ್ಮ ಮಕ್ಕಳ ಯಶಸ್ಸು ನಮ್ಮ ಯಶಸ್ಸು ಎಂಬ ಭಾವನೆಯೊಂದಿಗೆ, ನಾವು ಅವರ ಪ್ರತಿ ಹೆಜ್ಜೆಯಲ್ಲಿ ಅವರಿಗೆ ಬೆಂಬಲವಾಗಿರುತ್ತೇವೆ.'
              }
            />
          </div>
        </div>
      </>
    </>
  );
}
export function WardenMessage({ data }: { data: Journey }) {
  return (
    <>
      <>
        <div className="mt-10 sm:mt-10 md:mt-10 lg:mt-10">
          <Heading text={"Warden's Message"} />
          <div className="flex flex-col items-center">
            <PresidentTemplate
              name={"- ಶ್ರೀಮತಿ ಉಷಾ ಎಸ್"}
              image={"/images/warden.png"}
              designation={"ಗೌರವ ನಿಲಯ ಪಾಲಕರು"}
              description={
                "ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಅವರ ವಯಸ್ಸಿಗೆ ಬೇಕಾದ ಸ್ವಾತಂತ್ರ ಕೇವಲ ಹಕ್ಕು ಮಾತ್ರವಲ್ಲ ಜವಾಬ್ದಾರಿ ಕೂಡ. ಬೇರೆ ಊರುಗಳಿಂದ ಬೆಂಗಳೂರಿಗೆ ಉನ್ನತ ವ್ಯಾಸಂಗಕ್ಕಾಗಿ ಬರುವ ಮಕ್ಕಳಿಗೆ ಹಲವಾರು ರೀತಿಯ ಆಕರ್ಷಣೆಗಳು ಈ ಮಹಾನಗರದಲ್ಲಿ ಲಭ್ಯವಿದೆ. ಅವುಗಳ ಕಡೆ ಗಮನಹರಿಸದಂತೆ ಉತ್ತಮ ಸಂಸ್ಕೃತಿಯೊಂದಿಗೆ ಮನೆಯ ವಾತಾವರಣವನ್ನು ಸೃಷ್ಟಿಸುವ ಆಲಯವೇ ಶ್ರೀ ಮಾಧ್ವ ಯುವಕ ಸಂಘ. ಭವಿಷ್ಯದಲ್ಲಿ ರಾಷ್ಟ್ರಕ್ಕೆ ದೊಡ್ಡ ಸಂಪತ್ತಾಗಲಿರುವ ಈ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಸಂಸ್ಕಾರ ಸಂಸ್ಕೃತಿಗಳ ಪೋಷಣೆ ಮಾಡುವ ಪ್ರಯತ್ನ ನಿಲಯ ಪಾಲಕರಾಗಿ ನನ್ನ ಕರ್ತವ್ಯ ಹಾಗೂ ಈ ಸೇವೆಯಲ್ಲಿ ತೊಡಗಿರುವುದು ನನಗೆ ಸಂತೋಷ ಕೊಡುತ್ತದೆ."
              }
            />
          </div>
        </div>
      </>
    </>
  );
}