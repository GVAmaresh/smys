"use client";
import Navbar from "@/components/Navbar/Navbar";
import Event from "@/components/CardTemplate/Event/Event";
import Heading from "@/components/CardTemplate/Font/Heading";
import { useEffect, useState } from "react";
import Data from "@/lib/types/Data";
import { FetchDetails, GetImages } from "@/lib/FetchDetails/Fetch";
import Link from "next/link";
import { getEventPageEnglish } from "@/firebase/helper";
import ImageSliding from "@/components/CardTemplate/Event/ImageSliding";
import CarouselWithoutText from "@/components/CardTemplate/CarouselWithoutText/CarouselWithoutText";
import Loading from "@/components/Navbar/Loading";
import FacilityTemplate from "@/components/CardTemplate/FacilityComp/FacilityTemplate";
import ProgramTemplate from "@/components/CardTemplate/FacilityComp/ProgramTemplate";

interface ImageSlidingProps {
  photo?: string;
  title?: string;
  description?: string;
}
[];
interface ImageArrayprops {
  photo: string[];
}
export default function Events() {
  const [data, setData] = useState<Data | null>(null);

  const [historical, setHistorical] = useState<ImageArrayprops>();
  const [annual, setAnnual] = useState<ImageArrayprops>();

  const [jyana, setJyana] = useState<
    | {
        photo: string;
        title?: string;
        description?: string;
      }[]
    | null
  >(null);

  useEffect(() => {
    getEventPageEnglish()
      .then((data: any) => {
        setData(data);
        setJyana(data.Events.Jyana);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const group1 = data?.Events.Historical;
        console.log("Group1 = ", group1);
        if (group1) {
          const datas = await GetImages(group1);

          setHistorical({ photo: datas });
        }
        const group2 = data?.Events.Annual;
        if (group2) {
          const datas = await GetImages(group2);
          console.log("photos = = ", datas);
          setAnnual({ photo: datas });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [data]);

  return (
    <>
      <div>
        {data?.Events ? (
          <div className="mt-36">
            <Navbar options={["Home", "About", "Gallery"]} />
            <div className="mt-16"></div>
            <Heading text="Historical Events" />
            <div className="mt-8 mb-32">
              {historical && (
                <CarouselWithoutText imageList={historical.photo} />
              )}
            </div>

            {/* <Heading text="Annual Events" />
            <div className="mt-8 mb-32">
              {annual && <CarouselWithoutText imageList={annual.photo} />}
            </div> */}
            <Heading text="Jnanabharathi" />
            <div className="mt-8 mb-32">
              <div
                className="m-10 md:m-64 md:mt-10 md:mb-10 p-10 mt-10 mb-10 border-2"
                style={{
                  borderBottomRightRadius: "50px",
                  borderTopLeftRadius: "50px",
                }}
              >
                ಶ್ರೀ ಮಾಧ್ವ ಯುವಕ ಸಂಘವು
                <span className=" font-extrabold">ಜ್ಞಾನ ಭಾರತೀ</span> ಎಂಬ
                ಕಾರ್ಯಕ್ರಮದ ಅಡಿಯಲ್ಲಿ ವಿಚಾರ ಸಂಕಿರಣವನ್ನು ತನ್ನ ಅಮೃತ ಮಹೋತ್ಸವದ ಶುಭ
                ಸಂದರ್ಭದಲ್ಲಿ ಆರಂಭವಾಯಿತು. ಹಲವಾರು ಪಠ್ಯಪುಸ್ತಕೇತರ ಮತ್ತು ಸಾಮಾಜಿಕ
                ವಿಷಯಗಳು ಅರಿವು ಹಾಗೂ ಆಸಕ್ತಿ ಮೂಡಿಸುವ ಜ್ಞಾನ ಸತ್ರದ ಒಂದು ಪ್ರಯತ್ನ.
                ಜ್ಞಾನಭಾರತಿ ವಿಷಯಗಳು ಸಾಮಾನ್ಯವಾಗಿ ಸನಾತನ ಧರ್ಮ, ಸಾತ್ವಿಕ ಆಹಾರ,
                ಬ್ರಾಹ್ಮಣ ಯುವಕರು, ಸಂಧ್ಯಾವಂದನೆ, ಸಾಮಾಜಿಕ ಜವಾಬ್ದಾರಿಗೆ ಸಂಬಂಧಿಸಿದ
                ಕಾರ್ಯಾಗಾರಗಳಾಗಿವೆ.
              </div>
              {jyana && <CarouselWithoutText details={jyana} />}
            </div>

          </div>
        ) : (
          <div>
            <Loading />
          </div>
        )}
      </div>
    </>
  );
}
