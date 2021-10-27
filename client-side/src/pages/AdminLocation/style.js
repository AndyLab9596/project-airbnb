import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tablerow: {
    "&:hover": {
      backgroundColor: "#ededf6",
    },
    "& >td >p": {
      cursor: "pointer",
    },
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: 600,
    paddingBottom: 20,
  },
  avatar: {
    width: 70,
    height: 70,
    objectFit: "cover",
  },
  pagination: {
    justifyContent: "center",
    display: "flex",
  },
}));
