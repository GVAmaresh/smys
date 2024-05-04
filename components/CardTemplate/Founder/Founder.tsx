import { Grid } from "@mui/material";
import CommitteMember from "../Committe/CommitteMember";
import Heading from "../Font/Heading";
import FounderMember from "./FounderMember";
import { ImageConvert } from "@/lib/smys_details/Image_Conversion";

interface Founder {
  name?: string;
  age?: string;
  photo?: string;
  gender?: string;
  position?: string;
  email?: string;
  phone?: string;
  description?: string;
}

interface FounderProps {
  founders: { [key: string]: Founder };
}

export default function Founder({ founders }: FounderProps) {
  if (!founders) {
    return null;
  }
  console.log(founders);
  return (

    <>
      <div className="container mt-20 ">
        <Heading text="Founders" />
        <div
          className="m-10 md:m-64 md:mt-10 md:mb-10 p-10 mt-10 mb-10 border-2"
          style={{
            borderBottomRightRadius: "50px",
            borderTopLeftRadius: "50px",
          }}
        >
          ಶ್ರೀ ಮಾಧ್ವ ಯುವಕ ಸಂಘವು ತನ್ನ ಏಳು ದಶಕಗಳ ಯಶಸ್ವಿ ಪಯಣದಲ್ಲಿ ಅನೇಕ ಮಹನೀಯರ
          ಅಮೂಲ್ಯ ಕೊಡುಗೆಗಳನ್ನು ಪಡೆದಿದೆ. ಈ ಸಂಘವು ಸ್ಥಾಪನೆಯಾಗಿದ್ದು, ಬೆಳವಣಿಗೆ ಮತ್ತು
          ಉನ್ನತಿಗೆ ಶ್ರಮಿಸಿದ ಪ್ರಮುಖ ಕಾರಣ ಪುರುಷರ ಕೊಡುಗೆಗಳನ್ನು ನಾವು ಗೌರವದಿಂದ
          ನೆನಪಿಸಿಕೊಳ್ಳಬೇಕು. ಅವರ ತ್ಯಾಗ ಮತ್ತು ಶ್ರಮವು ಸಂಘದ ಪ್ರಗತಿಗೆ ಅತ್ಯಂತ
          ಮುಖ್ಯವಾಗಿದ್ದು, ಅವರ ಸೇವೆಗಳು ಸಂಘದ ಯಶಸ್ಸಿನ ಹಿನ್ನೆಲೆಯಲ್ಲಿ ಒಂದು ಪ್ರಮುಖ
          ಅಂಶವಾಗಿದೆ. ಈ ಮಹನೀಯರು ಸಂಘದ ಸ್ಥಾಪನೆಯಿಂದ ಹಿಡಿದು ಅದರ ಬೆಳವಣಿಗೆಯಲ್ಲಿ ತಮ್ಮ
          ಅಮೂಲ್ಯ ಸಮಯ, ಶಕ್ತಿ ಮತ್ತು ಸಂಪನ್ಮೂಲಗಳನ್ನು ಅರ್ಪಿಸಿದ್ದಾರೆ. ಅವರ ನಿಷ್ಠಾವಂತ
          ಸೇವೆಗಳು ಸಂಘದ ಸದಸ್ಯರಿಗೆ ಪ್ರೇರಣೆ ಮತ್ತು ಮಾದರಿಯಾಗಿದ್ದು, ಮುಂದಿನ
          ತಲೆಮಾರಿನವರಿಗೆ ಅವರ ಸೇವೆಗಳು ಒಂದು ದೀಪಸ್ತಂಭವಾಗಿವೆ. ನಾವು ಈ ಮಹನೀಯರ
          ಸೇವೆಗಳನ್ನು ಯಾವಾಗಲೂ ಗೌರವದಿಂದ ನೆನಪಿಸಿಕೊಳ್ಳಬೇಕು ಮತ್ತು ಅವರ ಸಂಕಲ್ಪಗಳನ್ನು
          ಮುಂದುವರಿಸಬೇಕು.
          <Grid
            sx={{ flexGrow: 1 }}
            container
            spacing={2}
            justifyContent="center"
            marginTop={5}
          >
            <Grid item xs={10}>
              <Grid container justifyContent="center" spacing={4}>
                
                  {founders &&
                  Object.values(founders).map((founder, index) => (
                    <Grid key={index} item xs={6} sm={6}>
                      <FounderMember
                        name={founder.name}
                        age={""}
                        position={""}
                        gender={founder.gender}
                        email={founder.email}
                        phone={founder.phone}
                        description={founder.description}
                      />
                    </Grid>
                  ))}
        
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
