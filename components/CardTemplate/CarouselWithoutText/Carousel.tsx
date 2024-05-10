import React, { useCallback, useEffect, useState } from "react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { NextButton, PrevButton, usePrevNextButtons } from "./ArrowButton";
import { CardMedia } from "@mui/material";
import { ImageConvert } from "@/lib/smys_details/Image_Conversion";

type PropType = {
  images: string[];
  title?: string[];
  description?: string[];
  slides: number[];
  options?: EmblaOptionsType;
};

const Carousel = (props: PropType) => {
  const { slides, options, images, title, description } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [scrollProgress, setScrollProgress] = useState(0);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll(emblaApi);
    emblaApi.on("reInit", onScroll);
    emblaApi.on("scroll", onScroll);
  }, [emblaApi, onScroll]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((image, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <CardMedia
                  component="img"
                  sx={{
                    width: { xs: 900, sm:600, md: "250%", lg:"200%"},
                    height: { xs: 200, md: 300 },
                    borderRadius: { xs: 5, md: 5 },
                    marginLeft: { xs: "auto", md: 0 },
                    marginRight: { xs: "auto", md: 0 },
                  }}
                  image={ImageConvert(images[index]) || ""}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex justify-center w-screen lg:-ml-40 ">
        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
