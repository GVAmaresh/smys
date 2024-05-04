import { ImageConvert } from "@/lib/smys_details/Image_Conversion";
import { CardMedia } from "@mui/material";

interface ImageSlidingProps {
  images: string[];
}

const ImageSliding = ({ images }: ImageSlidingProps) => {
  return (
    <>
      <div className="">
        <div className="">
          <CardMedia
            component="img"
            sx={{
              width: { xs: 150, md: 400 },
              height: 250,
              border: 0,
              marginLeft: { xs: "auto", md: 0 },
              marginRight: { xs: "auto", md: 0 },
            }}
            image={ImageConvert(images[0])}
            alt="Founder image"
          />
        </div>
        <div className="">
          <CardMedia
            component="img"
            sx={{
              width: { xs: 150, md: 400 },
              height: 250,
              border: 0,
              marginLeft: { xs: "auto", md: 0 },
              marginRight: { xs: "auto", md: 0 },
            }}
            image={ImageConvert(images[0])}
            alt="Founder image"
          />
        </div>
      </div>
    </>
  );
};

export default ImageSliding;
