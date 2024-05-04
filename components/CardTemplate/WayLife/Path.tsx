import { ImageConvert } from "@/lib/smys_details/Image_Conversion";
import Heading from "../Font/Heading";
import PathTemplate from "./PathTemplate";
import { Journey } from "@/lib/types/Data"; 
// interface JourneyData {
//   photo: string;
//   description: string;
// }
export default function Path({ data }: { data: Journey }) {
  console.log(ImageConvert(data.photo))
  return (
    <>
    <div className="mt-72 sm:mt-96 md:mt-80 lg:mt-60">
        <Heading text={"ನಡೆದು ಬಂದ ಹಾದಿ...."} />
      <div className="flex flex-col items-center">
        <PathTemplate
          name={""}
          image={ImageConvert(data.photo)}
          description={data.description}
        />
        </div>
      </div>
    </> 
  );
}
