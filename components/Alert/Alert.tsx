import * as React from "react";
import { Alert, AlertTitle, Snackbar } from "@mui/material";
import { AiFillAccountBook } from "react-icons/ai";

export default function Alerts({
  vertical = "bottom",
  horizontal = "left",
  severity = "success",
  title = "title",
  information = "information",
  onClose,
}: {
  vertical?: "top" | "bottom";
  horizontal?: "left" | "center" | "right";
  severity?: "success" | "info" | "warning" | "error";
  title?: string;
  information?: string;
  onClose?: () => void;
}) {
  const [open, setOpen] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
      if (onClose) {
        onClose();
      }
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      onClose={() => {
        setOpen(false);
        if (onClose) {
          onClose();
        }
      }}
    >
      <Alert
        severity={severity}
        onClose={() => {
          setOpen(false);
          if (onClose) {
            onClose();
          }
        }}
      >
        <AlertTitle>{title}</AlertTitle>
        {information}
      </Alert>
    </Snackbar>
  );
}
