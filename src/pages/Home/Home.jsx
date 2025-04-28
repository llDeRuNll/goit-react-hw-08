import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  const handleGoToContacts = () => {
    navigate("/contacts");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f4f7fc",
        padding: "2rem",
      }}
    >
      <Typography
        variant="h3"
        sx={{ marginBottom: "2rem", textAlign: "center" }}
      >
        Welcome to Your PhoneBook App
      </Typography>
      <Typography
        variant="h6"
        sx={{ marginBottom: "3rem", textAlign: "center" }}
      >
        Manage your contacts easily and efficiently.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleGoToContacts}
        sx={{
          padding: "1rem 2rem",
          fontSize: "1.2rem",
          backgroundColor: "#5e9bff",
          "&:hover": {
            backgroundColor: "#4187d3",
          },
        }}
      >
        Go to Contacts
      </Button>
    </Box>
  );
};

export default Home;
