import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import FormContainer from "../components/FormContainer";
import Footer from "../components/Footer";
import AWS from 'aws-sdk';
import awsconfig from "../awsconfig";
import PlaceIcon from '@mui/icons-material/Place';
import GoogleMap from 'google-map-react';

const Location = () => {

  const [data, setData] = useState('');
  const latitude = 37.775;
  const longitude = -122.419;

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
            <h1>Live location <PlaceIcon style={{ 'fontSize': '40px', 'marginTop': '-12px' }} /> </h1>
            <GoogleMap
              googleMapApiKey={process.env.mapsApiKey}
              center={[latitude, longitude]}
              zoom={15}
            >
              {/* <Marker
                position={[latitude, longitude]}
              /> */}
            </GoogleMap>
            <pre>{data}</pre>
          </Typography>
        </Box>
      </FormContainer>
    </><Footer /></>
  );
};

export default Location;
