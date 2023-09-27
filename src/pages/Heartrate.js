import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import FormContainer from "../components/FormContainer";
import Footer from "../components/Footer";
import AWS from 'aws-sdk';
import awsconfig from "../awsconfig";
import Table from 'react-bootstrap/Table';
import ThermostatAutoIcon from '@mui/icons-material/ThermostatAuto';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeartTwoTone';

const Heartrate = () => {

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
          <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
            <h1>Vitalities from AWS S3:</h1>
            <Table striped bordered hover style={{'borderRadius':'20px'}}>
              <thead>
                <tr>
                  <th></th>
                  <th>Body temperature <ThermostatAutoIcon/> </th>
                  <th>Heart rate <MonitorHeartIcon /></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>{data.temp}</td>
                  <td>{data.heartrate}</td>
                </tr>
              </tbody>
            </Table>  
            <pre>{data}</pre>
          </Typography>
        </Box>
      </FormContainer>
    </><Footer /></>
  );
};

export default Heartrate;
