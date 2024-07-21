import React, { useEffect } from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  CloseButton,
  useDisclosure
} from "@chakra-ui/react";
import Image from "next/image";

function AlertChakra({ title, information}: { title: string, information: string}) {
  const { isOpen: isVisible, onClose } = useDisclosure({ defaultIsOpen: true });

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);
  const handleChange = () => {
    onClose();
  }

  return (
    <>
      <div className="absolute">
        {isVisible && (
          <div className="mt-32 bg-lime-100 p-4 ">
            <div className="flex justify-between ">
              <div className="flex gap-3">
                <div className=""><Image
                  src="/images/right_mark.png"
                  alt=""
                  height={30}
                  width={30}
                /></div>
                <div className=" font-semibold">{title}</div>
              </div>
              <div className="" onClick={handleChange}>
                <Image
                  src="/images/cancel.png"
                  alt=""
                  height={20}
                  width={20}
                />
              </div>
            </div>
            <div className="flex gap-10">
              <div className=""></div>
              <div className="">{information}</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default AlertChakra;
