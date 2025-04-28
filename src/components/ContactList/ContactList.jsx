import { selectFilteredContacts } from "../../redux/filters/selectors";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { Box, Grid, Typography } from "@mui/material";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector((state) => state.contacts.isLoading);
  const isError = useSelector((state) => state.contacts.isError);

  if (isLoading) {
    return (
      <Typography variant="h5" align="center">
        Loading...
      </Typography>
    );
  }

  if (isError) {
    return (
      <Typography variant="h5" align="center">
        Something went wrong. Please try again later.
      </Typography>
    );
  }

  return (
    <Box sx={{ padding: "1rem" }}>
      <Grid container spacing={2}>
        {filteredContacts.map(({ id, number, name }) => (
          <li key={id}>
            <Contact id={id} name={name} number={number} />
          </li>
        ))}
      </Grid>
    </Box>
  );
};

export default ContactList;
