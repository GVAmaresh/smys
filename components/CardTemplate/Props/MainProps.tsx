import { Grid, ListItem, MenuItem, Stack } from "@mui/material";
import PropsTemplate from "./PropsTemplate";

export default function MainProps() {
  return (
    <>
      <div className="mt-20 mb-32 flex justify-center sm:mt-4 md:mt-28 md:mb-40  ">
        <Stack direction={{ xs: 'column', sm: 'column', md: 'column', lg: 'row' }} spacing={2}>
          <ListItem>
            <PropsTemplate name="Facility" image="/images/pipleline.jpeg" />
          </ListItem>
          <ListItem>
            <PropsTemplate name="Program" image="/images/pipleline.jpeg" />
          </ListItem>
          <ListItem>
            {" "}
            <PropsTemplate name="Student Form" image="/images/pipleline.jpeg" />
          </ListItem>
        </Stack>
        {/* <Grid container spacing={1}>
          <Grid xs={6}>
            <MenuItem>
              <PropsTemplate name="Facility" image="/images/pipleline.jpeg" />
            </MenuItem>
          </Grid>
          <Grid xs={6}>
            <MenuItem>
              <PropsTemplate name="Program" image="/images/pipleline.jpeg" />
            </MenuItem>
          </Grid>
          <Grid xs={6}>
            <MenuItem>
              <PropsTemplate
                name="Student Form"
                image="/images/pipleline.jpeg"
              />
            </MenuItem>
          </Grid>
        </Grid> */}
      </div>
    </>
  );
}
