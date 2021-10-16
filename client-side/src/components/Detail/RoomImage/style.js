import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  room__title: {
    padding: "20px 0",
    "& > p": {
      fontSize: 26,
      lineHeight: "30px",
      fontWeight: 500,
      padding: (props) => (props.isMobile ? "10px 0" : "0 0 10px 24px"),
    },
  },
  room__content__rating: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    marginTop: 5,
    padding: (props) => (props.isMobile ? 0 : "0 24px"),
    "& .MuiButton-text": {
      padding: 0,
    },
  },
  room__content__rating__deskTop: {
    display: "block",
    marginBottom: "15px 0",
  },
  room__medal: {
    margin: "0 15px !important",
    "& >svg": {
      marginRight: 5,
      color: "#ff385c",
    },
  },
  room__userRating: {
    "& >button>span": {
      marginLeft: 5,
      fontSize: 13,
      textDecoration: "underline",
    },
    "& >svg": {
      marginRight: 5,
      color: "#ff385c",
    },
  },
  room__location: {
    marginTop: 10,
    textTransform: "inherit",
    "& >span": {
      textDecoration: "underline",
      textAlign: "left",
    },
  },
  room__image__content: {
    position: "relative",
    borderRadius: "12px",
    overflow: "hidden",
  },
  roomImage: {
    "& .slick-next,& .slick-prev": {
      display: "none !important",
    },
  },

  image: {
    height: "100%",
    cursor: "pointer",
    position: "relative",
    "& > img": {
      width: "100%",
      height: (props) => (props.isMobile ? "100%" : 250),
      minHeight: (props) => (props.isMobile ? 180 : 250),
      objectFit: "cover",
      cursor: "pointer",
    },
    "&:hover": {
      "&:after": {
        opacity: 1,
      },
    },
    "&:after": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "100%",
      opacity: 0,
      zIndex: 9,
      inset: 0,
      backgroundColor: "rgba(0,0,0,0.2)",
      transition: "all 0.3s ease-in-out",
    },
  },
  currentImg: {
    position: "absolute",
    bottom: 20,
    right: 20,
    color: "#fff",
    backgroundColor: "rgb(102 ,70, 70, 0.7)",
    width: 70,
    height: 20,
    padding: 5,
    textAlign: "center",
    borderRadius: 8,
    fontSize: 13,
    fontWeight: 600,
  },
  text_show_all_img: {
    backgroundColor: "#fff",
    color: "#000",
    width: 150,
    border: "1px solid #000",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    cursor: "pointer",
    padding: 10,
    zIndex: 99,
    "& >span": {
      fontSize: 15,
    },
  },
  modal__show__all: {
    width: "100%",
    height: "100%",
    animation: "slide 0.4s linear",
    backgroundColor: "#fff",
    zIndex: 999,
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
    overflowX: "hidden",
  },
  modal_show_all_img: {
    maxWidth: (props) =>
      props.isDeskTop ? 700 : props.isMobile ? 400 : "100%",
    margin: "0 auto",
  },
  btnPrev: {
    backgroundColor: "#fff",
    position: "fixed",
    width: "100%",
    padding: "10px 0 10px 10px",
    zIndex: 99,
    "& >svg": {
      cursor: "pointer",
      fontSize: 20,
    },
  },
}));
