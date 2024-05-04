"use client";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { CardMedia, Typography } from "@mui/material";
import { ImageConvert } from "@/lib/smys_details/Image_Conversion";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Data from "@/lib/types/Data";
import { FetchDetails } from "@/lib/FetchDetails/Fetch";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 600,
  height: 250,
  position: "static",
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
}));

export default function Intro({
  photo1,
  photo2,
  description1,
  description2,
}: {
  photo1: string;
  photo2: string;
  description1: string;
  description2: string;
}) {
  const [data, setData] = React.useState<Data | null>(null);

  React.useEffect(() => {
    FetchDetails()
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      <Stack
        direction="row"
        spacing={2}
        sx={{ justifyContent: "center" }}
        className="p-4"
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            width: { xs: "73%", md: "40%" },
            height: "100%",
            marginTop: 3,
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: { xs: "100%", md: 160 },
              height: { xs: 120, sm: 240, md: 240 },
            }}
            image={ImageConvert(photo1)}
            alt="Founder image"
          />
          <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <CardContent>
              <Typography
                variant="body2"
                sx={{
                  fontSize: {
                    xs: "0.8rem",
                    sm: "1rem",
                    md: "1rem",
                    lg: "1.5rem",
                  },
                  textAlign: "left",
                }}
              >
                <div className="font-semibold">Brahmin</div>
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: {
                    xs: "0.5rem",
                    sm: "0.6rem",
                    md: "0.6rem",
                    lg: "0.9rem",
                  },
                  textAlign: "left",
                }}
              >
                {description1}
              </Typography>
            </CardContent>
          </Box>
        </Card>
        {/* Second card */}
        <Card
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            width: { xs: "73%", md: "40%" },
            height: "100%",
            marginTop: 3,
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: { xs: "100%", md: 160 },
              height: { xs: 120, sm: 240, md: 240 },
            }}
            image={ImageConvert(photo2)}
            alt="Founder image"
          />
          <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <CardContent>
            <Typography
                variant="body2"
                sx={{
                  fontSize: {
                    xs: "0.8rem",
                    sm: "1rem",
                    md: "1rem",
                    lg: "1.5rem",
                  },
                  textAlign: "left",
                }}
              >
                <div className="font-semibold">Madhwacharya</div>
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: {
                    xs: "0.5rem",
                    sm: "0.6rem",
                    md: "0.6rem",
                    lg: "0.9rem",
                  },
                  textAlign: "left",
                }}
              >
                {description2}
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Stack>
    </div>
  );
}
