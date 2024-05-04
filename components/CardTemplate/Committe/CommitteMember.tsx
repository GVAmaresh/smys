import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { CommitteeMember } from '@/lib/types/Data';
export default function CommitteMember(data:CommitteeMember) {
  return (
    <Card sx={{ maxWidth: 345 ,height:100}}>
      <CardActionArea>
      {/* <CardMedia
        component="img"
        sx={{
          width: { xs: 150, md: 400 },
          height: { xs: 150, md: 250 },
        }}
        image={data.photo}
        alt="Founder image"
      /> */}
        <CardContent>
          <div className=" font-extrabold text-xs  md:text-lg md:text-center">{data.name}</div>
          <div className="  font-medium text-xs  md:text-xs  md:text-center mt-2 mb-2">{data.position}</div>
          {/* <div className="font-medium text-xs  md:text-xs  md:text-center mt-2 mb-2"> {data.phone}</div> */}
          {/* <div className="font-medium text-slate-500  text-xs  ">{data.description}</div> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}