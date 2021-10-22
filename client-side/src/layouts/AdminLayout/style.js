import { makeStyles } from "@material-ui/core";
const drawerWidth = 300;
export default makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "15px 0 15px 20px",
    ...theme.mixins.toolbar,
    justifyContent: "space-between",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },

  logo: {
    flexGrow: 1,
    "&>img": {
      width: 100,
      height: 30,
    },
  },

  activeNavLinK: {
    backgroundColor: theme.palette.grey[300],
  },
  nested: {
    paddingLeft: theme.spacing(4),
    "& .MuiListItemIcon-root": {
      minWidth: 40,
      fontSize: 20,
    },
  },
  button__chip: {
    backgroundColor: (props) =>
      props.homepageRoute && props.scroll ? "transparent" : "#fff",
    border: "1px solid #DDDDDD",
    color: "222222",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "5px 5px 5px 12px",
    borderRadius: "21px",
    height: "42px",
    width: "75px",
    "&:hover": {
      boxShadow: "0px 2px 4px rgb(0 0 0 / 18%)",
    },
  },

  link: {
    color: "#000",
  },
  active: {
    color: "red ",
  },
  menu: {
    "& .MuiPaper-root": {
      borderRadius: "12px",
      backgroundColor: "#fff",
      boxShadow: "0px 6px 20px rgb(0 0 0 / 20%)",
      overflowX: "hidden",
      overflowY: "auto",
      padding: 10,
      width: 200,
    },
    "& .MuiList-root ": {
      width: "100%",
    },
  },
  avatar: {
    width: 30,
    height: 30,
  },
}));
