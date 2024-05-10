import React from "react";
import Carousel from "./Carousel";
import { EmblaOptionsType } from "embla-carousel";

import "./base.css";
import "./sandbox.css";
import "./embla.css";
import { ImageIDConvert } from "@/lib/smys_details/Image_Conversion";

const OPTIONS: EmblaOptionsType = { dragFree: true };
interface ImageSlidingProps {
  photo?: string;
  title?: string;
  description?: string;
}
[];

interface SlideProps {
  details?: {
    photo: string;
    title?: string;
    description?: string;
  }[];
  imageList?: string[];
}

const CarouselWithoutText = ({ details, imageList }: SlideProps) => {
  let images: string[] = [];
  let titles: string[] = [];
  let descriptions: string[] = [];
  let slides: number[] = [];

  if (details) {
    images = details.map((detail) => detail.photo);
    titles = details.map((detail) => detail.title || "");
    descriptions = details.map((detail) => detail.description || "");
    slides = Array.from(Array(images.length).keys());
  } if (imageList) {
    images = imageList.map((detail) => ImageIDConvert(detail));
    titles = imageList.map((detail) => "");
    descriptions = imageList.map((detail) => "");
    slides = Array.from(Array(imageList.length).keys());
  }
  return (
    <>
      <Carousel
        slides={slides}
        images={images}
        title={titles}
        description={descriptions}
        options={OPTIONS}
      />
    </>
  );
};

export default CarouselWithoutText;
