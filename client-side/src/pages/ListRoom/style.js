import { makeStyles } from '@material-ui/core/styles';
import { underLine } from '../Profile/underline';
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
    modal: {

    },
    root: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "rgb(34,34,34,0.5)",

    },

    check__info: {
        display: "flex",
        padding:"25px 0",
        ...underLine
    },









    modal__content: {
        width: "100%",
        maxWidth: 764,
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
        justifyContent: "center",
        alignItems: "center",
        padding: "0 24px",
        minHeight: 65,
        marginBottom: "50px",
        borderBottom: "1px solid rgb(235, 235, 235)",
        ...underLine,
        "& >p": {
            fontWeight: 800,
            fontSize: "1em",
        },
        "& > button": {
            padding: 6,
        },
    },
    icon: {
        position: "absolute",
        left: "1%",
    },
    modal__bedroom: {
        padding: "20px 0",
        ...underLine

    },
    modal__bedroom__item: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        width: "32px",
        height: "32px",
        cursor: "pointer",
        border: "1px solid rgb(113,113,113)",
        color: "rgb(113,113,113)",
        outline: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgb(255,255,255)",
        borderRadius: "50%"
    },
    modal__another: {
        padding: "20px 0",
        ...underLine
    },
    modal__convenient: {
        padding: "20px 0",
        ...underLine
    },



    modal__footer: {
        borderTop: "1px solid rgb(235, 235, 235) !important",
        display: "flex",
        padding: "16px 24px",
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: "16px",
        lineHeight: "20px"

    },



}))
