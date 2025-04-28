import { IoMdPerson } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteContactThunk } from "../../redux/contacts/operations";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        maxWidth: 400,
        margin: "1rem auto",
        padding: "1rem",
        backgroundColor: "#fff",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
      }}
    >
      <CardContent>
        <Box
          sx={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
        >
          <IoMdPerson style={{ marginRight: "10px", fontSize: "1.5rem" }} />
          <Typography variant="h6">{name}</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <MdLocalPhone style={{ marginRight: "10px", fontSize: "1.5rem" }} />
          <a
            href={`tel:${number}`}
            style={{ textDecoration: "none", color: "#000" }}
          >
            <Typography variant="body1">{number}</Typography>
          </a>
        </Box>
      </CardContent>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          paddingBottom: "1rem",
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          onClick={() => dispatch(deleteContactThunk(id))}
          sx={{
            padding: "0.5rem 1.5rem",
            fontSize: "1rem",
            backgroundColor: "#ff6b6b",
            "&:hover": {
              backgroundColor: "#ff4d4d",
            },
          }}
        >
          Delete
        </Button>
      </Box>
    </Card>
  );
};

export default Contact;
