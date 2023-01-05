import React from "react";
import {
  Grid,
  Box,
  Typography,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
} from "@mui/material";

const ClimateManagement = ({ open }) => {
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
            <Typography fontWeight={"700"} variant="h5" gutterBottom>
              Klima Yönetimi
            </Typography>
          </Grid>
          <Grid item pl={1}>
            <Typography variant="subtitle1" gutterBottom>
              Eviniz içerisindeki klima durumunu buradan kontrol edebilirsiniz
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginTop: 2,
          marginLeft: open ? 30 : 8,
        }}
      >
        <Grid container mt={10} lg={10} md={10} sm={10} xl={10} xxl={10}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>İsim</TableCell>
                  <TableCell align="center">Durum</TableCell>
                  <TableCell align="center">İşlem Tarihi</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow>
                  <TableCell>
                    <Box
                      sx={{
                        width: 150,
                      }}
                    >
                      <Typography>ProfilDeneme</Typography>
                    </Box>
                  </TableCell>
                  <TableCell align="center">Açık</TableCell>
                  <TableCell align="center">20/12 13:55</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Box>
    </>
  );
};

export default ClimateManagement;
