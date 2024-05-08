"use client";
import Contact from "@/components/CardTemplate/ContactUs/Contact";

import Activity from "@/components/CardTemplate/Intro/Activity";
import Path from "@/components/CardTemplate/WayLife/Path";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { getHomePageEnglish } from "@/firebase/helper";
import Data from "@/lib/types/Data";
import {PresidentVision, WardenMessage} from "@/components/CardTemplate/Vision/PresidentVision";
import SecretaryVision from "@/components/CardTemplate/Vision/SecretaryDesk";
import Loading from "@/components/Navbar/Loading";
import { useFirebase } from "@/firebase/firebase";
import MainProps from "@/components/CardTemplate/Props/MainProps";
import Title from "@/components/CardTemplate/Title/title";

export default function Home() {
  const [data, setData] = useState<Data | null>(null);
  useFirebase();
  useEffect(() => {
    console.log("running her")
    getHomePageEnglish()
      .then((data: any) => setData(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  console.log(data);

  return (
    <div className="w-fit md:w-fit">
      {data == null ? (
        <div>
          <Loading />
        </div>
      ) : (
        <>
          <Navbar options={["About", "Events", "Gallery", "Contact"]} />
          <Header
            img={data.Hostel}
            photo1={data.Intro.Brahmin.photo}
            photo2={data.Intro.Madhwa.photo}
            description1={data.Intro.Brahmin.description}
            description2={data.Intro.Madhwa.description}
          />
          <Title />
          
          <Path data={data.Journey} />
          <MainProps />
          <PresidentVision data={data.Journey} />
          <SecretaryVision data={data.Journey} />
          <WardenMessage data={data.Journey} />
          {/* <Activity /> */}
          <Contact
            add={data.Address.add}
            email={data.Address.email}
            phno={data.Address.phno}
            social={data.Address.social}
          />
        </>
      )}
    </div>
  );
}
