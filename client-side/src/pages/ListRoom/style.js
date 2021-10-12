import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({

    slider: {
        width: 100,
        color: "#f9ab00",
        marginTop: "25px",
        "& .MuiSlider-root": {
            padding: 0,
        },
        [theme.breakpoints.down("sm")]: {
            width: 150,
        },
    },
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




}))
