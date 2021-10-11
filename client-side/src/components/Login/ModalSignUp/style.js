import { makeStyles } from "@material-ui/styles";
export default makeStyles((theme) => ({
  // "@keyframes slide": {
  //   "0%": {
  //     transform: "translateY(100%)",
  //     opacity: 0,
  //   },
  //   "100%": {
  //     transform: "translateY(0)",
  //     opacity: 1,
  //   },
  // },
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "rgb(34,34,34,0.5)",
  },
  modal__content: {
    width: "100%",
    maxWidth: 560,
    borderRadius: 12,
    animation: "slide 0.4s linear",
    backgroundColor: "#fff",
    zIndex: 999,
    display: "flex",
    flexDirection: "column",
    margin: "30px 0",
  },
  modal__header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 24px",
    minHeight: 65,
    borderBottom: "1px solid rgb(235, 235, 235)",
    "& >p": {
      fontWeight: 800,
      fontSize: "1em",
    },
    "& > button": {
      padding: 6,
    },
  },
  modal__detail: {
    height: "100%",
    overflowY: "auto",
    padding: "24px",
    "& >h3": {
      fontSize: 22,
      lineHeight: "26px",
      color: "rgb(34,34,34)",
      marginBottom: 8,
      fontWeight: 600,
    },
  },
  form__input: {
    width: "100%",
    marginTop: 15,
  },
  form__radio: {
    flexDirection: "row",
    marginTop: 10,
    "& .MuiFormControlLabel-root": {
      marginLeft: 14,
    },
  },
  form__btnSubmit: {
    width: "100%",
    minWidth: 200,
    backgroundImage:
      "radial-gradient(circle at center center, rgb(255, 56, 92) 0%, rgb(230, 30, 77) 27.5%, rgb(227, 28, 95) 40%, rgb(215, 4, 102) 57.5%, rgb(189, 30, 89) 75%, rgb(189, 30, 89) 100%)",
    marginTop: 25,
    marginBottom: 5,
    borderRadius: 8,
    padding: 10,
    color: "#fff",
  },
  form__textLogin: {
    color: "#6363e8",
    marginLeft: 10,
  },
}));
