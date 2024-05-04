import Heading from "../Font/Heading";
import SatpanthaCard from "./SatpanthaCard";
import Grid from "@mui/material/Grid";
import { SatpantaMember } from "@/lib/types/Data";
export default function Satpantha(satpanta: {
  satpanta: { [key: string]: SatpantaMember };
}) {
  return (
    <>
      <div className="container mt-20 mb-20">
        <Heading text="Satpantha Students' Union" />
        <div
          className="m-10 md:m-64 md:mt-10 md:mb-10 p-10 mt-10 mb-10 border-2"
          style={{
            borderBottomRightRadius: "50px",
            borderTopLeftRadius: "50px",
          }}
        >
          ಸತ್ಪಂಥ ವಿದ್ಯಾರ್ಥಿ ಒಕ್ಕೂಟವನ್ನು 1952 ರಲ್ಲಿ ಸ್ಥಾಪಿಸಲಾಯಿತು. ಇದು ಶ್ರೀ ಮಾಧ್ವ
          ಯುವಕ ಸಂಘದ ವಿದ್ಯಾರ್ಥಿಗಳಲ್ಲಿ ನಾಯಕತ್ವ ಗುಣಗಳನ್ನು ಬೆಳೆಸುವಲ್ಲಿ ಪ್ರಮುಖ ಪಾತ್ರ
          ವಹಿಸುತ್ತದೆ. ಸತ್ಪಂಥ ವಿದ್ಯಾರ್ಥಿಗಳ ಒಕ್ಕೂಟವು ಒಕ್ಕೂಟದ ಒಟ್ಟಾರೆ
          ಕಾರ್ಯನಿರ್ವಹಣೆಯನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡುವ ಪ್ರಧಾನ ಕಾರ್ಯದರ್ಶಿಯನ್ನು ಒಳಗೊಂಡಿದೆ.
          ಇದು ಆಹಾರ, ಸಾಂಸ್ಕೃತಿಕ, ಗ್ರಂಥಾಲಯ, ನಿರ್ವಹಣೆ ಮತ್ತು ಕ್ರೀಡಾ ಉಸ್ತುವಾರಿಗಳನ್ನು
          ಸಹ ಒಳಗೊಂಡಿದೆ. 2023-24 ನೇ ಸಾಲಿನ ಸತ್ಪಂಥ ವಿದ್ಯಾರ್ಥಿ ಸಂಘವು ಈ ಕೆಳಗಿನಂತಿದೆ:-
        </div>
        <Grid
          sx={{ flexGrow: 1 }}
          container
          spacing={2}
          justifyContent="center"
          marginTop={5}
        >
          <Grid item xs={10}>
            <Grid container justifyContent="center" spacing={4}>
              {Object.values(satpanta.satpanta).map((satpanta, index) => (
                <Grid key={index} item xs={6} sm={3}>
                  <SatpanthaCard
                    name={satpanta.name}
                    position={satpanta.position || ""}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
