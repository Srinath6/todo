import { Container, Box, List, ListItem, ListItemText } from "@mui/material";
import Header from "./header";
import OutlinedCard from "./OutlinedCard";

export const cardsArray = [
  "some information inside the card",
  "info inside the second card",
];

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
          {cardsArray.map(function (item) {
            return <OutlinedCard cardInfo={item} />;
          })}
        </Box>
      </Container>
    </>
  );
}
