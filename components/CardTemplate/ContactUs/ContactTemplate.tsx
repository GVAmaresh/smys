import LocationOnIcon from "@mui/icons-material/LocationOn";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallIcon from "@mui/icons-material/Call";

import { FaFacebook } from "react-icons/fa6";
import Link from "next/link";
import { IconButton } from "@mui/material";
import { FaPeopleLine } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";

interface ContactPros {
  add: string;
  email: string[];
  phno: string[];
  social: string[];
}
export default function ContactTemplate({
  add,
  email,
  phno,
  social,
}: ContactPros) {
  return (
    <div className="pl-8 pr-7 mt-8 flex flex-col justify-center sm:flex-col md:flex-col lg:flex-row w-full">
{/* this is first only imformation*/}
      <div className="w-full md:w-full lg:w-1/2 h-160 bg-gray-900 rounded-l-lg">

        <div className="flex md:flex-row mt-10 md:mt-20 flex-col justify-center sm:flex-col w-full">

          <div className="w-full md:w-1/2 h-40 md:h-80">
            <div className="flex justify-center">
              {/* <LocationOnIcon /> */}
            </div>
            <div className="text-center text-gray-500 text-2xl pt-6 font-bold">
              <div>Address</div>
            </div>
            <div className="text-center text-white text-base pl-3 pt-4 p-4">
              <div>{add}</div>
            </div>
          </div>

          <div className="w-full md:w-1/2 h-40 md:h-80">
            <div className="flex justify-center">
              {/* <EmailIcon /> */}
            </div>
            <div className="text-center text-gray-500 text-2xl pt-6 font-bold">
              <div>Email</div>
            </div>
            <div className="text-center text-white text-base p-1 pt-4 ">
              {email.map((e, index) => (
                <div key={index}>
                  <Link href={`mailto:${e}`}>{e}</Link>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row lg:flex-row mt-10 ">
          <div className="w-full md:w-1/2 h-40 lg:h-80">
            <div className="text-center text-gray-500 pt-6 text-2xl font-bold">
              <div>
                {" "}
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <FiPhoneCall />
                </IconButton>
                Phone no
              </div>
            </div>
            <div className="text-center text-white text-sm p-1 pt-4 ">
              {phno.map((number, index) => (
                <div key={index}>
                  <Link href={`tel:${number}`}>{number}</Link>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 h-60  lg:h-80 ">
            <div className="flex justify-center">
            {/* <FaPeopleLine /> */}
            </div>
            <div className="text-center pt-6 text-gray-500 text-2xl font-bold">
              <div>Connect us</div>
            </div>
            <div className="text-center text-white text-sm p-1 pt-4 ">
              <div className="flex flex-row justify-center gap-3">
                <div className="">
                  <Link
                    href={social[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiInstagram size={30} />
                  </Link>
                </div>
                <div className="">
                  <Link
                    href={social[1]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiFacebook size={30} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* this is Second only imformation*/}

      <div className="sm:h-240 md:w-full lg:w-1/3 h-160 md:mt-0 rounded-r-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2668467100134!2d77.5706285751567!3d12.954769087359047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15faaa74dd43%3A0x517b0248e308423b!2sSri%20Madhwa%20Yuvaka%20Sangha!5e0!3m2!1sen!2sin!4v1707397865438!5m2!1sen!2sin"
          width="100%"
          height="750"
          className="rounded-r-lg"
          style={{ border: "0" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
