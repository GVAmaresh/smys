"use client";
import Heading from "@/components/CardTemplate/Font/Heading";
import EditCommitte from "@/components/Features/EditCommitte";
import EditSatpantha from "@/components/Features/EditSatpantha";
import Notification from "@/components/Features/Notification";
import ReloadDrive from "@/components/Features/Reload_Drive";
import Loading from "@/components/Navbar/Loading";
import { getVerified } from "@/firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Features() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const handleSignin = async () => {
    const isVerified = await getVerified();
    if (!isVerified) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSignin();
  }, []);

  if (loading) {
    return (
      <div>
        <Loading loading="/final_loading.gif" />
      </div>
    );
  }

  return (
    <div className="mt-10">
      <Heading text="Features" />
      <div className="ml-14 md:ml-28 lg:ml-52">
        <Notification />
        <ReloadDrive/>
        < EditSatpantha/>
        <EditCommitte/>
      </div>
    </div>
  );
}
