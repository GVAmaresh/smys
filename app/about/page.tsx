"use client";
import Committe from "@/components/CardTemplate/Committe/Committe";
import Event from "@/components/CardTemplate/Event/Event";
import Founder from "@/components/CardTemplate/Founder/Founder";
import Satpantha from "@/components/CardTemplate/Satpantha/Satpantha";
import Navbar from "@/components/Navbar/Navbar";
import { Suspense, useEffect, useState } from "react";
import Data from "@/lib/types/Data";
import { getAboutPageEnglish, getHomePageEnglish } from "@/firebase/helper";
import Loading from "@/components/Navbar/Loading";
import FacilityTemplate from "@/components/CardTemplate/FacilityComp/FacilityTemplate";
import ProgramTemplate from "@/components/CardTemplate/FacilityComp/ProgramTemplate";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Contact from "@/components/CardTemplate/ContactUs/Contact";
import Heading from "@/components/CardTemplate/Font/Heading";
import CopyRight from "@/components/CardTemplate/CopyRight/CopyRight";

function AboutTemplate() {
  const [data, setData] = useState<Data | null>(null);
  const [data2, setData2] = useState<Data | null>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    let pathId = url.split("=")[1];
    if (pathId) {
      setTimeout(() => {
        const element = document.getElementById(pathId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 500);
    }
  }, [pathname, searchParams]);
  useEffect(() => {
    getHomePageEnglish()
      .then((data: any) => setData2(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    getAboutPageEnglish()
      .then((data: any) => {
        setData(data);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }, []);

  return (
    <>
      {data == null ? (
        <div>
          <Loading />
        </div>
      ) : (
        <>
          <div className="w-fit">
            <Navbar options={["Home", "Events", "Gallery"]} />
          </div>
          <div className="mt-44"></div>
          <div className="">
            <Founder founders={data.Founders} />
          </div>
          <div className="">
            <Committe committe={data.Committe} />
          </div>
          {/* <Event page={""} /> */}
          <div id="satpanta" className="satpanta">
            <Satpantha satpanta={data.Satpanta} />
          </div>
          <div id="facility" className="facility">
            <FacilityTemplate />
          </div>
          <div id="program" className="program">
            <ProgramTemplate />
          </div>
          <div className="">
            {data2 && (
              <>
              <Heading text={"For Donations/Seva"} />
              <Contact
                add={data2.Address.add}
                email={data2.Address.email}
                phno={data2.Address.phno}
                social={data2.Address.social}
              />
              </>
            )}
          </div>
          <CopyRight/>
        </>
      )}
    </>
  );
}

export default function About() {
  return (
    <>
      <Suspense>
        <AboutTemplate />
      </Suspense>
    </>
  );
}
