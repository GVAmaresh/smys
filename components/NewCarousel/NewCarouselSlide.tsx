import React, { useState } from "react";
import { Modal, Backdrop, Fade, CardMedia } from "@mui/material";
import { ImageConvert } from "@/lib/smys_details/Image_Conversion";

type PropType = {
  images: string[];
};
export default function NewCarousel(props: PropType) {
  const { images } = props;
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const handleImage = (value: any) => {
    setImage(value);
    setOpen(true);
  };
  return (
    <>
    <div className=" flex overflow-x-auto newscroll" id="style-2">
      <div className="ml-32 flex">
        {Array.from(Array(images.length).keys()).map((index) => (
          <div className=" flex-shrink-0 mr-4" key={index}>
            <CardMedia
              component="img"
              image={ImageConvert(images[index])}
              alt=""
              onClick={() => handleImage(images[index])}
              className="img"
              sx={{
                width: { xs: 200, sm: 300, md: "250%", lg: "200%" },
                height: { xs: 200, md: 300 },
                borderRadius: { xs: 5, md: 5 },
                marginLeft: { xs: "auto", md: 0 },
                marginRight: { xs: "auto", md: 0 },
              }}
            />
          </div>
        ))}
      </div>
      <Modal
  className="flex items-center justify-center"
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
        height: { md: "80%", lg: "60%" },
        width: { md: "80%", lg: "80%" },
        borderRadius: { xs: 5, md: 5 },
        marginLeft: { xs: "auto", md: 0 },
        marginRight: { xs: "auto", md: 0 },
        // Ensure the image is not dimmed
        filter: 'brightness(100%)'
      }}
    />
  </Fade>
</Modal>

    </div>
    </>
  );
}

