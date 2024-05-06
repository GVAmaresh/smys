"use client";
import { CardMedia, Grid } from "@mui/material";
import Heading from "../Font/Heading";
import { useEffect, useState } from "react";

import Data from "@/lib/types/Data";

import Navbar from "@/components/Navbar/Navbar";
import { AuthDetailsGDrive, getGalleryPageEnglish } from "@/firebase/helper";
import { GetImages } from "@/lib/FetchDetails/Fetch";
import { ImageConvert } from "@/lib/smys_details/Image_Conversion";
import Loading from "@/components/Navbar/Loading";

export default function GalleryGrp() {
  const [data, setData] = useState<Data | null>(null);
  const [clickIndex, setClickIndex] = useState<number | null>(null);
  const [click, setClick] = useState<boolean>(false);
  const [newData, setNewData] = useState<string[]>([]);

  useEffect(() => {
    getGalleryPageEnglish()
      .then((data: any) => {
        setData(data);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const group = data?.Gallery; 
        if (group) {
          const datas = await GetImages(group);
          setNewData(datas);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, [data]);
  console.log(newData);
  return (
    <>
      {data?.Gallery ? (
        <div className="container pb-10  ">
          {!click && (
            <>
              <Navbar options={["Home", "About", "Events"]} />
              <div className="mt-32 ml-5   ">
                <Heading text={"Gallery"} />
              </div>
            </>
          )}
          <Grid
            sx={{ flexGrow: 1 }}
            container
            spacing={2}
            justifyContent="center"
            marginTop={5}
          >
            <Grid item xs={10}>
              <Grid container justifyContent="center" spacing={2}>
                {Object.values(newData).map((image, index) => (
                  <Grid key={index} item xs={8} sm={4}>
                    <CardMedia
                      component="img"
                      sx={{
                        width: {xs: 600,md:"120%"} ,
                        height: { xs: 200, md: 400 },
                        borderRadius: 5 ,
                        marginLeft: { xs: "auto", md: 0 },
                        marginRight: { xs: "auto", md: 0 },
                      }}
                      image={ImageConvert(image) || ""}
                      alt="Founder image"
                    />

                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </div>
      ) : (
        <div><Loading/></div>
      )}
    </>
  );
}
