import { Stack, Container, Box } from "@mui/material";
import Header from "./header";
import OutlinedCard from "./JobCard";


export default function App() {
  return (
    <>
      <Container maxWidth="sm">
        <Box
          sx={{
            backgroundColor: "#142850",
            justifyContent: "center",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
          <Header />
          <OutlinedCard/>
        </Box>
      </Container>
    </>
  );
}
