import { makeStyles } from '@material-ui/core/styles';
import { underLine } from '../../Profile/underline';
export default makeStyles(theme => ({

    button__erase: {
        fontSize: 14,
        lineHeight: "20px",
        fontWeight: 600,
        padding: 10,
        borderRadius: 8,
        outline: "none",
        transition: "box-shadow 0.2s ease 0s",
        border: "none",
        backgroundColor: "transparent",
        color: "rgb(34, 34, 34)",
        textDecoration: "underline",
        cursor: "pointer",
        "&:hover": {
            border: "none",
            backgroundColor: "rgb(247, 247, 247)"
        }
    },
    checkbox: {
        padding: 0,
        color: "#000 !important",
        marginRight: 15,
        borderColor: "red !important",
        border: "none !important"
    },
    modal: {

    },

    modal__style: {
        overflowX: "hidden",
        paddingRight: "25px",
        paddingLeft: "25px",
    },
    modal__title__text: {
        color: "#222222",
        fontWeight: 500,
        lineHeight: "20px",
        fontSize: 20,
        marginBottom: 24
    },
    modal__style__content: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 0",

    },
    modal__style__checkbox: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "12px 0",

    },
    //phòng và phòng ngủ


    modal__bedroom__text: {
        width: "25px",
        margin: "0 5px",
        textAlign: "center",
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

    modal__text_style: {
        fontWeight: 600,
        textDecoration: "underline",
        borderRadius: 4,
        outline: "none",
        fontSize: 14,
        cursor: "pointer",
        padding: "5px 0"
    },
    // lựa chọn khác
    modal__another: {
        padding: "20px 0",
        ...underLine
    },

    modal__another__text: {
        fontSize: 14,
        lineHeight: "18px",
        fontWeight: 400,
        color: "rgb(113, 113, 113)"
    },

    // tiện nghi
    modal__convenient: {
        padding: "20px 0",
        ...underLine
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
        padding: "25px 0",
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




    modal__footer: {
        borderTop: "1px solid rgb(235, 235, 235) !important",
        display: "flex",
        padding: "16px 24px",
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: "16px",
        lineHeight: "20px"

    },
    button__modal__button: {
        padding: "14px 24px",
        backgroundColor: "rgb(34, 34, 34)",
        color: "rgb(255, 255, 255)",

        outline: "none",
        fontSize: 16,
        lineHeight: "20px0",
        fontWeight: 600,
        borderRadius: 8,
        cursor: "pointer",
        transition: "box-shadow 0.2s ease 0s",
        "&:hover": { backgroundColor: "rgb(0, 0, 0)" }

    },
    dropdown: {
        animation: "$myEffect 0.2s linear",
    },

    "@keyframes myEffect": {
        "0%": {
            transform: "translateY(-10%)",
            opacity: 0,
        },
        "100%": {
            transform: "translateY(0)",
            opacity: 1,
        },
    },
}))
