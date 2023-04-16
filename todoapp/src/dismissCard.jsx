import * as React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material/";
import { useContext } from "react";
import { dialogStatus } from "./JobCard";

export default function AlertDialog() {
  const handleClose = () => {
    setOpen(false);
  };
  const { open, setOpen } = useContext(dialogStatus);
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ '& .MuiPaper-root': { borderRadius: '10px' } }}
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{ backgroundColor: "#142850", color: "white" }}
        >
          {"Mark as complete"}
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: "#142850" }}>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ color: "white" }}
          >
            Are you sure you want to mark this task as completed? This action is
            not reversible.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "#142850" }}>
          <Button
            onClick={handleClose}
            variant="outlined"
            sx={{
              color: "#00A8CC",
              borderRadius: "10px",
              borderColor: "#00A8CC",
            }}
          >
            Close
          </Button>
          <Button
            onClick={handleClose}
            variant="contained"
            sx={{ background: "#00A8CC", borderRadius: "10px" }}
            autoFocus
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
