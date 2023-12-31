import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MUIError from "../component/MUIError";

const PasswordForm = ({
  handleBlur,
  touched,
  errors,
  handleChange,
  handleSubmit,
  values,
}) => {
  return (
    <Container component="main" maxWidth="xs" sx={{ mt: "5rem" }}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: 8,
        }}
      >
        <Typography
          component="h6"
          variant="h6"
          sx={{ fontWeight: "bold", fontSize: 12 }}
        >
          Password must be minimum of eight characters, with no space , at least
          one uppercase letter, one lowercase letter, one number and one special
          character.
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                error={touched.password && errors.password}
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <MUIError
                touch={touched.password}
                error={errors.password}
                value={false}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={touched.confirmPassword && errors.confirmPassword}
                required
                fullWidth
                name="confirmPassword"
                label="ConfirmPassword"
                type="password"
                id="confirmPassword"
                autoComplete="ConfirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <MUIError
                touch={touched.confirmPassword}
                error={errors.confirmPassword}
                value={false}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default PasswordForm;
