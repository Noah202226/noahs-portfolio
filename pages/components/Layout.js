import Header from "./Header";

import { Box, Container, Stack, Typography } from "@mui/material";
import { ThemeProvider, colors, createTheme } from "@mui/material";

import Typer from "./TypingText/Typer";

const modifyTheme = createTheme({
  palette: {
    primary: {
      main: colors.cyan[500],
    },
  },
});

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={modifyTheme}>
      {/* Hero */}
      <Box id="hero">
        <Header />
        <Stack
          className="card"
          marginBottom={3}
          display={"flex"}
          alignItems={"center"}
          justifyContent="space-around"
          sx={{
            height: { xs: "100vh", lg: "100vh" },
          }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            height={"70%"}
            justifyContent={{ xs: "space-evenly" }}
          >
            <Box>
              <Typography
                variant="h1"
                textAlign={{ xs: "center", md: "center" }}
                fontSize={{ xs: 42, md: 76, lg: 106 }}
                marginY={{ xs: 2, md: 2 }}
                letterSpacing={5}
                sx={{ transition: ".5s ease" }}
              >
                {<Typer textToType={"NOA LIGPITAN"} speed={100} />}
              </Typography>

              <Typography
                variant="h3"
                textAlign={{ xs: "center", md: "center" }}
                fontSize={{ xs: 16, md: 24, lg: 26 }}
                letterSpacing={5}
                sx={{
                  transition: ".5s ease",
                  fontStyle: "italic",
                  color: "black",
                  letterSpacing: ".5rem",
                }}
              >
                {<Typer textToType={"Software Developer"} speed={50} />}
              </Typography>
            </Box>

            <Typography
              variant="h6"
              textAlign={{ xs: "center", md: "center" }}
              fontSize={{ xs: 21, md: 28, lg: 30 }}
              letterSpacing={2}
              mt={{ xs: 6, md: 28, lg: 12 }}
            >
              Hi there, Let's{" "}
              <em className="font-highlighted" style={{ color: "white" }}>
                Designs
              </em>{" "}
              and <em className="font-highlighted">Develop</em> your products.
            </Typography>

            <Typography
              variant="h6"
              textAlign={{ xs: "center", md: "center" }}
              fontSize={{ xs: 14, md: 28, lg: 30 }}
              letterSpacing={2}
              bgcolor={"var(---div-title-bg)"}
              p={2}
              borderRadius={5}
              marginY={{ xs: 2, md: 2 }}
            >
              <Typer
                textToType={`Aims to help startup to build application to manage their business`}
                speed={20}
              />
            </Typography>
          </Box>

          <section className="button-scroll-container">
            <div className="button-scroll"></div>
          </section>
        </Stack>
      </Box>

      <Container container="true">{children}</Container>
    </ThemeProvider>
  );
}
