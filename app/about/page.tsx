"use client"
import Committe from "@/components/CardTemplate/Committe/Committe";
import Event from "@/components/CardTemplate/Event/Event";
import Founder from "@/components/CardTemplate/Founder/Founder";
import Satpantha from "@/components/CardTemplate/Satpantha/Satpantha";
import Navbar from "@/components/Navbar/Navbar";
import { useEffect, useState } from "react";
import Data from "@/lib/types/Data";
import { getAboutPageEnglish } from "@/firebase/helper";
import Loading from "@/components/Navbar/Loading";
export default function About() {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {

    getAboutPageEnglish().then((data:any)=>{
      setData(data);
    }).catch((err)=>{
      console.error("Error:", err);
    })
  }, []);
console.log(data?.Satpanta)
  return (
    <>
      {data == null ? (
        <div><Loading/></div>
      ) : (
        <>
          <Navbar options={["Home", "Events", "Gallery"]} />
          <div className="mt-44 ">
            <Founder founders={data.Founders} />
            <Committe committe={data.Committe}/>
            {/* <Event page={""} /> */}
            <Satpantha satpanta={data.Satpanta}/>
          </div>
        </>
      )}
    </>
  );
}
