"use client";
import { FetchDetails } from "@/lib/FetchDetails/Fetch";
import EventCard from "./EventCard";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path/posix";
import { useEffect, useState } from "react";
import Data from "@/lib/types/Data";
import { ImageConvert } from "@/lib/smys_details/Image_Conversion";
import ImageSliding from "./ImageSliding";
export default function Event({
  page,
  name,
  image,
  description,
}: {
  page: string;
  name: string;
  image: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center mb-10">
      <EventCard
        name={name}
        image={ImageConvert(image)}
        description={description}
      />
      
    </div>
  );
}
