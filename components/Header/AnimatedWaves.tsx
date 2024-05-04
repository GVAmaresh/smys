import { CSSProperties } from "react";
import Intro from "../CardTemplate/Intro/Intro";

type Props = {
  color: CSSProperties["color"];
  photo1: string;
  photo2: string;
  description1: string;
  description2: string;
  animationDuration: CSSProperties["animationDuration"];
  animationDirection?: CSSProperties["animationDirection"];
  opacity: CSSProperties["opacity"];
  intro: boolean;
};

const AnimatedWave: React.FC<Props> = ({
  color,
  intro,
  photo1,
  photo2,
  description1,
  description2,
  ...props
}) => {
  const svgMarkup = `
    <svg viewBox="0 0 1000 126" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 42.9533C178.148 -12.5894 287.4 -13.7474 500 42.9533C682.727 88.1203 798.763 97.7368 1000 42.9533V125.861H0V42.9533Z"
        fill="white"
      />
    </svg>
  `;

  const encodedWaveSvg = encodeURIComponent(svgMarkup);

  return (
    <div
      style={{
        background: `url('data:image/svg+xml;utf8,${encodedWaveSvg}')`,
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 80,
        backgroundSize: "1000px 126px",
        animation: `wave ${props.animationDuration} linear infinite`,
        animationDirection: props.animationDirection,
        opacity: props.opacity,
      }}
    >
      {intro && (
        <Intro
          photo1={photo1}
          photo2={photo2}
          description1={description1}
          description2={description2}
        />
      )}
    </div>
  );
};

export default AnimatedWave;
