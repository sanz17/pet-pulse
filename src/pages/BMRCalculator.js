import React from "react";
import { Box, Typography } from "@mui/material";
import FormContainer from "../components/FormContainer";
import Footer from "../components/Footer";

const BMRCalculator = () => {
  return (
    <><>
      <FormContainer>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "60vh",
          }}
        >
          <Typography variant="h4" sx={{ marginBottom: "1rem" }}>
            BMR Calculator
          </Typography>
        </Box>
      </FormContainer>
    </><Footer /></>
  );
};

export default BMRCalculator;
