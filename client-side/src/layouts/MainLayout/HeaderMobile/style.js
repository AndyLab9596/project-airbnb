import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  overlay: {
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: "100",
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(255, 255, 255)",
    transition: "all .5s linear",
    transform: (props) => (props.show ? "translateY(0)" : "translateY(-100%)"),
    opacity: (props) => (props.show ? 1 : 0),
  },

  overlay__wrapper: {
    position: "relative",
    width: "100%",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    padding: "16px 24px 0",
  },

  overlay__searchBar: {
    display: "flex",
    alignItems: "stretch",
    height: "48px",
    width: "100%",
  },

  overlay__searchBar__button: {
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    height: "45px",
    width: "45px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all .5 linear",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgb(247, 247, 247) ",
    },
  },

  overlay__searchBar__inputField: {
    display: "flex",
    alignItems: "center",
    "&>input": {
      fontSize: "16px",
      fontWeight: 400,
      paddingLeft: "8px",
      paddingRight: "8px",
      border: "none",
      outline: "none",
      height: "100%",
      width: "100%",
    },
  },

  root: {
    position: "fixed",
    left: 0,
    right: 0,
    top: 20,
    zIndex: "100",
    maxWidth: "100vw",
    padding: "16px 24px",
    opacity: (props) => (!props.show ? 1 : 0),
    visibility: (props) => (!props.show ? "visible" : "hidden"),
  },

  header: {
    position: "relative",
    backgroundColor: "rgb(255, 255, 255)",
    border: "1px solid rgb(255, 255, 255)",
    borderRadius: "24px",
    width: "100%",
    height: "48px",
  },

  button: {
    position: "relative",
    cursor: "pointer",
    width: "100%",
    height: "100%",
    borderRadius: "24px",
    backgroundColor: "transparent",
    outline: "none",
    border: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&>span": {
      fontSize: "14px",
      lineHeight: "18px",
      fontWeight: 600,
      color: "rgb(34. 34, 34)",
    },
  },

  button__icon: {
    color: theme.palette.secondary.main,
    marginRight: "8px",
  },

  rootBottom: {
    position: "fixed",
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: "100",
    maxWidth: "100vw",
    width: "100%",
    opacity: (props) => (!props.show ? 1 : 0),
    visibility: (props) => (!props.show ? "visible" : "hidden"),
  },

  headerBottom: {
    position: "relative",
    backgroundColor: "rgb(255, 255, 255)",
    border: "1px solid rgb(255, 255, 255)",
    width: "100%",
    minHeight: "80px",
    height: "80px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  headerBottom__button: {
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    cursor: "pointer",
    "&>p": {
      margin: "0 auto",
      fontWeight: 600,
    },
  },

  headerBottom__button__icon: {
    color: theme.palette.secondary.main,
    fontSize: "22px",
  },
}));
