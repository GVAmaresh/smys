"use client";
import { Suspense } from "react";
import Event from "@/components/CardTemplate/Event/Event";
import Heading from "@/components/CardTemplate/Font/Heading";
import Navbar from "@/components/Navbar/Navbar";
import { FetchDetails } from "@/lib/FetchDetails/Fetch";
import Data from "@/lib/types/Data";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "@/components/Navbar/Loading";

export default function NewEvent() {
  return (
    <Suspense fallback={<div><Loading/></div>}>
      <NewEventContent />
    </Suspense>
  );
}

function NewEventContent() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "";
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await FetchDetails();
        setData(responseData.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  if (!["Historical", "Facility", "Jyana"].includes(title)) {
    return (
      <>
        <div>Page intentionally not found</div>
      </>
    );
  }

  return (
    <>
      {/* {data?.Events ? (
        <>
          <Navbar options={["Home", "About", "Event", "Gallery"]} />
          <div className="mt-44">
            <Heading text={title} />
            {Object.keys(data.Events.Annual).map((date) => {
              const event = data.Events.Annual[date];
              return (
                <Event
                  key={date}
                  page="annual"
                  name={event.title}
                  image={event.photo}
                  description={event.description}
                />
              );
            })}
          </div>
        </>
      ) : (
        <div>loading</div>
      )} */}
    </>
  );
}
