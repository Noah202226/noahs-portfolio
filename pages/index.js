import { useEffect } from "react";

import {
  Box,
  Card,
  Grid,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { Code, DesignServices } from "@mui/icons-material";

import { styled } from "@mui/material/styles";

import CardMediaProgram from "./components/CardMediaProgram/CardMediaProgram";

import Image from "next/image";
import Slider from "./components/Slider/Slider";
import Contact from "./components/Contact";

// Importing images
// import dentalImage1 from "../public/1.PNG";

const dentalImages = [
  {
    caption: "Homepage",
    img: "/1.PNG",
    id: 1,
  },
  {
    caption: "Transactions report",
    img: "/2.PNG",
    id: 2,
  },
  {
    caption: "Export to excel",
    img: "/3.png",
    id: 3,
  },
  {
    caption: "Dynamic services",
    img: "/4.png",
    id: 4,
  },
];

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

  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#f5f5f9",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 300,
      fontSize: theme.typography.pxToRem(12),
      border: "1px solid #dadde9",
    },
  }));

  return (
    <Box className="card-container" marginBottom={3}>
      {/* Hero */}
      <Stack
        className="card"
        id="hero"
        marginBottom={3}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-around"}
        sx={{
          height: { xs: "100vh", lg: "100vh" },
        }}
      >
        <Box>
          <Typography
            variant="h1"
            textAlign={{ xs: "center", md: "start" }}
            fontSize={{ xs: 26, md: 76, lg: 106 }}
            marginY={{ xs: 2, md: 2 }}
            letterSpacing={5}
            sx={{ transition: ".5s ease" }}
          >
            NOA LIGPITAN
          </Typography>

          <Typography
            variant="h3"
            textAlign={{ xs: "center", md: "start" }}
            fontSize={{ xs: 16, md: 24, lg: 26 }}
            letterSpacing={5}
            sx={{
              transition: ".5s ease",
              fontStyle: "italic",
              color: "black",
              letterSpacing: ".5rem",
            }}
          >
            Software Developer
          </Typography>

          <Typography
            variant="h6"
            textAlign={{ xs: "center", md: "start" }}
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
            textAlign={{ xs: "center", md: "start" }}
            fontSize={{ xs: 14, md: 28, lg: 30 }}
            letterSpacing={2}
            bgcolor={"var(---div-title-bg)"}
            p={2}
            borderRadius={5}
            marginY={{ xs: 2, md: 2 }}
          >
            Aims to help startup to{" "}
            <em className="font-highlighted"> build application</em> to manage
            their business
          </Typography>
        </Box>

        <section className="button-scroll-container">
          <div className="button-scroll"></div>
        </section>
      </Stack>

      {/* Info */}
      <Grid container spacing={3} gap={3}>
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
          my={{ xs: 1, md: 1 }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: 36, md: 28, lg: 42 },
              fontFamily: "Lato, sans-serif",
              fontStyle: "italic",
              mb: { xs: 3, md: 6 },
            }}
          >
            Technologies I'm using
          </Typography>

          <Box marginBottom={2} display={"flex"} flexDirection={"column"}>
            {/* <Box
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
                sx={{ textShadow: "2px 2px 2px grey", fontFamily: "Gemstone" }}
              >
                Technologies I'm using
              </Typography>
            </Box> */}

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
                    fontSize: { xs: 26, md: 28, lg: 28 },
                    fontFamily: "Lato, sans-serif",
                    fontStyle: "italic",
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
                  <HtmlTooltip
                    title={
                      <>
                        <Typography
                          variant="body"
                          color="inherit"
                          fontWeight={"bold"}
                        >
                          HTML or HyperText Markup Language
                        </Typography>
                        <p>
                          {
                            " It defines the meaning and structure of web content. is the standard markup language for documents designed to be displayed in a web browser."
                          }
                        </p>
                      </>
                    }
                  >
                    <Image
                      className="software-icons"
                      src={"/html icon.png"}
                      alt="html icon"
                      width={100}
                      height={100}
                    />
                  </HtmlTooltip>

                  <HtmlTooltip
                    title={
                      <>
                        <Typography
                          variant="body"
                          color="inherit"
                          fontWeight={"bold"}
                        >
                          CSS or Cascading Style Sheets
                        </Typography>
                        <p>
                          {
                            "Is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML."
                          }
                        </p>
                      </>
                    }
                  >
                    <Image
                      className="software-icons"
                      src={"/css3.png"}
                      alt="css3"
                      width={120}
                      height={120}
                    />
                  </HtmlTooltip>

                  <HtmlTooltip
                    title={
                      <>
                        <Typography
                          variant="body"
                          color="inherit"
                          fontWeight={"bold"}
                        >
                          JavaScript
                        </Typography>
                        <p>
                          {
                            "Is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries."
                          }
                        </p>
                      </>
                    }
                  >
                    <Image
                      className="software-icons"
                      src={"/javascript.png"}
                      alt="js"
                      width={120}
                      height={120}
                    />
                  </HtmlTooltip>

                  <HtmlTooltip
                    title={
                      <>
                        <Typography
                          variant="body"
                          color="inherit"
                          fontWeight={"bold"}
                        >
                          React JS
                        </Typography>
                        <p>
                          {
                            "Is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies."
                          }
                        </p>
                      </>
                    }
                  >
                    <Image
                      className="software-icons"
                      src={"/react.png"}
                      alt="react js"
                      width={100}
                      height={100}
                    />
                  </HtmlTooltip>

                  <HtmlTooltip
                    title={
                      <>
                        <Typography
                          variant="body"
                          color="inherit"
                          fontWeight={"bold"}
                        >
                          Next JS
                        </Typography>
                        <p>
                          {
                            "Is a React framework that gives you building blocks to create web applications. By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application."
                          }
                        </p>
                      </>
                    }
                  >
                    <Image
                      className="software-icons"
                      src={"/next-logo.svg"}
                      alt="next js"
                      width={120}
                      height={120}
                      style={{ marginLeft: 20 }}
                    />
                  </HtmlTooltip>

                  <HtmlTooltip
                    title={
                      <>
                        <Typography
                          variant="body"
                          color="inherit"
                          fontWeight={"bold"}
                        >
                          Github
                        </Typography>
                        <p>
                          {
                            "Is a platform and cloud-based service for software development and version control using Git, allowing developers to store and manage their code"
                          }
                        </p>
                      </>
                    }
                  >
                    <Image
                      className="software-icons"
                      src={"/git.png"}
                      alt="react js"
                      width={100}
                      height={100}
                    />
                  </HtmlTooltip>
                </Grid>
              </li>

              {/* Backend */}
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
                    fontSize: { xs: 26, md: 28, lg: 28 },
                    fontFamily: "Lato, sans-serif",
                    fontStyle: "italic",
                    mt: { xs: 3, md: 6 },
                  }}
                >
                  Backend
                </Typography>
                <Grid
                  container
                  display={"flex"}
                  flexDirection={"row"}
                  alignItems={"center"}
                  justifyContent={"space-evenly"}
                >
                  <HtmlTooltip
                    title={
                      <>
                        <Typography
                          variant="body"
                          color="inherit"
                          fontWeight={"bold"}
                        >
                          Firebase
                        </Typography>
                        <p>
                          {
                            "Is a set of backend cloud computing services and application development platforms provided by Google. It hosts databases, services, authentication, and integration for a variety of applications, including Android, iOS, JavaScript, Node.js, Java, Unity, PHP, and C++."
                          }
                        </p>
                      </>
                    }
                  >
                    <Image
                      className="software-icons"
                      src={"/firebase.png"}
                      alt="firebase icon"
                      width={100}
                      height={100}
                    />
                  </HtmlTooltip>

                  <HtmlTooltip
                    title={
                      <>
                        <Typography
                          variant="body"
                          color="inherit"
                          fontWeight={"bold"}
                        >
                          MongoDb
                        </Typography>
                        <p>
                          {
                            "Is built on a scale-out architecture that has become popular with developers of all kinds for developing scalable applications with evolving data schemas. As a document database, MongoDB makes it easy for developers to store structured or unstructured data. It uses a JSON-like format to store documents."
                          }
                        </p>
                      </>
                    }
                  >
                    <Image
                      className="software-icons"
                      src={"/mongodb.png"}
                      alt="python"
                      width={120}
                      height={120}
                    />
                  </HtmlTooltip>

                  <HtmlTooltip
                    title={
                      <>
                        <Typography
                          variant="body"
                          color="inherit"
                          fontWeight={"bold"}
                        >
                          NodeJs
                        </Typography>
                        <p>
                          {
                            "Is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser."
                          }
                        </p>
                      </>
                    }
                  >
                    <Image
                      className="software-icons"
                      src={"/node.png"}
                      alt="python"
                      width={120}
                      height={120}
                    />
                  </HtmlTooltip>
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
                    fontSize: { xs: 26, md: 28, lg: 28 },
                    fontFamily: "Lato, sans-serif",
                    fontStyle: "italic",
                    mt: { xs: 3, md: 6 },
                  }}
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
                  <HtmlTooltip
                    title={
                      <>
                        <Typography
                          variant="body"
                          color="inherit"
                          fontWeight={"bold"}
                        >
                          Electron JS
                        </Typography>
                        <p>
                          {
                            "Is a free and open-source software framework developed and maintained by OpenJS Foundation. The framework is designed to create desktop applications using web technologies that are rendered using a version of the Chromium browser engine and a back end using the Node.js runtime environment."
                          }
                        </p>
                      </>
                    }
                  >
                    <Image
                      className="software-icons"
                      src={"/electron-js.png"}
                      alt="electronJs"
                      width={100}
                      height={100}
                    />
                  </HtmlTooltip>

                  <HtmlTooltip
                    title={
                      <>
                        <Typography
                          variant="body"
                          color="inherit"
                          fontWeight={"bold"}
                        >
                          Python
                        </Typography>
                        <p>
                          {
                            "Is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured, object-oriented and functional programming."
                          }
                        </p>
                      </>
                    }
                  >
                    <Image
                      className="software-icons"
                      src={"/python.png"}
                      alt="python"
                      width={120}
                      height={120}
                    />
                  </HtmlTooltip>

                  <HtmlTooltip
                    title={
                      <>
                        <Typography
                          variant="body"
                          color="inherit"
                          fontWeight={"bold"}
                        >
                          PyQt
                        </Typography>
                        <p>
                          {
                            "Is a GUI widgets toolkit. It is a Python interface for Qt, one of the most powerful, and popular cross-platform GUI library. PyQt is a blend of Python programming language and the Qt library. This introductory tutorial will assist you in creating graphical applications with the help of PyQt."
                          }
                        </p>
                      </>
                    }
                  >
                    <Image
                      className="software-icons"
                      src={"/pyqt.png"}
                      alt="pyqt"
                      width={120}
                      height={120}
                    />
                  </HtmlTooltip>
                </Grid>
              </li>
            </ul>
          </Box>

          {/* <Button variant="contained">View Projects Created</Button> */}
        </Grid>
      </Grid>

      {/* Projects */}
      <Grid id="projects" container spacing={1} my={{ xs: 0, md: 3 }}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ width: "100%" }}
        >
          <Typography
            variant="h4"
            textAlign={{ xs: "center", md: "left" }}
            sx={{
              width: "100%",
              fontSize: { xs: 26, md: 28, lg: 42 },
              fontFamily: "Lato, sans-serif",
              fontStyle: "italic",
            }}
          >
            Some projects I've built
          </Typography>

          <Typography
            className="to-hide-in-mobile"
            variant="caption"
            color={"coral"}
            fontStyle={"italic"}
          >
            Use shift + mouse scroll to view other projects
          </Typography>
        </Box>

        <Grid item container xs={12} md={12} className="card">
          <Typography
            variant="h5"
            sx={{
              textAlign: "right",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              letterSpacing: 5,
              color: "var(---div-title-bg)",
              textShadow: "2px 2px 2px black",
              fontSize: { xs: 26, md: 28, lg: 28 },
              fontFamily: "Lato, sans-serif",
              fontStyle: "italic",
            }}
          >
            Web Development
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
              techUsedArray={[
                "Next JS",
                "Material UI",
                "Firebase",
                "Vercel",
                "Nodemailer",
              ]}
            />

            <CardMediaProgram
              ImageSrc={"/chords-finder-app.PNG"}
              title={"Chords Finder App"}
              altImage={"chords finder app"}
              description={"Image chords organizer, to easy find chords"}
              link={"https://music-ministry-chord-finder.web.app/"}
              techUsedArray={["Next JS", "Material UI", "Firebase"]}
            />

            <CardMediaProgram
              ImageSrc={"/sales-agent-app.PNG"}
              altImage={"Sales Agent App"}
              title={"Sales Agent Application"}
              description={"Agent App that can monitor their possible clients"}
              link={"https://noems-agent-dummy.web.app/"}
              techUsedArray={["Next JS", "Material UI", "Firebase"]}
            />

            <CardMediaProgram
              ImageSrc={"/Erha.png"}
              altImage={"Research Paper Sample"}
              title={"Research Paper"}
              description={"Student projects/research that I built"}
              link={"https://erha-3686e.web.app/"}
              techUsedArray={["Next JS", "Material UI", "Firebase"]}
            />
          </Grid>

          {/* Desktop */}
          <Typography
            variant="h5"
            fontSize={36}
            sx={{
              textAlign: "right",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              letterSpacing: 5,
              color: "var(---div-title-bg)",
              textShadow: "2px 2px 2px black",
              fontSize: { xs: 26, md: 28, lg: 28 },
              fontFamily: "Lato, sans-serif",
              fontStyle: "italic",
              mt: { xs: 3, md: 6 },
            }}
          >
            Desktop Software
          </Typography>
          <Grid
            container
            id="media-scroller2"
            className="card media-scroller snap-inline"
          >
            <Slider images={dentalImages} appTitle={"Dental Clinic System"} />
            <Slider images={dentalImages} appTitle={"Dental Clinic System"} />
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
      {/* <Box id="services" className="card" spacing={1} mt={{ xs: 2, md: 3 }}>
        <Card sx={{ p: 2 }}>
          <Typography
            variant="h5"
            fontSize={46}
            sx={{ fontFamily: "Gemstone" }}
          >
            Services
          </Typography>

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
      </Box> */}

      {/* Contact */}
      <Box id="contact" className="card" marginY={5}>
        <Contact />
      </Box>
    </Box>
  );
}
