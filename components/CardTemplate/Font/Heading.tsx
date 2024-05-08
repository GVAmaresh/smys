import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export default function Heading({ text, isLine=true }: { text: string, isLine?:boolean }) {
  return (
    <>
      <div className=" mt-20 text-2xl md:text-3xl lg:text-4xl font-extrabold flex justify-start ml-20 md:ml-48  border-1 ">
        {isLine?<div className="flex items-center w-full">
          <span className="text-black pr-10 md:pr-20 lg:pr-20">{text}</span>
          <hr className="flex-grow h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        </div>:<div>{text}</div>}
      </div>
    </>
  );
}
