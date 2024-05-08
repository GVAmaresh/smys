"use client";
import { getEventPageEnglish } from "@/firebase/helper";
import { GetImages } from "@/lib/FetchDetails/Fetch";
import Data from "@/lib/types/Data";
import { useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";
import Heading from "../Font/Heading";
import CarouselWithoutText from "../CarouselWithoutText/CarouselWithoutText";
import Loading from "@/components/Navbar/Loading";
import { Grid } from "@mui/material";
import FounderMember from "@/components/CardTemplate/Founder/FounderMember";
import CommitteMember from "../Committe/CommitteMember";

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
        const group1 = data?.Events.Annual;
        console.log("Group1 = ", group1);
        if (group1) {
          const datas = await GetImages(group1);
          setHistorical({ photo: datas });
        }
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
            <div className="mt-36">
              {/* <Navbar options={["Home", "About", "Gallery"]} /> */}
              <div className="mt-16"></div>
              <Heading text="Facility" />
              <div className="mt-8 mb-8">
                {historical && (
                  <CarouselWithoutText imageList={historical.photo} />
                )}
              </div>
              <div
                className="m-10 md:m-64 md:mt-10 md:mb-10 p-10 mt-10 mb-10 border-2"
                style={{
                  borderBottomRightRadius: "50px",
                  borderTopLeftRadius: "50px",
                }}
              >
                <Grid
                  sx={{ flexGrow: 1 }}
                  container
                  spacing={2}
                  justifyContent="center"
                  marginTop={5}
                >
                  <Grid item xs={10}>
                    <Grid container justifyContent="center" spacing={4}>
                      {/* {founders &&
                  Object.values(founders).map((founder, index) => (
                    <Grid key={index} item xs={6} sm={6}>
                      <FounderMember
                        name={founder.name}
                        age={""}
                        position={""}
                        gender={founder.gender}
                        email={founder.email}
                        phone={founder.phone}
                        description={founder.description}
                      />
                    </Grid>
                  ))} */}
                      {[
                        "Subsidised Boarding",
                        "Furnished Rooms",
                        "Scholarship Assistances",
                        "Sports Club",
                        "Library ",
                        "Frequent Seminars",
                        "Security and Maintainance",
                        "Cultural Environment"
                      ].map((item, index) => (
                        <Grid key={index} item xs={6} sm={6}>
                          {/* <CommitteMember
                            name={item}
                            age={""}
                            position={""}
                            gender={""}
                            email={""}
                            phone={""}
                            description={""}
                          /> */}
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
