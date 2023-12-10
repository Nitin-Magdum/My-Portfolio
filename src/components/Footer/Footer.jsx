import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Twitter } from "@mui/icons-material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Footer() {
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = () => {
    validateEmail();
    if (emailError) {
      return;
    }
    console.log("Email:", email);
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "white",  // Set the background color to white
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3} mb={2}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              CONTACT ME
            </Typography>
            <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth style={{ marginTop: '5px' }} />
            <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth style={{ marginTop: '5px' }} value={email} onChange={handleEmailChange} onBlur={validateEmail} error={!!emailError} helperText={emailError}/>
            <TextField id="outlined-multiline-flexible" label="Message" multiline rows={4} variant="outlined" fullWidth style={{ marginTop: '5px' }} />
            <Button variant="contained" color="primary" fullWidth style={{ marginTop: '15px' }} onClick={handleSubmit} >
              Send
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} />
          <Grid item xs={12} sm={3} mb={2}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Me
            </Typography>
            <Link href="https://github.com/Nitin-Magdum" color="inherit">
              <GitHubIcon />
            </Link>
            <Link
              href="https://www.linkedin.com/in/dktenitinmagdum/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <LinkedInIcon />
            </Link>
            <Link href="https://twitter.com/nitin__magdum" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
