"use client";
import { useEffect, useState } from "react";
import { getSignin, getSignup } from "@/firebase/auth";
import Image from "next/image";
import { HiFingerPrint } from "react-icons/hi2";
import { Snackbar, Alert } from "@mui/material";
import { useRouter } from 'next/navigation';
import ContinueGoogle from "../login/google";

export default function SignUP() {
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const signIn = async () => {
    try {
      await getSignup();
      router.push('/features');
    } catch (error: any) {
      console.error("Login failed:", error);
      setError(error.message || "An unexpected error occurred");
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="mt-10">
      <div className="flex justify-center">
        <div className="">
          <Image
            src="/images/logo.jpg"
            alt="logo"
            className="w-32 h-28 md:w-40 md:h-32 lg:w-48 lg:h-40"
            width={200}
            height={200}
          />
        </div>
        <div className="text-center mt-10 text-4xl md:text-5xl lg:text-7xl font-extralight text-slate-500">
          | <span className="font-medium">Google</span>
        </div>
      </div>

      <div className="flex justify-center mt-10 gap-3">
        <div className="">
        <HiFingerPrint className="text-[40px] md:text-[60px] lg:text-[65px]" />
        </div>
        <div className="font-medium text-slate-500 text-3xl md:text-5xl lg:text-4xl">
          Account Sign-In
        </div>
      </div>
      <div className="flex justify-center items-center mt-20">
        <div className="font-medium text-slate-500 text-lg md:text-xl lg:text-2xl">
          <ul className="list-disc pl-5">
            <li>Only for developers and admin sign-up</li>
            <li>Do comment out this code</li>
            <li>Be careful, as anyone can enter into login</li>
          </ul>
        </div>
      </div>
      <div className="" onClick={signIn}>
        <ContinueGoogle />
      </div>

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {error || "An unexpected error occurred"}
        </Alert>
      </Snackbar>

    </div>
  );
}