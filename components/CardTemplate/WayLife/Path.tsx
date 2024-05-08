import { ImageConvert } from "@/lib/smys_details/Image_Conversion";
import Heading from "../Font/Heading";
import PathTemplate from "./PathTemplate";
import { Journey } from "@/lib/types/Data";

export default function Path({ data }: { data: Journey }) {
  console.log(ImageConvert(data.photo));
  return (
    <>
        <div className="bg-gray-300 h-px  w-full mt-56"></div>
      <div className="mt-32 sm:mt-32  md:mt-40 lg:mt-40">
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
