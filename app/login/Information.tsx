import Heading from "@/components/CardTemplate/Font/Heading";
import { TextField } from "@mui/material";

interface IntroProps {
  handleChange: (name: string, value: string) => void;
  Intro: {
    Brahmin: {
      description: string;
    };
    Madhwa: {
      description: string;
    };
    hostel: string;
  };
}
export const Intro = ({ handleChange, Intro }: IntroProps) => {
  return (
    <>
      <div className="mt-12">
        <Heading text={"Intro"} />
        <div className="ml-28 mt-5 md:ml-48 p-2 ">
          <TextField
            id="outlined-multiline-static"
            label="Brahmin's Sentence"
            multiline
            className="w-fit md:w-1/3 xs:w-12 sm:w-9 mt-4"
            rows={4}
            style={{
              paddingRight: "1px",
            }}
            placeholder={
              Intro.Brahmin.description || "no information available"
            }
          />
        </div>
        <div className="ml-28 mt-5 md:ml-48 p-2">
          <TextField
            id="outlined-multiline-static"
            label="Madhwacharya's Sentence"
            multiline
            className="w-fit md:w-1/3 xs:w-12 sm:w-9 mt-4"
            rows={4}
            style={{
              paddingRight: "1px",
            }}
            placeholder={Intro.Madhwa.description || "no information available"}
          />
        </div>
        <div className="ml-28 mt-5 md:ml-48">
          <TextField
            id="outlined-textarea"
            label="Hostel Photo"
            className="w-fit md:w-1/3 xs:w-9 sm:w-9"
            placeholder={Intro.hostel || "no information available"}
            style={{
              paddingRight: "1px",
              // paddingBottom: "10px",
            }}
          />
        </div>
      </div>
    </>
  );
};

interface AddressProps {
  handleChange: (name: string, value: string) => void;
  Address: {
    add: string;
    email: string[];
    phno: string[];
    social: string[];
  };
}
export const ChangeAddress = ({ handleChange, Address }: AddressProps) => {
  return (
    <>
      <div className="mt-12">
        <Heading text={"Address"} />
        <div className="ml-28 mt-4 md:ml-48">
          <TextField
            id="outlined-multiline-static"
            label="Address"
            multiline
            className="w-fit md:w-1/3 xs:w-9 sm:w-9"
            rows={4}
            style={{
              paddingRight: "1px",
              paddingBottom: "20px",
            }}
            placeholder={Address.add || "no information available"}
          />

          <div className="">
            <TextField
              id="outlined-textarea"
              label="Email"
              placeholder={Address.email[0]}
              className="w-fit md:w-1/6 xs:w-9 sm:w-9"
              style={{
                paddingRight: "10px",
                paddingBottom: "2px",
              }}
            />
            {Address?.email[1] && (
              <TextField
                id="outlined-textarea"
                label="Email"
                className="w-fit md:w-1/6 xs:w-9 sm:w-9"
                placeholder={Address.email[1] || "no information available"}
                style={{
                  paddingRight: "1px",
                  paddingBottom: "20px",
                }}
              />
            )}
          </div>

          <div className="">
            <TextField
              id="outlined-textarea"
              label="Phone Number"
              placeholder={Address.phno[0] || "no information available"}
              className="w-fit md:w-1/6 xs:w-9 sm:w-9"
              style={{
                paddingRight: "10px",
                paddingBottom: "2px",
              }}
            />
            {Address.phno[1] && (
              <TextField
                id="outlined-textarea"
                label="Phone Number"
                className="w-fit md:w-1/6 xs:w-9 sm:w-9"
                placeholder={Address.phno[1] || "no information available"}
                style={{
                  paddingRight: "1px",
                  paddingBottom: "20px",
                }}
              />
            )}
          </div>

          <div className="">
            <TextField
              id="outlined-textarea"
              label="Insta - id"
              placeholder="https://instagram.com"
              className="w-fit md:w-1/6 xs:w-9 sm:w-9"
              style={{
                paddingRight: "10px",
                paddingBottom: "2px",
              }}
            />

            <TextField
              id="outlined-textarea"
              label="Facebook - id"
              className="w-fit md:w-1/6 xs:w-9 sm:w-9"
              placeholder="https://faccebook.com"
              style={{
                paddingRight: "1px",
                paddingBottom: "20px",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

interface JourneyProps {
  handleChange: (name: string, value: any) => void;
  Journey: {
    photo: string;
    description: string;
  };
}
export const Journey = ({ handleChange, Journey }: JourneyProps) => {
  return (
    <>
      <Heading text={"Journey"} />
      <div className="ml-28 mt-4 md:ml-48 p-2">
        <div className="">
          <TextField
            id="outlined-textarea"
            label="Journey Photo"
            className="w-fit md:w-1/3 xs:w-9 sm:w-9"
            placeholder={Journey.photo}
          />
        </div>{" "}
        <div className="mt-4">
          <TextField
            id="outlined-multiline-static"
            label="Journey Description"
            multiline
            className="w-fit md:w-1/3 xs:w-12 sm:w-9 mt-4"
            rows={4}
            style={{
              paddingRight: "1px",
            }}
            placeholder={Journey.description || "no information available"}
          />
        </div>
      </div>
    </>
  );
};
