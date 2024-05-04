"use client";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 400,
  height: 200,
  position: "static",
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
}));

export default function Activity() {
  return (
    <div className="p-4">
      <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
        <DemoPaper variant="outlined">outlined variant</DemoPaper>
        <DemoPaper variant="outlined">outlined variant</DemoPaper>
        <DemoPaper variant="outlined">outlined variant</DemoPaper>
      </Stack>
    </div>
  );
}
