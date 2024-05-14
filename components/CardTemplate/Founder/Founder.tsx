import { Grid } from "@mui/material";
import Heading from "../Font/Heading";
import FounderMember from "./FounderMember";

interface Founder {
  name?: string;
  age?: string;
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

  return (
    <div className="mt-20">
      <Heading text="Founders" />
      <div
        className="m-10 sm:m-10 md:m-20 md:mt-10 md:mb-10 p-10 mt-10 mb-10 border-2 "
        style={{
          borderBottomRightRadius: "50px",
          borderTopLeftRadius: "50px",
          textAlign: "justify",
          fontFamily: "",
        }}
      >
        Sri Madhwa Yuvaka Sangha has received invaluable contributions from
        numerous eminent individuals during its successful journey of seven
        decades. Founded in 1945, this association has progressed and flourished
        due to the contributions and dedication of key figures, and it must
        continue to uphold their contributions and ideals for further growth and
        advancement.
        <Grid
          sx={{ flexGrow: 1 }}
          container
          spacing={2}
          justifyContent="center"
          marginTop={5}
        >
          {Object.values(founders).map((founder, index) => (
            <Grid key={index} item xs={12} sm={12} md={6} lg={6}>
              <FounderMember
                name={founder.name || ""}
                age={founder.age || ""}
                gender={founder.gender || ""}
                position={founder.position || ""}
                email={founder.email || ""}
                phone={founder.phone || ""}
                description={founder.description || ""}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
