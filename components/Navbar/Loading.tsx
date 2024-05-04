import Image from "next/image";
import "./navbar.css";
import loading from "@/components/Navbar/final_loading_gif.gif";
// import loading from "/videos/final_loading.mp4";
// import final_loading from "./final_loading_gif.gif"
// import newLoading from "/public/final_loading.gif"

export default function Loading() {
  return (
    <>
      <div className="object-center">
        <div className="w-64 object-center h-20">
          <Image
            src={loading}
            layout={"responsive"}
            height={75}
            width={75}
            className="object-center"
            alt={""}
            unoptimized={true}
          />
        </div>
      </div>
    </>
  );
}
