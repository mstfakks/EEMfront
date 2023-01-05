import React, { useState } from "react";
import {
  Grid,
  Typography,
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Switch,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomePage = ({ open }) => {
  const navigate = useNavigate();
  const [lightChecked, setLightChecked] = useState(false);
  const [doorChecked, setDoorChecked] = useState(false);
  const [windowChecked, setWindowChecked] = useState(false);
  const [climateChecked, setClimateChecked] = useState(false);

  const handleLightChange = (event) => {
    setLightChecked(event.target.checked);
  };
  const handleDoorChange = (event) => {
    setDoorChecked(event.target.checked);
  };
  const handleWindowChange = (event) => {
    setWindowChecked(event.target.checked);
  };
  const handleClimateChange = (event) => {
    setClimateChecked(event.target.checked);
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          marginTop: 2,
          marginLeft: open ? 30 : 8,
          boxShadow: "0px 5px 8px 10px #888888",
          backgroundColor: '#e6ffff'
        }}
      >
        <Grid container display={"flex"} flexDirection={"column"}>
          <Grid item p={1}>
            <Typography
              fontWeight={"700"}
              variant="h5"
              gutterBottom
              pl={2}
              pt={1}
            >
              Ana Sayfa
            </Typography>
          </Grid>
          <Grid item pl={1}>
            <Typography variant="subtitle1" gutterBottom pl={2}>
              Eviniz ile ilgili akıllı teknolojileri bu sayfa içerisinden
              kontrol edebilirsiniz
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ marginLeft: open ? 30 : 8 }}>
        <Grid container mt={8} ml={0.2} mr={0.2} spacing={5}>
          <Grid item md={6} sm={12} xs={12} lg={3}>
            <Card sx={{ backgroundColor: "#b3e5fc" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Aydınlatma Durumu
                </Typography>
                <Typography gutterBottom>
                  Evinizin aydınlatma durum buradan kontrol edebilirsiniz
                </Typography>
                <Box mt={3} display="flex" justifyContent={"center"}>
                  <Typography mt={0.7}>Kapalı</Typography>
                  <Switch
                    checked={lightChecked}
                    onChange={handleLightChange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                  <Typography mt={0.7}>Açık</Typography>
                </Box>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => navigate("/light")}
                  sx={{ backgroundColor: "#e6ffff" }}
                >
                  Detayları Göster
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={6} sm={12} xs={12} lg={3}>
            <Card sx={{ backgroundColor: "#b3e5fc" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Kapı Durumu
                </Typography>
                <Typography gutterBottom>
                  Evinizin kapı durumunu buradan kontrol edebilirsiniz
                </Typography>
                <Box mt={3} display="flex" justifyContent={"center"}>
                  <Typography mt={0.7}>Kapalı</Typography>
                  <Switch
                    checked={doorChecked}
                    onChange={handleDoorChange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                  <Typography mt={0.7}>Açık</Typography>
                </Box>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => navigate("/door")}
                  sx={{ backgroundColor: "#e6ffff" }}
                >
                  Detayları Göster
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={6} sm={12} xs={12} lg={3}>
            <Card sx={{ maxHeight: 205, backgroundColor: "#b3e5fc" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Pencere Durumu
                </Typography>
                <Typography gutterBottom>
                  Evinizin pencere durumunu buradan kontrol edebilirsiniz
                </Typography>
                <Box mt={1} display="flex" justifyContent={"center"}>
                  <Typography mt={0.7}>Kapalı</Typography>
                  <Switch
                    checked={windowChecked}
                    onChange={handleWindowChange}
                    inputProps={{ "aria-label": "controlled" }}
                    
                  />
                  <Typography mt={0.7}>Açık</Typography>
                </Box>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => navigate("/window")}
                  sx={{ backgroundColor: "#e6ffff", marginTop:-1 }}
                >
                  Detayları Göster
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={6} sm={12} xs={12} lg={3}>
            <Card sx={{ backgroundColor: "#b3e5fc" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Klima Durumu
                </Typography>
                <Typography gutterBottom>
                  Evinizin klima durumunu buradan kontrol edebilirsiniz
                </Typography>
                <Box mt={3} display="flex" justifyContent={"center"}>
                  <Typography mt={0.7}>Kapalı</Typography>
                  <Switch
                    checked={climateChecked}
                    onChange={handleClimateChange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                  <Typography mt={0.7}>Açık</Typography>
                </Box>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => navigate("/climate")}
                  sx={{ backgroundColor: "#e6ffff" }}
                >
                  Detayları Göster
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HomePage;
