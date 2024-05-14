"use client";
import { Grid } from "@mui/material";
import Heading from "../Font/Heading";
import { useEffect, useState } from "react";

import Data from "@/lib/types/Data";

import Navbar from "@/components/Navbar/Navbar";
import {
  getGalleryPageEnglish,
  GetGalleryPhoto,
  getHomePageEnglish,
} from "@/firebase/helper";
import { GetImages } from "@/lib/FetchDetails/Fetch";
import { ImageConvert } from "@/lib/smys_details/Image_Conversion";
import Loading from "@/components/Navbar/Loading";
import Gallery from "@/app/gallery/page";
import Contact from "../ContactUs/Contact";
import { Modal, Backdrop, Fade, CardMedia } from "@mui/material";

export default function GalleryGrp() {
  const [data, setData] = useState<Data | null>(null);
  const [clickIndex, setClickIndex] = useState<number | null>(null);
  const [click, setClick] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const handleImage = (value: any) => {
    setImage(value);
    setOpen(true);
  };
  const [newData, setNewData] = useState<string[]>([]);

  const [data2, setData2] = useState<Data | null>(null);
  useEffect(() => {
    getHomePageEnglish()
      .then((data: any) => setData2(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

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
          // const datas = await GetImages(group);
          const datas = await GetGalleryPhoto();
          setNewData(datas?.Gallery);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [data]);
  return (
    <>

      {data?.Gallery ? (
        <div className="">
        <div className=" pb-10">
          {!click && (
            <>
              <Navbar options={["Home", "About", "Events"]} />
              <div className="mt-32 ml-1 md:ml-5">
                <Heading text={"Gallery"} />
              </div>
            </>
          )}
          <div className="ml-1">
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
                    <Grid key={index} item xs={6} sm={6} md={4} lg={4}>
                      <CardMedia
                        component="img"
                        sx={{
                          width: { xs: 800, md: "120%" },
                          height: { xs: 200, md: 400 },
                          borderRadius: 5,
                          marginLeft: { xs: "auto", md: 0 },
                          marginRight: { xs: "auto", md: 0 },
                        }}
                        onClick={() => handleImage(image)}
                        image={ImageConvert(image) || ""}
                        alt="Founder image"
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </div>
          <div className="">
          <Heading text={"Contact Us"} />
            {data2&&<Contact
              add={data2.Address.add}
              email={data2.Address.email}
              phno={data2.Address.phno}
              social={data2.Address.social}
            />}
          </div>
        </div>
        <Modal
        className="flex items-center justify-center p-10"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open} timeout={500}>
          <CardMedia
            component="img"
            image={ImageConvert(image)}
            alt=""
            className="img"
            sx={{
              width:{md:"80%", lg:"60%"},
              
              borderRadius: { xs: 5, md: 5 },
              marginLeft: { xs: "auto", md: 0 },
              marginRight: { xs: "auto", md: 0 },
              filter: 'brightness(100%)'
            }}
          />
        </Fade>
      </Modal>
        </div>
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </>
  );
}
