import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { wait } from "@testing-library/user-event/dist/utils";

const Register = () => {
  //const navigation = useNavigate();
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={20} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Kayıt Olabilirsiniz
          </Typography>

          <Formik
            initialValues={{
              name: "",
              userName: "",
              password: "",
              submit: null,
            }}
            validationSchema={Yup.object().shape({
              name: Yup.string().max(255).required("Ad-Soyad zorunludur."),
              password: Yup.string().min(5).required("Şifre alanı zorunludur."),
              userName: Yup.string().required("Kullanıcı Adı zorunludur."),
            })}
            onSubmit={async (
              _values,
              { resetForm, setErrors, setStatus, setSubmitting }
            ) => {
              try {
                await wait(1000);
                resetForm();
                setStatus({ success: true });
                setSubmitting(false);
                const { name, userName, password } = _values;
                const createUser = await fetch(
                  "http://eem-proje.deta.dev/register",
                  {
                    method: "POST",
                    mode: "no-cors",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      home_key: name,
                      username: userName,
                      password: password,
                    }),
                  }
                );

                if (!createUser.ok) {
                  const data = await createUser.json();
                  const message = `An error has occured: ${data.status}`;
                  throw new Error(message);
                }
              } catch (err) {
                console.error(err);
                setStatus({ success: false });
                setErrors({ submit: err.message });
                setSubmitting(false);
              }
            }}
          >
            {({
              errors,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
              handleBlur,
            }) => (
              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={Boolean(touched.name && errors.name)}
                  helperText={touched.name && errors.name}
                  value={values.name}
                  margin="normal"
                  fullWidth
                  id="name"
                  label="Ad - Soyad"
                  name="name"
                  autoFocus
                />
                <TextField
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={Boolean(touched.userName && errors.userName)}
                  helperText={touched.userName && errors.userName}
                  value={values.userName}
                  margin="normal"
                  fullWidth
                  id="userName"
                  label="Kullanıcı Adı"
                  name="userName"
                />
                <TextField
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={Boolean(touched.password && errors.password)}
                  helperText={touched.password && errors.password}
                  value={values.password}
                  margin="normal"
                  fullWidth
                  name="password"
                  label="Şifre"
                  type="password"
                  id="password"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={Boolean(errors.submit) || isSubmitting}
                  sx={{ mt: 3, mb: 2 }}
                >
                  KAYDOL
                </Button>
                <Grid container justifyContent={"center"} mt={5}>
                  <Grid item>
                    <Link
                      href="/login"
                      variant="body2"
                      sx={{
                        textDecoration: "none",
                        "&:hover": { color: "#000" },
                      }}
                    >
                      <Typography>
                        Hesabınız Varsa Giriş Yapabilirsiniz
                      </Typography>
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            )}
          </Formik>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Register;
