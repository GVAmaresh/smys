"use client";
import Contact from "@/components/CardTemplate/ContactUs/Contact";
import Activity from "@/components/CardTemplate/Intro/Activity";
import Path from "@/components/CardTemplate/WayLife/Path";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { getHomePageEnglish, UpdatePhoto, GetFacilityPhoto, getNotification } from "@/firebase/helper";
import Data from "@/lib/types/Data";
import {
  PresidentVision,
  WardenMessage,
} from "@/components/CardTemplate/Vision/PresidentVision";
import SecretaryVision from "@/components/CardTemplate/Vision/SecretaryDesk";
import Loading from "@/components/Navbar/Loading";
import { useFirebase } from "@/firebase/firebase";
import MainProps from "@/components/CardTemplate/Props/MainProps";
import Title from "@/components/CardTemplate/Title/title";
import Heading from "@/components/CardTemplate/Font/Heading";
import CopyRight from "@/components/CardTemplate/CopyRight/CopyRight";
import Alerts from "@/components/Alert/Alert";
import AlertChakra from "@/components/Alert/AlertChakra";

export default function Home() {
  useFirebase();
  const [data, setData] = useState<Data | null>(null);
  const [alertOpen, setAlertOpen] = useState<boolean>(true); // Assuming you want the alert to be visible initially

  useEffect(() => {
    getHomePageEnglish()
      .then((data: any) => setData(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  // useEffect(() => {
  //   GetFacilityPhoto().then(data => {});
  // }, []);

  // useEffect(() => {
  //   UpdatePhoto().then((data) => {});
  // }, []);

  const [title, setTitle] = useState<string>("Fill the space");
  const [state, setState] = useState<boolean>(false)
  const [information, setInformation] = useState<string>("Fill the space");

  useEffect(() => {
    getNotification().then((data) => {
      setTitle(data.title);
      setInformation(data.information);
      setState(data.state);
    });
  }, []);

  return (
    <div className="w-fit md:w-fit">
      {data == null ? (
        <div>
          <Loading />
        </div>
      ) : (
        <>
          <Navbar options={["About", "Events", "Gallery", "Contact"]} />
          {state&&<AlertChakra title={title} information={information}/>}
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
          <Heading text={"Contact us"} />
          <Contact
            add={data.Address.add}
            email={data.Address.email}
            phno={data.Address.phno}
            social={data.Address.social}
          />
          <CopyRight/>
        </>
      )}
    </div>
  );
}
