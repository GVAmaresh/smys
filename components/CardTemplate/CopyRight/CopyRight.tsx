import Alerts from "@/components/Alert/Alert";
import Link from "next/link";

export default function CopyRight() {
  return (
    <div className="bg-slate-900 text-white p-4 text-center flex flex-col md:flex-row justify-evenly">
      <div className="mb-10">
        <div className="">Copyright &#169; 2024 All Rights Reserverd by</div>{" "}
        <Link href="https://www.google.com/maps?sca_esv=288495b509fb3774&sca_upv=1&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiLXNyaSBtYWRodmEgeXV2YWEgc2FuZ2hhIGJveXMgaG9zdGVsIGJlbmdhbHVydUilWlCtAViIWHABeACQAQCYAYUDoAHvH6oBCDAuMTkuMy4yuAEDyAEA-AEBmAINoAKkEMICCBAAGIAEGKIEwgIHECEYoAEYCsICBBAhGBWYAwCIBgGSBwYwLjExLjKgB-hW&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KUPddKr6Fa47MTtCCONIAntR&daddr=88/1,+Krishna+Rajendra+Rd,+Chikkanna+Garden,+Shankarapura,+Bengaluru,+Karnataka+560004">
          Sri Madhwa Yuvaka Sangha Boys Hostel Bengaluru
        </Link>
      </div>
      <div className="flex flex-row justify-evenly ">
        <div className="mr-10">
          <div className="">Developed By:</div>
          <Link href="https://www.linkedin.com/in/g-v-amaresh-b30238232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            G V Amaresh
          </Link>
        </div>
        <div className="ml-10">
          <div className="">Content & Design By:</div>
          <Link href="https://www.linkedin.com/in/gurudatta-bs/">
            Gurudatta B S
          </Link>
        </div>
      </div>
    </div>
  );
}
