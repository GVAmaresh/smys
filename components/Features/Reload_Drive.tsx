import * as React from "react";
import Button from "@mui/material/Button";
import CachedIcon from "@mui/icons-material/Cached";
import SendIcon from "@mui/icons-material/Send";
import { UpdatePhoto } from "@/firebase/helper";
import { useSnackbar, SnackbarProvider } from "notistack";
import Alerts from "../Alert/Alert";

function MyApp({ data }: { data: ReloadDriveInterface }) {
  const { enqueueSnackbar } = useSnackbar();

  React.useEffect(() => {
    if (data) {
      Object.entries(data).forEach(([key, success]) => {
        enqueueSnackbar(
          `The ${key} ${success ? "updated successfully" : "did not update"}`,
          { variant: success ? "success" : "error" }
        );
      });
    }
  }, [data, enqueueSnackbar]);
  return null;
}

interface ReloadDriveInterface {
  historical: boolean;
  jnana: boolean;
  facility: boolean;
  gallery: boolean;
}

export default function ReloadDrive() {
  const [data, setData] = React.useState<ReloadDriveInterface | null>(null);
  const [alertOpen, setAlertOpen] = React.useState<boolean>(false);
  const handleUpdate = async () => {
    try {

      setAlertOpen(true);
      setTimeout(() => {
        setAlertOpen(false);
      }, 5000);

      const result = await UpdatePhoto();
      console.log(result.update);
      if (result && result.update) setData(result?.update);
    } catch (error) {
      console.error("Error updating photos:", error);
    }
  };

  return (
    <div className="mt-10">
      <div className="flex gap-5 md:gap-10">
        <div className="font-bold text-base md:text-2xl flex gap-1 md:gap-4">
          <CachedIcon />
          <div>Reload Drive Photos</div>
        </div>
      </div>
      <div className="mt-4">
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={handleUpdate}
        >
          Update
        </Button>
      </div>
      {data && (
        <SnackbarProvider maxSnack={4}>
          <MyApp data={data} />
        </SnackbarProvider>
      )}
      <div className="">
        {alertOpen && (
          <Alerts
            vertical="top"
            horizontal="center"
            severity="success"
            title="Photos"
            information="The Photos details have been successfully updating."
          />
        )}
      </div>
    </div>
  );
}
