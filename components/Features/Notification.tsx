import { getNotification, updateNotification } from "@/firebase/helper";
import { Button, Switch, TextField } from "@mui/material";
import React from "react";
import { LuSubtitles } from "react-icons/lu";
import SendIcon from "@mui/icons-material/Send";
import Alerts from "../Alert/Alert";

export default function Notification() {
  const [state, setState] = React.useState<boolean>(false);
  const [title, setTitle] = React.useState<string>("Fill the space");
  const [information, setInformation] = React.useState<string>("Fill the space");
  const [alertOpen, setAlertOpen] = React.useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.checked);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleInformationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInformation(event.target.value);
  };

  React.useEffect(() => {
    getNotification().then((data) => {
      setTitle(data.title);
      setInformation(data.information);
      setState(data.state);
    });
  }, []);

  const handleUpdate = () => {
    updateNotification({ state, title, information });
    setAlertOpen(true);
    setTimeout(() => {
      setAlertOpen(false);
    }, 5000);
  };

  const handleCloseAlert = () => {
    setAlertOpen(false);
  };

  return (
    <>
      <div className="mt-6">
        <div className="flex gap-5 md:gap-10">
          <div className="font-bold text-base md:text-2xl flex gap-1 md:gap-4">
            <div className="mt-1">
              <LuSubtitles />
            </div>
            <div className="">Notification</div>
          </div>

          <div className="">
            <Switch checked={state} onChange={handleChange} name="antoine" />
          </div>
        </div>
        <div className="">
          <div className="mt-3 w-1/3">
            <TextField
              required
              id="filled-required"
              fullWidth
              disabled={!state}
              label="Title"
              value={title}
              onChange={handleTitleChange}
              variant="filled"
            />
          </div>
          <div className="w-1/3 mt-3">
            <TextField
              required
              fullWidth
              disabled={!state}
              id="filled-required"
              label="Information"
              multiline
              value={information}
              onChange={handleInformationChange}
              variant="filled"
            />
          </div>
        </div>
        <div className="mt-4" onClick={handleUpdate}>
          <Button variant="contained" endIcon={<SendIcon />}>
            Update
          </Button>
        </div>
      </div>
      {alertOpen && (
        <Alerts
          vertical="top"
          horizontal="center"
          severity="success"
          title="Notification Updated"
          information="The notification details have been successfully updated."
        />
      )}
    </>
  );
}
