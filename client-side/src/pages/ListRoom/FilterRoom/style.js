import { makeStyles } from '@material-ui/core/styles';
import { underLine } from '../../Profile/underline';

export default makeStyles(theme => ({


    modal: {
        
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
    
}))
