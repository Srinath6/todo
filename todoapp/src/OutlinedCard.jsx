import * as React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  Stack,
  Divider,
} from "@mui/material/";
import { createContext, useState } from "react";

import { AiOutlineCheck, AiFillDelete } from "react-icons/ai";
import AlertDialog from "./dismissCard";
import DeleteAlertDialog from "./deleteConfirmation";

export const dialogStatus = createContext();
export const deleteDialogStatus = createContext();

export default function OutlinedCard(props) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };


  const [deleteDialog, setDeleteDialog] = useState(false);
  const deleteDialogOpen = () => {
    setDeleteDialog(true);
  }

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card
        variant="contained"
        sx={{
          backgroundColor: "#27496D",
          borderRadius: "10px",
          marginTop: "10px",
        }}
      >
        <CardContent>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography sx={{ color: "white", width: "400px" }}>
              {" "}
              {props.cardInfo}
            </Typography>

            
            <IconButton onClick={handleClickOpen}>
              <AiOutlineCheck style={{ color: "#00A8CC" }}></AiOutlineCheck>
            </IconButton>
            <dialogStatus.Provider value={{open, setOpen}}>
            <AlertDialog/>
            </dialogStatus.Provider>

            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{ background: "#0C7B93" }}
            />
            <IconButton onClick={deleteDialogOpen}>
              <AiFillDelete style={{ color: "#c70000" }}></AiFillDelete>
            </IconButton>
            <deleteDialogStatus.Provider value={{deleteDialog, setDeleteDialog}} >
                <DeleteAlertDialog/>
            </deleteDialogStatus.Provider>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
