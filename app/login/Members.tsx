import Heading from "@/components/CardTemplate/Font/Heading";
import { TextField } from "@mui/material";
import React from "react";
import { IoIosAddCircle } from "react-icons/io";

interface CommitteMemberProps {
  index: number;
  Committe: CommitteMember[];
}

const CommitteMember = ({ index, Committe }: CommitteMemberProps) => {
  const name = Committe[index] ? Committe[index].name : "";

  return (
    <>
      <TextField
        id="outlined-textarea"
        label={Committe[index].position}
        className="w-fit md:w-1/6 xs:w-9 sm:w-9"
        InputLabelProps={{
          shrink: true,
        }}
        placeholder={name}
      />
    </>
  );
};

interface CommitteMember {
  age: string;
  description: string;
  email: string;
  gender: string;
  name: string;
  phone: string;
  photo: string;
  position: string;
}

interface CommitteProps {
  handleChange: (name: string, value: any) => void;
  Committe: CommitteMember[];
}

export const Committe = ({ handleChange, Committe }: CommitteProps) => {
  console.log(Committe);
  return (
    <>
      <Heading text={"Committe"} />
      <div className="ml-28 mt-4 md:ml-48">
        {Array(Math.ceil(Committe.length / 2))
          .fill(null)
          .map((_, i) => {
            const firstIndex = i * 2;
            const secondIndex = i * 2 + 1;
            return (
              <div key={i} className="flex p-2">
                <CommitteMember index={firstIndex} Committe={Committe} />
                {secondIndex < Committe.length && <div className="w-4" />}
                {secondIndex < Committe.length && (
                  <CommitteMember index={secondIndex} Committe={Committe} />
                )}
              </div>
            );
          })}
        <div className=""></div>
      </div>
    </>
  );
};

interface FoundersMember {
  age: string;
  description: string;
  email: string;
  gender: string;
  name: string;
  phone: string;
  photo: string;
  position: string;
}

interface FoundersProps {
  handleChange: (name: string, value: any) => void;
  Founders: FoundersMember[];
}

interface FoundersMemberProps {
  index: number;
  Founders: FoundersMember[];
}

const FoundersMember = ({ index, Founders }: FoundersMemberProps) => {
  const name = Founders[index] ? Founders[index].name : "";
  return (
    <>
      <TextField
        id="outlined-disabled"
        label={Founders[index].position}
        className="w-fit md:w-1/6 xs:w-9 sm:w-9"
        InputLabelProps={{
          shrink: true,
        }}
        placeholder={name}
      />
    </>
  );
};

export const Founders = ({ handleChange, Founders }: FoundersProps) => {
  return (
    <>
      <Heading text={"Founders"} />
      <div className="ml-28 mt-4 md:ml-48">
        {Array(Math.ceil(Founders.length / 2))
          .fill(null)
          .map((_, i) => {
            const firstIndex = i * 2;
            const secondIndex = i * 2 + 1;
            return (
              <div key={i} className="flex p-2">
                <FoundersMember index={firstIndex} Founders={Founders} />
                {secondIndex < Founders.length && <div className="w-4" />}
                {secondIndex < Founders.length && (
                  <FoundersMember index={secondIndex} Founders={Founders} />
                )}
              </div>
            );
          })}
      </div>
    </>
  );
};

interface SatpanthaProps {
  handleChange?: (name: string, value: any) => void;
  newName?: boolean;
  index?: number;
  Satpantha: SatpanthaMember[];
}

const SatpanthaMember = ({
  newName = false,
  index = -1,
  Satpantha,
}: SatpanthaProps) => {
  const name = Satpantha[index] ? Satpantha[index].name : "";
  return (
    <>
      <TextField
        id="outlined-disabled"
        label="Name"
        className="w-fit md:w-1/6 xs:w-9 sm:w-9"
        InputLabelProps={{
          shrink: true,
        }}
        placeholder={newName ? "New Name" : name}
      />
    </>
  );
};

interface SatpanthaMember {
  name: string;
  description: string;
  email: string;
  phone: string;
  position: string;
  study: string;
}

export const Satpantha = ({ handleChange, Satpantha }: SatpanthaProps) => {
  const [onClick, setOnClick] = React.useState(false);

  return (
    <>
      <Heading text={"Satpantha"} />
      <div className="ml-28 mt-4 md:ml-48">
        {Array(Math.ceil(Satpantha.length / 2))
          .fill(null)
          .map((_, i) => {
            const firstIndex = i * 2;
            const secondIndex = i * 2 + 1;
            return (
              <div key={i} className="flex p-2">
                <SatpanthaMember index={firstIndex} Satpantha={Satpantha} />
                <div className="w-4" />
                {secondIndex < Satpantha.length && (
                  <SatpanthaMember index={secondIndex} Satpantha={Satpantha} />
                )}
              </div>
            );
          })}
        {Math.ceil(Satpantha.length / 2) % 2 === 0 && (
          <div className="flex p-2">
            {onClick ? (
              <SatpanthaMember newName={true} Satpantha={Satpantha} />
            ) : (
              <div
                className="w-fit md:w-1/6 xs:w-9 sm:w-9 border-2 border-zinc-700 flex items-center justify-center p-2 rounded"
                onClick={() => setOnClick(!onClick)}
              >
                <IoIosAddCircle size={30} />
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};
