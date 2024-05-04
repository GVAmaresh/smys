import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { CommitteeMember } from "@/lib/types/Data";
export default function CommitteMember(data: CommitteeMember) {
  return (
    <div className=" font-medium  text-xs  md:text-lg ">
      {" "}
      <li>{data.name}</li>
    </div>
  );
}
