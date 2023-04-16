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

import { AiOutlineCheck, AiFillDelete } from "react-icons/ai";

const card = (
  <React.Fragment>
    <CardContent>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography sx={{ color: "white", width: "400px" }}>
          {" "}
          some description about the task at hand, I don't know what to do with this data
        </Typography>
        <IconButton>
          <AiOutlineCheck style={{ color: "#00A8CC" }}></AiOutlineCheck>
        </IconButton>
        <Divider orientation="vertical" variant="middle" flexItem sx={{background: "#0C7B93"}}/>
        <IconButton>
          <AiFillDelete style={{ color: "#c70000" }}></AiFillDelete>
        </IconButton>
      </Stack>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard() {
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
        {card}
      </Card>
    </Box>
  );
}
