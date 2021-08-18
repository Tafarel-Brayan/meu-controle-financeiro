import {
  Avatar,
  Divider,
  Drawer,
  IconButton,
  List,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { mainListItems, secondaryListItems } from "../fixtures/SideBar";
import { FC } from "react";

const drawerWidth = 280;

const useStyles = makeStyles((theme: Theme) => ({
  brand: {
    fontSize: "0.95rem",
    color: theme.palette.secondary.light,
    textAlign: "left",
    paddingLeft: theme.spacing(1),
  },
  infoAccount: {
    backgroundColor: theme.palette.primary.dark,
    height: "8.5rem",
    textAlign: "center",
    marginBottom: "3rem",
    "& h6": {
      color: "#FFFFFF",
    },
    "& div": {
      marginTop: "20px",
      marginBottom: "20px",
    },
  },
  toolbarIcon: {
    backgroundColor: theme.palette.primary.dark,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  drawerPaper: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.text.secondary,
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  large: {
    width: theme.spacing(11),
    height: theme.spacing(11),
    border: "8px solid #252f3e",
    margin: "0 auto",
  },
}));

type SideBarProps = {
  open: boolean;
  handleDrawerOpen: () => void;
};

const SideBar: FC<SideBarProps> = ({
  open,
  handleDrawerOpen,
}: SideBarProps) => {
  const classes = useStyles();
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <Typography className={classes.brand}>CONTROLE FINANCEIRO</Typography>
        <IconButton onClick={handleDrawerOpen} style={{ color: "#FFFFFF" }}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <div className={classes.infoAccount}>
        <div>
          <Typography variant="h6">John Doe</Typography>
          johndoe@withinpixels.com
        </div>
        <Avatar
          alt="Remy Sharp"
          src="https://github.com/Tafarel-Brayan.png"
          className={classes.large}
        />
      </div>
      <List>{mainListItems}</List>
      <Divider />
      <List>{secondaryListItems}</List>
    </Drawer>
  );
};

export default SideBar;
