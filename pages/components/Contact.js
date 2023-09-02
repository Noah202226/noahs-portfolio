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

const Contact = () => {
  const formRef = useRef();

  const [isSending, setIsSending] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();
      console.log(data);
      if (data) {
        setIsSending(false);

        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
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
      <Typography
        variant="h6"
        sx={{
          fontSize: { xs: 26, md: 28, lg: 28 },
          fontFamily: "Lato, sans-serif",
          fontStyle: "italic",
        }}
      >
        Send me a message:
      </Typography>

      <form ref={formRef} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item container md={12} spacing={3}>
            <Grid item xs={12} md={5}>
              <TextField
                label="Your name"
                name="user_name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={7}>
              <TextField
                label="Email"
                name="user_name"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
              />
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
            <TextField
              label="Message"
              multiline
              name="message"
              fullWidth
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                padding: 1,
                width: { xs: "100%", md: "200px" },
                fontSize: { xs: 21, md: 28, lg: 28 },
                fontFamily: "Lato, sans-serif",
                fontStyle: "italic",
              }}
            >
              {isSending ? "Sending ..." : "Submit"}
            </Button>
          </Grid>
        </Grid>
      </form>

      <Snackbar
        open={isSending}
        autoHideDuration={6000}
        message="Message sent!"
      >
        <Alert severity="success">Message sent completed. Thanks!</Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
