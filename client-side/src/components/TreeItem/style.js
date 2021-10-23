import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  labelRoot: {
    display: "flex",
    alignItems: "center",
    padding: 5,
    justifyContent: "space-between",
    width: "100%",
  },
  labelIcon: {
    marginRight: 10,
    fontSize: 20,
  },
  labelText: {
    fontWeight: "inherit",
    flexGrow: 1,
  },
}));
