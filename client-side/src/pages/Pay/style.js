import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({
    pay: {
        paddingLeft: 80,
        paddingRight: 80
    },
    pay__title: {
        display: "flex",

        alignItems: "center",
        paddingTop: 64,
        paddingBottom: 48,

    },
    pay__title__icon: {
        fontSize: 15,
        // position: "absolute",

        // top: "50%",
        // left: "50%",
        // transform: "translate(-50%, -50%) !important"

    },
    pay__title__text: {
        fontSize: 32,
        lineHeight: "20px",
        fontWeight: 600,
        color: "#222222",
        marginLeft: 20
    },


    pay__left__noti: {
        border: "1px solid rgb(221, 221, 221)",
        borderRadius: 12,
        padding: 24,
        marginBottom: 24
    },
    pay__left__noti__content: {
        display: "flex"
    },
    pay__left__noti__content__left: {

        "&>h6": {
            fontSize: 14,
            lineHeight: "20px",



        },

    },
    pay__left__noti__text: {
        fontSize: 16,
        lineHeight: "20px",
        fontWeight: 600,
        marginBottom: 8
    },
    pay__left__noti__content__right: {
        marginLeft: 20
    },
    pay__item: {
        paddingBottom: 24
    },



    pay__item__title: {
        fontSize: 22,
        lineHeight: "26px",
        fontWeight: 600
    },
    pay__item__style: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%"
    },
    pay__item__style__title: {
        padding: "24px 0",
        borderTop: "1px solid rgb(221, 221, 221)"
    },
    pay__text__style: {
        fontWeight: 600,
        fontSize: 16
    },
    pay__button__style: {
        textDecoration: "underline",
        fontWeight: 600,
        cursor: "pointer",
        "&:active": {
            color: " rgb(113, 113, 113)",
        }
    },


    pay__radio__top: {
        border: "1px solid rgb(221, 221, 221)",
        borderRadius: "8px 8px 0 0",
        padding: 16,
        display: "flex",
        justifyContent: "space-between",
        position: "relative"

    },
    pay__radio__bot: {
        border: "1px solid rgb(221, 221, 221)",
        borderRadius: "0px 0px 8px 8px",
        padding: 16,
        display: "flex",
        justifyContent: "space-between",
        position: "relative",



    },
    pay__radio__right__item: {
        appearance: "none",
        borderStyle: "solid",
        overflow: "hidden",
        borderRadius: "50%",
        verticalAlign: "top",
        outline: "none",
        borderColor: "rgb(34, 34, 34)",
        borderWidth: 7,
        backgroundColor: "#fff",
        cursor: "pointer",
        height: 22,
        width: 22,
        flex: "0 0 auto",
        margin: 0
    },
    // pay__radio__right: {



    //     transform: "translate(60%, -12%) !important",
    //     flexGrow: "1 1 auto"
    // },
    pay__radio__style: {
        fontSize: 15
    },
    pay__button__confirm: {
        fontSize: 16,
        lineHeight: "20px",
        fontWeight: 600,
        borderRadius: 8,
        padding: "14px 24px",
        outline: "none",
        transition: "box-shadow 0.2s ease 0s",
        background: "linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%) !important",
        color: "rgb(255, 255, 255) !important",
        "&:hover": {
            opacity: 0.8
        }
    }

}))
