import { DotLoader } from "react-spinners";
import { Box } from "@mui/material";

const Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
      }}
    >
      <DotLoader size={50} color={"#3f51b5"} />
    </Box>
  );
};

export default Loader;
