import Header from "./Header";

import { Container } from "@mui/material";
import { ThemeProvider, colors, createTheme } from "@mui/material";

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
      <Header />
      <Container container="true">{children}</Container>
    </ThemeProvider>
  );
}
