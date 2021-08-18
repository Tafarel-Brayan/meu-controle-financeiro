import type { NextPage } from "next";
import { Container, makeStyles, Paper, Theme } from "@material-ui/core";

const useStyle = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

const Home: NextPage = () => {
  const classes = useStyle();

  return (
    
      <h1>Teste</h1>
    
    
  );
};

export default Home;
