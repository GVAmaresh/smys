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
          As the founder of [Company Name], my journey began with a simple
          vision: to make a difference. Fueled by passion and determination, I
          embarked on this entrepreneurial voyage, driven by the desire to
          innovate and solve pressing challenges. Our company is not just about
          products or services; it's about impact. From the inception, our
          mission has been to revolutionize the way people [describe your
          company's mission]. We strive to empower individuals, businesses, and
          communities, fostering growth and prosperity. Throughout this journey,
          I've learned invaluable lessons  from overcoming obstacles to
          embracing failures as opportunities for growth. Each setback
          strengthened my resolve and fueled my commitment to our vision. Today,
          as we stand at the forefront of innovation, I am proud of what we've
          achieved. Yet, our journey is far from over. We remain steadfast in
          our dedication to pushing boundaries, disrupting industries, and
          leaving a lasting legacy. But, beyond the numbers and milestones lies
          a deeper purpose to inspire change, to create a better tomorrow.
          Together, we are not just building a company; we are shaping a future
          filled with endless possibilities. Join us as we continue to redefine
          what's possible and make our mark on the world.
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
                    position={satpanta.position}
                    study={satpanta.study}
                    description={satpanta.description}
                    email={satpanta.email}
                    phone={satpanta.phone}
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
