import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Alert,
  Box,
  Button,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";

import EmailForm from "./EmailForm";

const Contact = () => {
  const formRef = useRef();

  const [sending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fm0ot7q",
        "template_krr6vzm",
        formRef.current,
        "4oaLvmxZtMd0y5oSI"
      )
      .then(
        (result) => {
          formRef.current.reset();

          setIsSending(true);

          setTimeout(() => {
            setIsSending(false);
          }, 3000);
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "var(---div-title-bg)",
        color: "var(---font-color)",
        padding: "1rem",
      }}
    >
      <Typography variant="h6">Send me a message:</Typography>

      <form ref={formRef} onSubmit={sendEmail}>
        <Grid container spacing={2}>
          <Grid item container md={12} spacing={3}>
            <Grid item xs={12} md={5}>
              <TextField
                label="Your name"
                name="user_name"
                type="text"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={7}>
              <TextField
                label="Email"
                name="user_name"
                type="email"
                fullWidth
              />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
            <TextField label="Message" multiline name="message" fullWidth />
          </Grid>

          <Grid item xs={12} md={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                padding: 1,
                width: { xs: "100%", md: "200px" },
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>

      <EmailForm />

      <Snackbar open={sending} autoHideDuration={6000} message="Message sent!">
        <Alert severity="success">Message sent completed. Thanks!</Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
