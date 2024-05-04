import { Grid } from "@mui/material";
import CommitteMember from "../Committe/CommitteMember";
import Heading from "../Font/Heading";
import FounderMember from "./FounderMember";
import { ImageConvert } from "@/lib/smys_details/Image_Conversion";

interface Founder {
  name: string;
  age: string;
  photo: string;
  gender: string;
  position: string;
  email: string;
  phone: string;
  description: string;
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
    // <div className="mt-28">
    //   <Heading text={"Founders"} />
    //   <div className="flex flex-col items-center mt-6 mb-20">
    //   {Object.values(founders).map((founder, index) => (
    //       <CommitteMember
    //         key={index}
    //         name={founder.name}
    //         photo={ImageConvert(founder.photo)}
    //         phone={founder.phone}
    //         email={founder.email}
    //         description={founder.description}

    //         name={committe.name}
    //         photo={ImageConvert(committe.photo)}
    //         age={""}
    //         position={""}
    //         gender={committe.gender}
    //         email={committe.email}
    //         phone={committe.phone}
    //         description={committe.description}
    //       />
    //     ))}

    //   </div>
    // </div>
    <>
      <div className="container mt-20 ">
        <Heading text="Founders" />
        <div className="m-10 md:m-64 md:mt-10 md:mb-10 p-10 mt-10 mb-10 border-2" style={{borderBottomRightRadius:"50px", borderTopLeftRadius:"50px"}}>
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
          a deeper purpose  to inspire change, to create a better tomorrow.
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
              {founders &&
                Object.values(founders).map((founder, index) => (
                  <Grid key={index} item xs={6} sm={3}>
                    <FounderMember
                      name={founder.name}
                      photo={ImageConvert(founder.photo)}
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
    </>
  );
}
