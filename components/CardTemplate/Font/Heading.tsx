import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export default function Heading({ text, isLine=true }: { text: string, isLine?:boolean }) {
  return (
    <>
      <div className=" mt-20 text-2xl md:text-3xl lg:text-4xl font-extrabold flex justify-start ml-10  md:ml-20 lg:ml-48  border-1 ">
<div>{text}</div>
      </div>
    </>
  );
}
