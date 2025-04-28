import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/contacts/selectors";
import { changeFilter } from "../../redux/filters/slice";
import { TextField, Box, Typography } from "@mui/material";

const SearchBox = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 400,
        margin: "1rem auto",
        padding: "1.5rem",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
        Find contacts by name
      </Typography>
      <TextField
        variant="outlined"
        fullWidth
        value={value}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderColor: "#ccc",
          },
        }}
      />
    </Box>
  );
};

export default SearchBox;
