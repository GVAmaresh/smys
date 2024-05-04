import React from "react";
import Grid from "@mui/material/Grid";
import CommitteMember from "./CommitteMember";
import Heading from "../Font/Heading";

import { CommitteeMember } from "@/lib/types/Data";
import { ImageConvert } from "@/lib/smys_details/Image_Conversion";
function Committe(committe: { committe: { [key: string]: CommitteeMember } }) {
  console.log(committe)
  return (
    <>
      <div className="container mt-20 ">
        <Heading text="Executive Committee" />
        <Grid
          sx={{ flexGrow: 1 }}
          container
          spacing={2}
          justifyContent="center"
          marginTop={5}
        >
          <Grid item xs={10}>
            <Grid container justifyContent="center" spacing={4}>
              {Object.values(committe.committe).map((committe, index) => (
                <Grid key={index} item xs={6} sm={3}>
                  <CommitteMember
                    name={committe.name}
                    photo={ImageConvert(committe.photo || "")}
                    age={committe.age}
                    position={committe.position}
                    gender={committe.gender}
                    email={committe.email}
                    phone={committe.phone}
                    description={committe.description}
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

export default Committe;
