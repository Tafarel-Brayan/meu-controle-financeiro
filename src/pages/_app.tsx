import {
  Container,
  CssBaseline,
  makeStyles,
  Theme,
  ThemeProvider,
} from "@material-ui/core";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import theme from "../styles/theme";

const useStyle = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
  },
  appBarSpacer: theme.mixins.toolbar,
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
}));

function MyApp({ Component, pageProps }: AppProps) {
  const classes = useStyle();
  const [open, setOpen] = useState(true);
  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />
          <NavBar open={open} handleDrawerOpen={handleDrawerOpen} />
          <SideBar open={open} handleDrawerOpen={handleDrawerOpen} />
          <div className={classes.content}>
            <div className={`${classes.appBarSpacer}`} />
            <Container className={classes.container}>
              <Component {...pageProps} />
            </Container>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
