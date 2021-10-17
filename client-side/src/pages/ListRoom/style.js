import { makeStyles } from '@material-ui/core/styles';
import { underLine } from '../Profile/underline';
export default makeStyles(theme => ({
    root: {
        paddingTop: '80px',
    },
    button__display: {
        display: props => props.isDesktop ? "none" : "block"
    },
    display: {
        position: "fixed",
        bottom: 48,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    },
    button: {
        borderRadius: 24,
        border: "1px solid rgba(0, 0, 0, 0.08)",
        padding: "14px 39px 14px 19px",
        // padding: "14px 19px",
        cursor: "pointer",
        backgroundColor: "rgb(34, 34, 34)",
        color: "rgb(255, 255, 255)",
        transition: "transform 0.25s ease 0s",
        display: props => props.display ? "none" : "block",
        "& > span": {
            fontSize: 15
        },
        animation: "$myEffect 0.2s linear",
    },
    "@keyframes myEffect": {
        "0%": {
            transform: "scale(0)",
            opacity: 0,
        },
        "100%": {
            transform: "scale(1)",
            opacity: 1,
        },
    },
    button__map: {
        borderRadius: 24,
        border: "1px solid rgba(0, 0, 0, 0.08)",
        padding: "14px 39px 14px 19px",
        // padding: "14px 19px",
        cursor: "pointer",
        backgroundColor: "rgb(34, 34, 34)",
        color: "rgb(255, 255, 255)",
        display: props => props.display ? "block" : "none",
        "& > span": {
            fontSize: 15
        },
        animation: "$myEffectMap 0.2s linear",
    },
    "@keyframes myEffectMap": {
        "0%": {
            transform: "scale(0)",
            opacity: 0,
        },
        "100%": {
            transform: "scale(1)",
            opacity: 1,
        },
    },
    icons: {
        color: "#fff",
        fontSize: 20,
        paddingLeft: 5,
        position: "absolute",
        bottom: 15,
    },
    grid__list: {
        padding: "0 25px",
        display: props => props.display ? "none" : "block",
    },
    // grid__map: {
    //     display: props => props.display ? "block" : "none",
    // }

}))
