"use client";
import Navbar from "@/components/Navbar/Navbar";
import Event from "@/components/CardTemplate/Event/Event";
import Heading from "@/components/CardTemplate/Font/Heading";
import { useEffect, useState } from "react";
import Data from "@/lib/types/Data";
import { FetchDetails, GetImages } from "@/lib/FetchDetails/Fetch";
import Link from "next/link";
import {
  getEventPageEnglish,
  GetHistoricalPhoto,
  GetFacilityPhoto,
  GetJnanaPhoto,
} from "@/firebase/helper";
import ImageSliding from "@/components/CardTemplate/Event/ImageSliding";
import Loading from "@/components/Navbar/Loading";
import FacilityTemplate from "@/components/CardTemplate/FacilityComp/FacilityTemplate";
import ProgramTemplate from "@/components/CardTemplate/FacilityComp/ProgramTemplate";
import NewCarousel from "@/components/NewCarousel/NewCarouselSlide";

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
  const [facility, setFacility] = useState<ImageArrayprops>();

  const [jyana, setJyana] = useState<ImageArrayprops>();

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

          // const datas = await GetImages(group1);
          const datas1 = await GetHistoricalPhoto();
          setHistorical({ photo: datas1?.Historical });

          // const datas = await GetImages(group2);
          const datas2 = await GetFacilityPhoto();
          setFacility({ photo: datas2?.Facility });

          const datas3 = await GetJnanaPhoto();
          setJyana({ photo: datas3?.Jnana });
        
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
          <div className="mt-10 md:mt-36 md:mr-44">
            <Navbar options={["Home", "About", "Gallery"]} />
            {/* <div className="mt-16"></div> */}
            <Heading text="Historical Events" />
            <div className="mt-2 md:mt-8 mb-2 sm:mb-1 md:mb-1">
              {historical&&<NewCarousel images={historical?.photo}/>}
            </div>

            <Heading text="Jnanabharathi" />
            <div className="mt-2 mb-8 md:mb-1">
              <div
                className="m-10 mb-1 md:m-6 md:ml-60 md:mr-40 md:mt-10 md:mb-10 p-10 mt-10 border-2"
                style={{
                  borderBottomRightRadius: "50px",
                  borderTopLeftRadius: "50px",
                  textAlign: "justify",
                }}
              >
                ಶ್ರೀ ಮಾಧ್ವ ಯುವಕ ಸಂಘವು
                <span className=" font-extrabold"> ಜ್ಞಾನ ಭಾರತೀ</span> ಎಂಬ
                ಕಾರ್ಯಕ್ರಮದಲ್ಲಿ ವಿಚಾರ ಸಂಕಿರಣವನ್ನು ತನ್ನ ಅಮೃತ ಮಹೋತ್ಸವದ ಶುಭ
                ಸಂದರ್ಭದಲ್ಲಿ ಆರಂಭವಾಯಿತು. ಹಲವಾರು ಪಠ್ಯೇತರ ಮತ್ತು ಸಾಮಾಜಿಕ
                ವಿಷಯಗಳು ಅರಿವು ಹಾಗೂ ಆಸಕ್ತಿ ಮೂಡಿಸುವ ಜ್ಞಾನ ಸತ್ರದ ಒಂದು ಪ್ರಯೋಗ.
                ಜ್ಞಾನಭಾರತಿ ವಿಷಯಗಳು ಸಾಮಾನ್ಯವಾಗಿ ಸನಾತನ ಧರ್ಮ, ಸಾತ್ವಿಕ ಆಹಾರ,
                ಬ್ರಾಹ್ಮಣ ಯುವಕರು, ಸಂಧ್ಯಾವಂದನೆ, ಸಾಮಾಜಿಕ ಜವಾಬ್ದಾರಿಗೆ ಸಂಬಂಧಿಸಿದ
                ಕಾರ್ಯಾಗಾರಗಳಾಗಿವೆ.
              </div>
              <div className="mb-20">
              {jyana&&<NewCarousel images={jyana?.photo}/>}
              </div>
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
