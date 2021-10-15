import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  container: {
    padding: "0 24px",
    [theme.breakpoints.up("md")]: {
      padding: 0,
    },
  },
  room__info: {
    borderTop: "1px solid rgb(221, 221, 221,1) ",
    padding: "24px 0",
  },
  room__info__host: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 10,

    "& >div >p": {
      fontSize: 16,
      lineHeight: "20px",
      fontWeight: 600,
      marginBottom: 8,
    },
  },
  avatar__host: {
    width: 30,
    height: 30,
    borderRadius: "50%",
    position: "relative",
  },
  medal__host: {
    position: "absolute",
    bottom: 15,
    right: -5,
    fontSize: 25,
    color: "orange",
  },
  room__utilities: {
    borderTop: "1px solid rgb(221, 221, 221,1) ",
    padding: "24px 0",
  },
  room__utilities_content: {
    display: "flex",
    width: "100%",
    padding: "15px 0",
    "& >div>svg": {
      fontSize: 30,
      marginRight: 15,
    },
    "& >div>p": {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: "20px",
    },
    "& >div>span": {
      fontSize: 13,
      lineHeihgt: 1.5,
      color: "rgb(113, 113, 113)",
    },
  },
  room_description: {
    borderTop: "1px solid rgb(221, 221, 221,1) ",
    padding: "24px 0",
  },
  room__bedroom: {
    borderTop: "1px solid rgb(221, 221, 221,1) ",
    padding: "24px 0",
    "& >h5": {
      fontSize: 20,
      fontWeight: 600,
      lineHeight: "20px",
      paddingBottom: 14,
    },
  },
  room__bedroom__content: {
    border: "1px solid rgb(221, 221, 221)",
    borderRadius: 12,
    padding: "10px 16px",
    marginRight: 10,
    "& >div>svg": {
      fontSize: 40,
      color: "#6e6c6c",
    },
  },
  room__bedroom__detail: {
    padding: "15px 0",

    "&>p": {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: "20px",
    },
    "&>span": {
      fontSize: 13,
      color: "#6e6c6c",
    },
  },
  room__reviews: {
    borderTop: "1px solid rgb(221, 221, 221,1) ",
    padding: "24px 0",
    "& >h1": {
      fontWeight: 600,
      fontSize: 20,
      lineHeihgt: "20px",
      padding: "15px 0",
    },
  },
  room__reviews__content: {
    display: "flex",
    alignItems: "center",
    marginTop: 10,

    "& >svg": {
      fontSize: 30,
      color: "#6e6c6c",
      marginRight: 15,
    },
  },
  room__reviews__title: {
    fontSize: 15,
  },
  room_reviews__title__linethrough: {
    textDecoration: "line-through",
  },

  room_datepicker: {
    borderTop: "1px solid rgb(221, 221, 221,1) ",
    padding: "24px 0",
    "& >h1": {
      fontWeight: 600,
      fontSize: 20,
      lineHeihgt: "20px",
      paddingTop: 15,
      paddingBottom: 5,
    },
    "& >span": {
      color: "#6e6c6c",
      fontSize: 15,
      marginRight: 10,
    },
    "& .PrivatePickersSlideTransition-root": {
      minHeight: 230,
    },
  },
  rooom__datepicker__btnDelete: {
    textAlign: "left",
    [theme.breakpoints.up("sm")]: {
      textAlign: "right",
      padding: "0 80px",
    },
    [theme.breakpoints.up("xl")]: {
      padding: "0 24px",
    },
    "& >button": {
      textDecoration: "underline",
      textTransform: "initial",
    },
  },
  room__booking: {
    marginTop: 48,
    marginBottom: 80,
    width: "100vw",
    height: "100%",
    marginLeft: "8.3%",
    position: "sticky",
    top: "48px",
  },
}));
