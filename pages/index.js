import { useEffect } from "react";

import { Box, Card, Grid, Paper, Stack, Typography } from "@mui/material";
import { Code, DesignServices } from "@mui/icons-material";

import CardMediaProgram from "./components/CardMediaProgram/CardMediaProgram";

import Image from "next/image";
import Slider from "./components/Slider/Slider";
import Contact from "./components/Contact";

// import importedImg from "/chords-finder-app.PNG";

export default function Home() {
  useEffect(() => {
    const resources = document.querySelectorAll("img");
    resources.forEach((res) => {
      res.addEventListener("contextmenu", (e) => e.preventDefault());
    });

    // Intersection Observation
    const cards = document.querySelectorAll(".card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("show", entry.isIntersecting);
          // if (entry.isIntersecting) observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.1,
      }
    );

    cards.forEach((card) => {
      observer.observe(card);
    });
  }, []);

  return (
    <Box className="card-container" marginBottom={3}>
      {/* Hero */}
      <Stack
        className="card"
        id="hero"
        marginBottom={3}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          height: { xs: "40vh", lg: "100vh" },
        }}
      >
        <Typography
          variant="h1"
          textAlign={{ xs: "center", md: "start" }}
          fontSize={{ xs: 36, md: 46, lg: 96 }}
          marginY={{ xs: 2, md: 2 }}
          letterSpacing={5}
          sx={{ transition: ".5s ease" }}
        >
          NOA LIGPITAN
        </Typography>
        <Typography
          variant="h6"
          textAlign={{ xs: "center", md: "start" }}
          fontSize={{ xs: 18, md: 28, lg: 42 }}
          letterSpacing={2}
        >
          Hi there, Let's <em>Develop</em> and <em>Designs</em> your products.
        </Typography>

        <Typography
          variant="h6"
          textAlign={{ xs: "center", md: "start" }}
          fontSize={{ xs: 12, md: 18, lg: 26 }}
          letterSpacing={2}
          bgcolor={"var(---div-title-bg)"}
          p={2}
          borderRadius={5}
          marginY={{ xs: 2, md: 2 }}
        >
          Aims to help startup to build application for their business
        </Typography>
      </Stack>

      {/* Info */}
      <Grid container spacing={2} gap={2}>
        <Grid
          item
          xs={12}
          sx={{
            // boxShadow: "-0.1rem 0.2rem 0.2rem black;",
            // border: ".5px solid black",
            // background: "cyan",
            color: "black",
            // borderTopRightRadius: { xs: "1rem", md: "0" },
            // borderBottomRightRadius: { xs: "1rem", md: "1rem" },
            // borderTopLeftRadius: { xs: "0", md: "1rem" },
          }}
          className="card developer"
          padding={2}
        >
          <Box marginBottom={2} display={"flex"} flexDirection={"column"}>
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              sx={{
                background: "var(---div-title-bg)",
                padding: 1,
                borderRadius: "1rem",
                opacity: 0.8,
                width: { xs: "100%", md: "60%" },
              }}
            >
              <Typography
                variant="h5"
                fontSize={{ xs: 24, md: 36, lg: 46 }}
                sx={{ textShadow: "2px 2px 2px grey" }}
              >
                Software Developer
              </Typography>
              <Code />
            </Box>

            <ul>
              <li>
                <Typography
                  variant="h5"
                  fontSize={36}
                  sx={{
                    textAlign: "center",
                    letterSpacing: 5,
                    color: "var(---div-title-bg)",
                    textShadow: "2px 2px 2px black",
                  }}
                >
                  Web Development
                </Typography>
                <Grid
                  container
                  display={"flex"}
                  flexDirection={"row"}
                  alignItems={"center"}
                  justifyContent={"space-evenly"}
                >
                  <Image
                    className="software-icons"
                    src={"/html icon.png"}
                    alt="html icon"
                    width={100}
                    height={100}
                  />
                  <Image
                    className="software-icons"
                    src={"/css3.png"}
                    alt="css3"
                    width={120}
                    height={120}
                  />
                  <Image
                    className="software-icons"
                    src={"/javascript.png"}
                    alt="js"
                    width={120}
                    height={120}
                  />
                  <Image
                    className="software-icons"
                    src={"/react.png"}
                    alt="react js"
                    width={100}
                    height={100}
                  />
                  <Image
                    className="software-icons"
                    src={"/next-logo.svg"}
                    alt="next js"
                    width={120}
                    height={120}
                    style={{ marginLeft: 20 }}
                  />
                </Grid>
              </li>
              <li>
                <Typography
                  variant="h5"
                  sx={{
                    borderTopColor: "var(---div-title-bg)",
                    borderTopStyle: "solid",
                    borderTopWidth: ".2rem",
                    textAlign: "center",
                    letterSpacing: 5,
                    color: "var(---div-title-bg)",
                    textShadow: "2px 2px 2px black",
                  }}
                  fontSize={36}
                >
                  Desktop Applications
                </Typography>
                <Grid
                  container
                  display={"flex"}
                  flexDirection={"row"}
                  alignItems={"center"}
                  justifyContent={"space-evenly"}
                >
                  <Image
                    className="software-icons"
                    src={"/electron-js.png"}
                    alt="electronJs"
                    width={100}
                    height={100}
                  />
                  <Image
                    className="software-icons"
                    src={"/python.png"}
                    alt="python"
                    width={120}
                    height={120}
                  />
                  <Image
                    className="software-icons"
                    src={"/qt.png"}
                    alt="pyqt"
                    width={120}
                    height={120}
                  />
                </Grid>
              </li>
            </ul>
          </Box>

          {/* <Button variant="contained">View Projects Created</Button> */}
        </Grid>

        {/* <Grid item xs={12} className="card designer">
          <Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              sx={{
                background: "var(---div-title-bg)",
                padding: 1,
                borderRadius: "1rem",
                opacity: 0.8,
                width: "60%",
              }}
            >
              <Typography
                variant="h5"
                fontSize={{ xs: 24, md: 36, lg: 46 }}
                sx={{ textShadow: "2px 2px 2px grey" }}
              >
                Graphic Design
              </Typography>
              <DesignServices />
            </Box>

            <Grid
              container
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-evenly"}
            >
              <Image src={"/photoshop.svg"} height={50} width={50} />
              <Image src={"/illustrator.svg"} height={50} width={50} />
            </Grid>

            <Grid
              flexDirection={"row"}
              justifyContent={"space-evenly"}
              container
            >
              <Grid item xs={12} md={4}>
                <Card
                  sx={{
                    m: 1,
                    p: 2,
                    background: "var(---div-title-bg)",
                    opacity: 0.9,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "100px",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      textShadow: "1px 1px 1px grey",
                      letterSpacing: 4,
                    }}
                  >
                    LOGO
                  </Typography>

                  <Stack
                    flexDirection={"row"}
                    justifyContent={"space-evenly"}
                    alignItems={"center"}
                    flex={1}
                    width={"100%"}
                  >
                    <Image src={"/icons8-logo.svg"} width={50} height={50} />
                    <Image src={"/icons8-logo 2.svg"} width={50} height={50} />
                    <Image src={"/icons8-logo 3.svg"} width={50} height={50} />
                  </Stack>
                </Card>
              </Grid>

              <Grid item xs={12} md={4}>
                <Card
                  sx={{
                    m: 1,
                    p: 1,
                    background: "var(---div-title-bg)",
                    opacity: 0.9,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "100px",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      textShadow: "1px 1px 1px grey",
                      letterSpacing: 4,
                    }}
                  >
                    MARKETING LAYOUTS
                  </Typography>

                  <Grid container>
                    <Grid item xs={4} md={4}>
                      <Typography
                        variant="h6"
                        textAlign={"center"}
                        color="black"
                      >
                        Tarpaulines
                      </Typography>
                    </Grid>

                    <Grid item xs={4} md={4}>
                      <Typography variant="h6" textAlign={"center"}>
                        Flyers
                      </Typography>
                    </Grid>

                    <Grid item xs={4} md={4}>
                      <Typography variant="h6" textAlign={"center"}>
                        Product{" "}
                      </Typography>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>

              <Grid item xs={12} md={4}>
                <Card
                  sx={{
                    m: 1,
                    p: 1,
                    background: "var(---div-title-bg)",
                    opacity: 0.9,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "100px",
                    justifyContent: "space-between",
                    paddingBottom: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      textShadow: "1px 1px 1px grey",
                      letterSpacing: 4,
                    }}
                  >
                    PHOTO ENCHANCEMENTS
                  </Typography>

                  <Grid container>
                    <Grid item xs={4} md={4}>
                      <Typography
                        variant="h6"
                        textAlign={"center"}
                        color="black"
                        fontSize={11}
                      >
                        Remove Background
                      </Typography>
                    </Grid>

                    <Grid item xs={4} md={4}>
                      <Typography
                        variant="h6"
                        textAlign={"center"}
                        fontSize={11}
                      >
                        Adjust Lightness
                      </Typography>
                    </Grid>

                    <Grid item xs={4} md={4}>
                      <Typography
                        variant="h6"
                        textAlign={"center"}
                        fontSize={11}
                      >
                        Image Quality
                      </Typography>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Grid> */}
      </Grid>

      {/* Projects */}
      <Grid id="projects" container spacing={1} mt={{ xs: 0, md: 3 }}>
        <Grid item container xs={12} md={12} className="card">
          <Typography variant="h5" textAlign={"center"}>
            Some projects I've built
          </Typography>

          <Grid
            container
            id="media-scroller"
            className="card media-scroller snap-inline"
          >
            <CardMediaProgram
              ImageSrc={"/rsbc-marketing.PNG"}
              title={"RSBC Marketing"}
              altImage={"rsbc marketing"}
              description={"Company website that help find more leads"}
              link={"https://rsbc-marketing.vercel.app/"}
              techUsedArray={["Next JS", "Material UI", "Vercel"]}
            />
            <CardMediaProgram
              ImageSrc={"/Erha.png"}
              altImage={"Research Paper Sample"}
              title={"Research Paper"}
              description={"Student projects that I build"}
              link={"https://erha-3686e.web.app/"}
              techUsedArray={["Next JS", "Material UI", "Firebase hosting"]}
            />

            <CardMediaProgram
              ImageSrc={"/sales-agent-app.PNG"}
              altImage={"Sales Agent App"}
              title={"Sales Agent Application"}
              description={"Agent App that can monitor their possible clients"}
              link={"https://noems-agent-dummy.web.app/"}
              techUsedArray={["Next JS", "Material UI", "Firebase hosting"]}
            />

            <CardMediaProgram
              ImageSrc={"/chords-finder-app.PNG"}
              title={"Chords Finder App"}
              altImage={"chords finder app"}
              description={"Agent App that can monitor their possible clients"}
              link={"https://music-ministry-chord-finder.web.app/"}
              techUsedArray={["Next JS", "Material UI", "Firebase hosting"]}
            />
          </Grid>
        </Grid>

        {/* <Grid item container xs={12} md={5} className="card">
          <Grid item xs={12}>
            <Box>
              <Typography variant="h5" textAlign={"center"}>
                Sample Layouts I Make
              </Typography>

              <Slider autoSlide={true} />
            </Box>
          </Grid>
        </Grid> */}
      </Grid>

      {/* Services */}
      <Box id="services" className="card" spacing={1} mt={{ xs: 2, md: 3 }}>
        <Card sx={{ p: 2 }}>
          <Typography
            variant="h5"
            fontSize={46}
            sx={{ fontFamily: "Caveat Brush" }}
          >
            Services
          </Typography>

          {/* Developer Services */}
          <Typography>Software</Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} md={4}>
              <Paper sx={{ background: "var(---div-title-bg)", p: 1 }}>
                <Typography variant="h6" mb={1}>
                  Static Website - No Database
                </Typography>
                <Typography>
                  (Personal Portfolio, Landing Page, Company Site)
                </Typography>
                <Typography variant="h5"> - $30 / ₱1700</Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper
                sx={{
                  background: "var(---div-title-bg)",
                  p: 1,
                  height: "100%",
                }}
              >
                <Typography variant="h6" mb={1}>
                  Website Applications - Cloud Hosting and Database -
                </Typography>

                <Typography>
                  (Company / Personal web application that can help your
                  business manage or make leads)
                </Typography>
                <Typography variant="h5"> - $50</Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper sx={{ background: "var(---div-title-bg)", p: 1 }}>
                <Typography variant="h6" mb={1}>
                  Desktop Applications - With Local Database
                </Typography>
                <Typography>
                  (Business App, Customer Listing, Payroll System)
                </Typography>
                <Typography variant="h5"> - $50</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Card>
      </Box>

      {/* Contact */}
      <Box id="contact" className="card" marginY={5}>
        <Contact />
      </Box>
    </Box>
  );
}
