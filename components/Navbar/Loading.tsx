import Image from "next/image";
import loading from "@/components/Navbar/final_loading_gif.gif";


export default function Loading() {
  return (
    <>
      <div className="">
        <div className="ml-32 mt-52 w-1/2 md:w-2/5 md:mt-32 md:ml-80 md:pl-52">
          <Image
            src={loading}
            layout={"responsive"}
            height={75}
            width={75}
            className=""
            alt={""}
            unoptimized={true}
          />
        </div>
      </div>
    </>
  );
}
