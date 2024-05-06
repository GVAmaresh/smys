import { Grid } from "@mui/material";
import PropsTemplate from "./PropsTemplate";

export default function MainProps() {
  return (
    <>
    <div className="mt-28 mb-28 flex justify-center ml-1 sm:ml-32 sm:mt-4 md:ml-1 ">
      <Grid
        sx={{ flexGrow: 1 }}
        container
        spacing={1}
        justifyContent="center"
        marginTop={5}
      >
        <Grid item xs={15}>
          <Grid container justifyContent="center" spacing={3}>
            <Grid item xs={9} sm={9} md={3}>
              <PropsTemplate name="Facility" image="/images/pipleline.jpeg" />
            </Grid>
            <Grid item xs={9} sm={9} md={3}>
            <PropsTemplate name="Program" image="/images/pipleline.jpeg" />
            </Grid>
            <Grid item xs={9} sm={9} md={3}>
            <PropsTemplate name="Student Form" image="/images/pipleline.jpeg" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </div>
    </>
  );
}
