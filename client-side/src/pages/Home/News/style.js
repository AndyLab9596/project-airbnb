import { makeStyles } from "@material-ui/styles";
export default makeStyles((theme) => ({
  news: {
    width: "100%",
    height: 480,
    position: "relative",
    [theme.breakpoints.down("lg")]: {
      height: 400,
    },
    [theme.breakpoints.down("sm")]: {
      height: 360,
    },
  },
  news__overlay: {
    width: "100%",
    height: "auto",
    backgroundColor: "rgb(72, 72, 72,1)",
    position: "relative",
    borderRadius: 16,
  },
  news__backdrop: {
    width: "100%",
    objectFit: "cover",
    objectPosition: "50% 50%",
    verticalAlign: "bottom",
    borderRadius: 16,
  },
  news__title: {
    position: "absolute",
    inset: 0,
    width: 400,
    padding: "0 80px",
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    color: "#fff",
    [theme.breakpoints.down("lg")]: {
      width: 350,
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      inset: "-1px 0",
      width: "auto",
    },

    "& >h2": {
      fontWeight: 600,
      fontSize: 48,
      lineHeight: "52px",
      [theme.breakpoints.down("lg")]: {
        fontSize: 30,
        lineHeight: "36px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: 12,
        lineHeight: "20px",
      },
    },
    "& >p": {
      paddingTop: 12,
      fontSize: 18,
      lineHeight: "24px",
      [theme.breakpoints.down("lg")]: {
        fontSize: 16,
        lineHeight: "20px",
      },
    },
  },
  news__content__btn: {
    marginTop: 40,
    [theme.breakpoints.down("lg")]: {
      marginTop: 20,
    },
  },
  news__btn: {
    backgroundColor: "#fff !important",
    color: "rgb(72,72,72,1)",
    fontSize: 16,
    padding: "14px 24px",
    borderRadius: 8,

    [theme.breakpoints.down("lg")]: {
      padding: "7px 13px",
      fontSize: 14,
    },
  },
}));
