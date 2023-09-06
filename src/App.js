import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import Home from "./pages/Home";
import Header from "./components/Header";
import Features from "./pages/Features";
import Location from "./pages/Location";
import NutritionChecker from "./pages/NutritionChecker";
import Login from "./pages/Login";
import Heartrate from "./pages/Heartrate";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Container >
      <ToastContainer />
      <Box width="400px" sx={{ width: { x1: "1488px" } }} m="auto">
        <Header style={{'borderRadius':'10px'}}/>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/pages/features" element={<Features />} />
          <Route
            path="/pages/nutrition-checker"
            element={<NutritionChecker />}
          />
          <Route path="/pages/location" element={<Location />} />

        
          <Route path="" element={<PublicRoute />}>
            <Route path="/pages/Heartrate" element={<Heartrate />} />
            <Route path="/pages/login" element={<Login />} />
          </Route>

          {/* Private Route */}
          <Route path="" element={<PrivateRoute />}>
            <Route path="/pages/profile/*" element={<Profile />} />
          </Route>

          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
    </Container>
  );
};

export default App;
