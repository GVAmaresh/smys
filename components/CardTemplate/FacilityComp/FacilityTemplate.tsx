"use client";
import { getEventPageEnglish, GetFacilityPhoto } from "@/firebase/helper";
import { GetImages } from "@/lib/FetchDetails/Fetch";
import Data from "@/lib/types/Data";
import { useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";
import Heading from "../Font/Heading";
import Loading from "@/components/Navbar/Loading";
import { Grid } from "@mui/material";
import FounderMember from "@/components/CardTemplate/Founder/FounderMember";
import CommitteMember from "../Committe/CommitteMember";
import NewCarousel from "@/components/NewCarousel/NewCarouselSlide";

interface ImageArrayprops {
  photo: string[];
}

export default function FacilityTemplate() {
  const [data, setData] = useState<Data | null>(null);
  const [historical, setHistorical] = useState<ImageArrayprops>();
  useEffect(() => {
    getEventPageEnglish()
      .then(async (data: any) => {
        setData(data);
        // const datas = await GetImages(group1);
        const datas = await GetFacilityPhoto();
        setHistorical({ photo: datas?.Facility });
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }, []);
  return (
    <>
      <div className="">
        {data?.Events ? (
          <>
            <div className="mt-1">
              {/* <Navbar options={["Home", "About", "Gallery"]} /> */}
              {/* <div className="mt-12"></div> */}
              <Heading text="Facility" />
              <div className="mt-2 md:mt-8 mb-8">

                {historical && (
                  <NewCarousel images={historical.photo} />
                )}
              </div>

              <div
                className="mt-10 md:mt-10 md:mb-10 p-1 lg:p-10 mb-10 border-2 m-10 lg:m-32"
                style={{
                  borderBottomRightRadius: "50px",
                  borderTopLeftRadius: "50px",
                }}
              >
                <div className=" font-extrabold text-2xl pt-6 pl-6 ">
                  Facility Offered:
                </div>
                <Grid
                  sx={{ flexGrow: 1 }}
                  container
                  spacing={2}
                  justifyContent="center"
                  marginTop={5}
                >
                  <Grid item xs={10}>
                    <Grid container justifyContent="center" spacing={4}>
                      {[
                        "Subsidised Boarding",
                        "Free Accomodation",
                        "Furnished Rooms",
                        "Scholarship Assistances",
                        "Sports Club",
                        "Library ",
                        "Guest Seminars",
                        "Security and Maintainance",
                        "Spiritual Environment",
                        "Uninterrupted Power Supply",
                        "Open Auditorium",
                        "Hygienic Kitchen",
                        "CCTV Surveillance",
                        "Purified Drinking Water"

                      ].map((item, index) => (
                        <Grid key={index} item xs={9} sm={6} md={6}>
                          <FounderMember
                            name={item}
                            age={""}
                            // position={""}
                            // gender={""}
                            email={""}
                            phone={""}
                            description={""}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </div>
          </>
        ) : (
          <div>
            <Loading />
          </div>
        )}
      </div>
    </>
  );
}
