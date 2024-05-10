import { Grid, ListItem, MenuItem, Stack } from "@mui/material";
import PropsTemplate from "./PropsTemplate";
import Link from "next/link";

export default function MainProps() {
  return (
    <>
      <div className="mt-20 mb-32 flex justify-center sm:mt-4 md:mt-28 md:mb-40  ">
        <Stack
          direction={{ xs: "column", sm: "column", md: "column", lg: "row" }}
          spacing={2}
        >
          <ListItem>
            <Link href="/about?path=facility">
              <PropsTemplate name="" image="/images/facility2.png" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/about?path=program">
              <PropsTemplate name="" image="/images/program.png" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/about?path=satpanta">
              <PropsTemplate
                name=""
                image="/images/satpantha.png"
              />
            </Link>
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
