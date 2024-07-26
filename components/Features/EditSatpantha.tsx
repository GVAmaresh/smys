import { getSatpantaDetails, updateSatpantaDetails } from "@/firebase/helper";
import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import SendIcon from "@mui/icons-material/Send";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Alerts from "../Alert/Alert";

interface EditSatpantha {
  name?: string;
  position?: string;
}

export default function EditSatpantha() {
  const [details, setDetails] = useState<EditSatpantha[] | null>(null);
  const [alertOpen, setAlertOpen] = useState(false);

  const handleNewUser = () => {
    setDetails((prev) => {
      if (prev) {
        const updateDetails = [...prev];
        updateDetails.push({ name: "", position: "" });
        return updateDetails;
      }
      return prev;
    });
  };
  const handleDeleteUser = (index: number) => {
    setDetails((prev) => {
      if (prev) {
        const updatedDetails = [...prev];
        updatedDetails.splice(index, 1);
        return updatedDetails;
      }
      return prev;
    });
  };
  const handleChange = (
    index: number,
    field: keyof EditSatpantha,
    value: string
  ) => {
    setDetails((prev) => {
      if (prev) {
        const updatedDetails = [...prev];
        updatedDetails[index] = { ...updatedDetails[index], [field]: value };
        return updatedDetails;
      }
      return prev;
    });
  };

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const details = await getSatpantaDetails();
        const dataArr = details.map((e: any) => ({
          name: e.name,
          position: e.position
        }));
        setDetails(dataArr);
      } catch (error) {
        console.error("Error fetching details: ", error);
      }
    };

    fetchDetails();
  }, []);

  useEffect(() => {
    if (details) {
      console.log(details);
    }
  }, [details]);

  const handleUpdate = () => {
    console.log("Updated details: ", details);
    updateSatpantaDetails(details).then((data) => console.log(data));
    setAlertOpen(true);
    setTimeout(() => {
      setAlertOpen(false);
    }, 5000);
  };

  return (
    <>
      <div className="mt-10 mb-20">
        <div className="flex gap-5 md:gap-10">
          <div className="font-bold text-base md:text-2xl flex gap-1 md:gap-4">
            <div className="mt-1">
              <FaPeopleGroup />
            </div>
            <div className="">Satpantha</div>
          </div>
        </div>
        <div className="">
          {details?.map((data, index) => (
            <div key={index} className="flex flex-col md:flex-row mt-4 gap-4 border-b-2 md:border-b-0 pb-2">
              <TextField
                id={`name-${index}`}
                className="w-2/3 md:w-1/4 lg:w-1/6"
                label="Name"
                multiline
                defaultValue={data.name}
                onChange={(e) => handleChange(index, "name", e.target.value)}
              />
              <div className="flex gap-4">
                <TextField
                  id={`position-${index}`}
                  className="w-2/3 md:w-full"
                  label="Position"
                  multiline
                  defaultValue={data.position}
                  onChange={(e) =>
                    handleChange(index, "position", e.target.value)
                  }
                />
                <div className="mt-4" onClick={() => handleDeleteUser(index)}>
                  <DeleteForeverIcon />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <Button
            variant="contained"
            endIcon={<PersonAddAlt1Icon />}
            onClick={handleNewUser}
          >
            Add
          </Button>
        </div>

        <div className="mt-4 mr-6">
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={handleUpdate}
          >
            Update
          </Button>
        </div>
        {alertOpen && (
          <Alerts
            vertical="top"
            horizontal="center"
            severity="success"
            title="Satpantha Updated"
            information="Satpantha Members are updated"
          />
        )}
      </div>
    </>
  );
}
