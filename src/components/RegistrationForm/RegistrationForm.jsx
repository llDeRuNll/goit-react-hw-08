import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { registrationThunk } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().min(2, "Too Short!").required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(6, "Must be at least 6 characters")
      .required("Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(registrationThunk(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: 400,
            margin: "0 auto",
            padding: "2rem",
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
            Register
          </Typography>

          <Field
            name="name"
            as={TextField}
            label="Name"
            variant="outlined"
            margin="normal"
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
            name="email"
            as={TextField}
            label="Email"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            helperText={<ErrorMessage name="email" />}
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
            name="password"
            as={TextField}
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            helperText={<ErrorMessage name="password" />}
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
              width: "100%",
              padding: "1rem",
              marginTop: "1rem",
            }}
          >
            Register
          </Button>
        </Box>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
