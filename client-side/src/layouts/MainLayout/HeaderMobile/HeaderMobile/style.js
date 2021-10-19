import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  content: {
    position: "fixed",
    zIndex: 999,
    backgroundColor: (props) => (props.isScrolled ? "#fff" : "transparent"),
    padding: "16px 24px",
    top: 0,
    right: 0,
    left: 0,
    transition: "all 0.3s ease-in",
  },
  btnSearch: {
    "& > button": {
      width: "100%",
      padding: "10px 30px",
      borderRadius: 24,
      textTransform: "initial",
      border: "1px solid rgb(247, 247, 247)",
      backgroundColor: "rgb(247, 247, 247)",
      fontWeight: 600,
    },
    "& .MuiButton-startIcon": {
      color: "#FF385C",
    },
    "& .MuiButton-root:hover": {
      backgroundColor: "#fff",
    },
  },
  modal: {
    paddingTop: "48px",
    "& >div:first-child": {
      backgroundImage:
        "radial-gradient(circle at center center, rgb(255, 56, 92) 0%, rgb(230, 30, 77) 27.5%, rgb(136 1 147) 40%, rgb(215, 4, 102) 57.5%, rgb(136 1 147) 75%, rgb(189, 30, 89) 100%)",
      zIndex: -1,
    },
  },
  modal__header: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    zIndex: 999,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },

  modal__search: {
    padding: "16px 24px 0 24px",
    background: "rgb(255, 255, 255)",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    display: "flex",
    alignItems: "center",
    "& >svg": {
      cursor: "pointer",
      fontSize: 20,
      marginRight: 15,
    },
  },
  modal__autocomplete: {
    width: "100%",
    "& .MuiInput-underline:after, .MuiInput-underline:before,.MuiButtonBase-root":
      {
        display: "none",
      },
  },

  modal__list__search: {
    "& >p": {
      padding: "12px 24px 0 24px",
      fontWeight: 600,
    },
  },
  modal__locations_searched: {
    display: "flex",
    alignItems: "center",
    padding: "0 24px",
    paddingTop: 12,
  },
  modal__locations__searched__icons: {
    marginRight: 12,
    backgroundColor: "rgb(241, 241, 241)",
    padding: 12,
    borderRadius: 8,
    "& >svg": {
      fontSize: 20,
    },
  },
  modal__locations__searched__name: {
    fontSize: 16,
    cursor: "pointer",
  },
}));
