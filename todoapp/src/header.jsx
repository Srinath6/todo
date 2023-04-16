import { Button, Stack, TextField, Typography } from "@mui/material";

export default function Header() {
  return (
    <>
      <Stack>
        <Typography
          sx={{
            color: "white",
            fontFamily: "Montserrat",
            fontWeight: "bold",
            fontSize: "24px",
          }}
        >
          Todo List
        </Typography>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ paddingTop: "20px" }}
      >
        <TextField
          variant="outlined"
          multiline
          inputProps={{ maxLength: 350 }}
          placeholder="Add item description"
          fullWidth
          sx={{
            paddingRight: "10px",
            "& .MuiOutlinedInput-root": {
              border: "1px solid #0C7B93",
              borderRadius: "10px",
            },
            "& .MuiInputBase-input:focus": {
              borderColor: "1px solid #00A8CC",
            },
            "& .MuiInputBase-input::placeholder": {
              color: "#0C7B93",
            },
            "& .MuiInputBase-input": {
              color: "white",
            },
          }}
        />
        <Button
          variant="contained"
          size=""
          sx={{ background: "#00A8CC", borderRadius: "10px" }}
        >
          {" "}
          Add
        </Button>
      </Stack>
      <Stack>
        <Typography sx={{ paddingTop: "10px", color: "white" }}>
          Your tasks:
        </Typography>
      </Stack>
    </>
  );
}
