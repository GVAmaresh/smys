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

export function PresidentTemplate({
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
      <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <CardContent>
          <div className="font-bold text-4xl mb-4">{}</div>
          <div className="font-small text-base ">{description}</div>
          <div className=""> -ಡಾ. ಎಂ ಆರ್ ವೆಂಕಟೇಶ್ ಪ್ರಸಾದ</div>
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

export default function PresidentVision({ data }: { data: Journey }) {
  console.log(ImageConvert(data.photo));
  return (
    <>
      <>
        <div className="mt-10 sm:mt-10 md:mt-10 lg:mt-10">
          <Heading text={"President's Vision"} />
          <div className="flex flex-col items-center">
            <PresidentTemplate
              name={""}
              image={ImageConvert(data.photo)}
              description={
                "ನಮ್ಮ ವಿದ್ಯಾರ್ಥಿ ನಿಲಯ ಮಕ್ಕಳ ಶೈಕ್ಷಣಿಕ ಮತ್ತು ವೈಯಕ್ತಿಕ ಬೆಳವಣಿಗೆಗೆ ಒಂದು ಸುರಕ್ಷಿತ ಮತ್ತು ಪ್ರೇರಣಾದಾಯಕ ವಾತಾವರಣ ಒದಗಿಸುವ ಸಂಕಲ್ಪದೊಂದಿಗೆ ಸ್ಥಾಪಿಸಲಾಗಿದೆ. ನಾವು ಮಕ್ಕಳಿಗೆ ಉತ್ತಮ ಸಂಸ್ಕಾರ ಮತ್ತು ಸಮಾಜದ ಪ್ರತಿಷ್ಠಿತ ಸದಸ್ಯರಾಗಿ ಬೆಳೆಯುವಲ್ಲಿ ಸಹಾಯ ಮಾಡುವ ಗುರಿಯನ್ನು ಹೊಂದಿದೆ. ನಾವು ನಮ್ಮ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಸಮರ್ಥ ಜೀವನ ಕೌಶಲ್ಯಗಳನ್ನು ಕಲಿಸಲು ಬದ್ಧವಾಗಿದ್ದೇವೆ. ನಮ್ಮ ವಿದ್ಯಾರ್ಥಿ ನಿಲಯ ನಿಮ್ಮ ಮಕ್ಕಳಿಗೆ ಅವರ ಸಾಧನೆಗಳಲ್ಲಿ ಯಶಸ್ಸು ಸಾಧಿಸಲು ಅಗತ್ಯವಾದ ಸಹಾಯ ಮತ್ತು ಮಾರ್ಗದರ್ಶನ ಒದಗಿಸುತ್ತದೆ.ನಾವು ನಿಮ್ಮ ಮಕ್ಕಳ ಭವಿಷ್ಯದ ನಿರ್ಮಾಣಕರ್ತರಾಗಿ ಅವರ ಸಮಗ್ರ ಬೆಳವಣಿಗೆಗೆ ಸಹಾಯ ಮಾಡುವ ಹೊಣೆಯನ್ನು ಹೆಗಲೇರಿಸಿಕೊಂಡಿದ್ದೇವೆ. ನಿಮ್ಮ ಮಕ್ಕಳ ಯಶಸ್ಸು ನಮ್ಮ ಯಶಸ್ಸು ಎಂಬ ಭಾವನೆಯೊಂದಿಗೆ, ನಾವು ಅವರ ಪ್ರತಿ ಹೆಜ್ಜೆಯಲ್ಲಿ ಅವರಿಗೆ ಬೆಂಬಲವಾಗಿರುತ್ತೇವೆ."      }
            />
          </div>
        </div>
      </>
      );
    </>
  );
}
