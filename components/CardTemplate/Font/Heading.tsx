import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
export default function Heading({text}: {text:string}) {
  return (
    <>
      <div className=" text-4xl font-extrabold flex justify-start ml-20 md:ml-48  border-1 ">{text}</div>
    </>
  );
}
