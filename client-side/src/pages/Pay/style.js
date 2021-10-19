import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({
    pay: {
        paddingLeft: 160,
        paddingRight: 160,
        [theme.breakpoints.down(376)]: {

            paddingLeft: 20,
            paddingRight: 20,


        },
        [theme.breakpoints.down(769)]: {

            paddingLeft: 30,
            paddingRight: 30,


        },
        [theme.breakpoints.down(1025)]: {

            paddingLeft: 40,
            paddingRight: 40,


        },

    },
    pay__title: {
        display: "flex",

        alignItems: "center",
        paddingTop: 64,
        paddingBottom: 48,
        [theme.breakpoints.down(376)]: {


            paddingTop: 0,

        },
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
        marginLeft: 20,
        [theme.breakpoints.down(376)]: {


            fontSize: 16,

        },
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
    pay__left__list: {
        display: "flex",
        "& >li": {
            padding: "0 5px",
            "& >img": {
                height: 10
            }
        }
    },


    pay__item__title: {
        fontSize: 22,
        lineHeight: "26px",
        fontWeight: 600
    },
    pay__item__style: {
        display: "flex",
        justifyContent: "space-between",

    },
    pay__item__style__title: {
        padding: "24px 0",
        borderTop: "1px solid rgb(221, 221, 221)",
        [theme.breakpoints.down(376)]: {

            borderTop: "8px solid rgb(221, 221, 221)",
            width: "100%"

        },
    },
    pay__text__style: {
        fontWeight: 600,
        fontSize: 16
    },
    pay__button__style: {
        textDecoration: "underline",
        fontWeight: 700,
        cursor: "pointer",
        color: "#222222",
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
    pay__radio__right: {



        transform: "translate(35%, -20%) !important",
        [theme.breakpoints.down(769)]: {

            transform: "translate(0, -10%) !important",


        },

    },
    pay__radio__right1: {
        transform: "translate(35%, -10%) !important",
        [theme.breakpoints.down(769)]: {

            transform: "translate(0, -5%) !important",


        },

    },
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
    },


    pay__right: {
        position: "sticky",
        top: 200,
        marginLeft: 60,
        marginBottom: 100,
        [theme.breakpoints.down(376)]: {

            marginLeft: 0,

        },
    },
    pay__right__img: {
        width: 115,
        height: 100,
        borderRadius: 8,
        [theme.breakpoints.down(376)]: {

            width: 100,
            height: 100,

        },
        [theme.breakpoints.down(769)]: {

            width: 90,
            height: 100,


        },
    },
    pay__right__style: {
        flex: "0 0 65%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        paddingBottom: 5,

        [theme.breakpoints.down(769)]: {

            paddingLeft: 15


        },
    },
    pay__right__text1: {
        [theme.breakpoints.down(376)]: {

            fontSize: 10

        },
        [theme.breakpoints.down(769)]: {

            fontSize: 9


        },
    },
    pay__right__text: {
        fontSize: 14,

        [theme.breakpoints.down(1025)]: {

            fontSize: 12


        },
    },
    pay__right__item: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 400,
        fontSize: 12,
    },
    pay__right__item__icon: {
        fontWeight: 400,
        fontSize: 15,
        color: "red",
        paddingRight: 2,
    },

    pay__right__table: {
        display: "table", marginBottom: 15
    },
    pay__right__table__item: {
        display: "table-cell", width: "100%"
    }


}))
