import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { addContactThunk } from "../../redux/contacts/operations";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Format must be 111-11-11")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContactThunk(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: 400,
            margin: "0 auto",
            padding: "2rem",
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography
            variant="h6"
            sx={{ textAlign: "center", marginBottom: 2 }}
          >
            Add a New Contact
          </Typography>

          <Field
            name="name"
            as={TextField}
            label="Name"
            variant="outlined"
            fullWidth
            required
            helperText={<ErrorMessage name="name" />}
            error={false}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderColor: "#ccc",
              },
              "& .MuiFormHelperText-root": {
                color: "#e74c3c",
              },
            }}
          />

          <Field
            name="number"
            as={TextField}
            label="Phone Number"
            variant="outlined"
            fullWidth
            required
            helperText={<ErrorMessage name="number" />}
            error={false}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderColor: "#ccc",
              },
              "& .MuiFormHelperText-root": {
                color: "#e74c3c",
              },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#5e9bff",
              "&:hover": {
                backgroundColor: "#4187d3",
              },
              padding: "1rem",
              marginTop: 2,
            }}
          >
            Add Contact
          </Button>
        </Box>
      </Form>
    </Formik>
  );
};

export default ContactForm;
