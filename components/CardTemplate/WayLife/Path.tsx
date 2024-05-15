import { ImageConvert } from "@/lib/smys_details/Image_Conversion";
import Heading from "../Font/Heading";
import PathTemplate from "./PathTemplate";

import { Journey } from "@/lib/types/Data";

export default function Path({ data }: { data: Journey }) {
  return (
    <>
        <div className="bg-gray-300 h-px  w-full mt-56"></div>
      <div className="mt-10 sm:mt-12  md:mt-10 lg:mt-10 text-xl font-semibold ">
        {/* <Heading text={"ನಡೆದು ಬಂದ ಹಾದಿ...."} isLine={false}/> */}
        <Heading text={"Journey of SMYS...."} isLine={false}/>
        <div className="flex flex-col items-center">
          <PathTemplate
            name={""}
            // image={ImageConvert(data.photo)}
            image={""}
            description={data.description}
          />
        </div>
      </div>
    </>
  );
}
