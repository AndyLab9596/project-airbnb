import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  slider: {
    "& .slick-slide": {
      "& >div": {
        marginRight: 45,
      },
    },
  },
  modal: {
    [theme.breakpoints.up("md")]: {
      padding: 40,
    },
    [theme.breakpoints.up("xl")]: {
      padding: "40px 120px",
    },
  },
  room__rating: {
    borderTop: "1px solid rgb(221, 221, 221,1) ",
    padding: "24px",
    [theme.breakpoints.up("md")]: {
      padding: "24px 0",
    },
    "& .slick-next,& .slick-prev": {
      display: "none !important",
    },
  },
  room__rating__totalRated: {
    padding: "15px 0",
    "& >span": {
      fontSize: 20,
      fontWeight: 600,
      "& >svg": {
        marginRight: 5,
        fontSize: 17,
        color: "#ff385c",
      },
    },
  },
  room__rating__container: {
    border: "1px solid #d0c7c7",
    borderRadius: 12,
    padding: 15,
    marginTop: 10,
    height: 200,
  },
  room__rating__textShowAll: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    fontSize: 18,
    fontWeight: 600,
    textDecoration: "underline",
    cursor: "pointer",
  },
  room__rating_avatar: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    objectFit: "cover",
  },
  room__rating__infoUser: {
    display: "flex",
    alignItems: "center",
    marginBottom: 10,
  },
  room__rating__createAt: {
    marginLeft: 10,
    "& >p": {
      fontWeight: 600,
      fontSize: 16,
      lineHeight: "20px",
    },
    "& >span": {
      fontSize: 14,
      color: "#999",
    },
  },
  room__rating__content: {
    "& >p": {
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "20px",
      marginTop: 5,
    },
  },
  room__rating__modal: {
    height: "100%",
    animation: "slide 0.4s linear",
    backgroundColor: "#fff",
    zIndex: 999,
    display: "flex",
    flexDirection: "column",
    overflowX: "hidden",
    padding: "0px 24px",
    margin: "10px 0",
    borderRadius: 12,
  },
  room__rating__modal__header: {
    backgroundColor: "#fff",
    position: "sticky",
    top: 0,
    width: "100%",
    marginBottom: 15,
    zIndex: 99,
    "& >svg": {
      cursor: "pointer",
      fontSize: 20,
    },

    [theme.breakpoints.up("xl")]: {
      "& >div": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      },
      "& $room__rating__modal__inputSearch": {
        width: "57%",
      },
    },
  },
  room__rating__btnShowAll: {
    width: "100%",
    border: "2px solid #999",
    borderRadius: 8,
    marginTop: 20,
    padding: 10,
    textTransform: "initial",
    fontWeight: 600,
    fontSize: 16,
    [theme.breakpoints.up("md")]: {
      width: "auto",
      padding: "13px 23px",
    },
  },
  room__rating__modal__inputSearch: {
    boxShadow: "rgb(176 176 176) 0px 0px 0px 1px inset",
    backgroundColor: "rgb(247, 247, 247)",
    borderRadius: 20,
    padding: "6px 10px",
    "&:focus-within": {
      outline: "1px solid #000",
    },
    "& .MuiInput-underline:after,.MuiInput-underline:before": {
      display: "none",
    },
    "& .MuiInputAdornment-root": {
      fontSize: 22,
      marginLeft: 10,
    },
    "& .MuiInputBase-input": {
      "&::placeholder": {
        color: "rgb(34, 34, 34)",
        fontSize: 14,
        fontWeight: 400,
      },
    },
  },
  room__rating__modal__detailRating: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 13,
    paddingRight: 20,

    "& >span": {
      width: "100%",
      fontSize: 13,
      [theme.breakpoints.up("md")]: {
        fontSize: 16,
        fontWeight: 600,
      },
    },
  },
  room__rating__modal__content__userRated: {
    [theme.breakpoints.up("xl")]: {
      paddingLeft: "10%",
    },
    "& >div": {
      marginBottom: 20,
    },
  },
}));
