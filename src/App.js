import React, { useState } from "react";
import ClimateManagement from "./pages/ClimateManagement/ClimateManagement";
import DoorManagement from "./pages/DoorManagement/DoorManagement";
import HomePage from "./pages/HomePage/HomePage";
import LightManagement from "./pages/LightManagement/LightManagement";
import WindowManagement from "./pages/WindowManagement/WindowManagement";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { Grid } from "@mui/material";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

const App = () => {
  const [open, setOpen] = useState(false);
  const [authenticate, setAuthenticate] = useState(false);

  const handleAuthenticate = () => {
    setAuthenticate(true);
  };

  return (
    <Grid container>
      {authenticate && (
        <>
          <Grid item>
            <Navbar open={open} setOpen={setOpen} />
          </Grid>
        </>
      )}
      <Routes>
        <Route
          path="/login"
          element={<Login handleAuthenticate={handleAuthenticate} />}
        />
        <Route path="/register" element={<Register />} />
        {authenticate && (
          <>
            <Route path="/" element={<HomePage open={open} />} />
            <Route
              path="/climate"
              element={<ClimateManagement open={open} />}
            />
            <Route path="/door" element={<DoorManagement open={open} />} />
            <Route path="/light" element={<LightManagement open={open} />} />
            <Route path="/window" element={<WindowManagement open={open} />} />
          </>
        )}
      </Routes>
    </Grid>
  );
};

export default App;
