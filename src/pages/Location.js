import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import FormContainer from "../components/FormContainer";
import Footer from "../components/Footer";
import AWS from 'aws-sdk';
import awsconfig from "../awsconfig";
import PlaceIcon from '@mui/icons-material/Place';


const Location = () => {

  const [data, setData] = useState('');

  useEffect(() => {
    const s3 = new AWS.S3(awsconfig);
    const params = { 
      Bucket: 'your-s3-bucket-name', 
      Key: 'your-s3-object-key' 
    };

    s3.getObject(params, (err, result) => {
      if (err) {
        console.error('Error fetching data from S3:', err);
      } else {
        setData(result.Body.toString());
      }
    });
  }, []);

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
            <h1>Live location <PlaceIcon style={{'fontSize':'40px','marginTop':'-15px'}}/> </h1>
            <pre>{data}</pre>
          </Typography>
        </Box>
      </FormContainer>
    </><Footer /></>
  );
};

export default Location;
