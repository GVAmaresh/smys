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
          className="m-10 md:ml-20 md:mt-10 md:mb-10 p-10 mt-10 mb-10 border-2"
          style={{
            borderBottomRightRadius: "50px",
            borderTopLeftRadius: "50px",
            textAlign: "justify",
          }}
        >
          Satpantha Students Union was established in 1952 to cultivate
          leadership and self confidence qualities among the students of Sri
          Madhwa Yuvaka Sangha. It plays a significant role in overseeing the
          overall functioning of the student body, including administration of
          food, cultural activities, library management, internal management,
          and sports facilities.
          <br />
          <br /> For the academic year 2023-24, Satpantha Students Union
          comprises the following:-
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
