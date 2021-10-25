import { makeStyles } from '@material-ui/core/styles';
import { underLine } from '../Profile/underline';
export default makeStyles(theme => ({

    //ROOT
    pay: {
        paddingTop: 80,
        paddingLeft: 160,
        paddingRight: 160,
        [theme.breakpoints.down(376)]: {

            paddingLeft: 0,
            paddingRight: 0,


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
            padding: "15px 0",
            position: "fixed",
            backgroundColor: "#fff",
            zIndex: 999,
            minWidth: 375,
        },
    },
    pay__content: {
        [theme.breakpoints.down(376)]: {

            padding: "75px 0px",


        },
    },
    pay__title__icon: {
        fontSize: 15,

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










    // CHUYẾN ĐI CỦA BẠN
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

    },


    // CHỌN CÁCH THANH TOÁN
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

    //THANH TOÁN BẰNG

    pay__left__payment: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "24px 0",
        borderTop: "1px solid rgb(221, 221, 221)",
        [theme.breakpoints.down(376)]: {

            borderTop: "8px solid rgb(221, 221, 221)",
            width: "100%"

        },
    },


    // CHÍNH SÁCH HỦY
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
    pay__item__content__text: {
        fontWeight: 700
    },



    //RIGHT
    pay__right: {
        position: "sticky",
        top: 150,
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
    },
    pay__left__list: {
        display: "flex",
        [theme.breakpoints.down(376)]: {

            display: "none"

        },
        "& >li": {
            padding: "0 5px",
            "& >img": {
                height: 10
            }
        }
    },

    footer__bot: {
        display: "flex",
        padding: "24px 160px",
        borderTop: "1px solid #DDDDDD",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "rgb(247, 247, 247)",
        [theme.breakpoints.down(1025)]: {

            display: "block",

        },
        [theme.breakpoints.down(744)]: {

            display: "block"


        },
        [theme.breakpoints.down(376)]: {
            display: "block",
            padding: "24px 30px",

        },
    },
    footer__item__list__first: {
        [theme.breakpoints.down(376)]: {
            display: "none"
        },
    },
    footer__item__list__end: {
        [theme.breakpoints.down(376)]: {
            flex: "0 0 30%"
        },
    },
    footer__item__bot: {
        // width: "45%",
        display: "flex",
        listStyle: "none",
        paddingRight: 10,
        textDecoration: "none",
        alignItems: "center",
        [theme.breakpoints.down(1025)]: {

            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "10px"

        },
        [theme.breakpoints.down(744)]: {

            display: "block"


        },
        [theme.breakpoints.down(376)]: {
            display: "flex",
            padding: "24px 30px",

        },

        "& li": {

            paddingLeft: 0,
            paddingRight: 0,

            "& a": {
                textDecoration: "none",
                color: "#222222",
                fontSize: 15,
                display: "block",
                paddingRight: "10px",
                whiteSpace: "nowrap",
                transition: "all .2s",
                lineHeight: "18px ",
                "&:hover": {
                    color: "inherit",
                    cursor: "pointer",
                    textDecoration: "underline"
                }
            },
            "& span": {
                textDecoration: "none",
                color: "#222222",
                fontSize: 15,
                display: "block",
                paddingRight: "10px",
                whiteSpace: "nowrap",
                transition: "all .2s",
                lineHeight: "18px ",

            }


        }
    },
    footer__bot__content: {
        [theme.breakpoints.down(1025)]: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"

        },
        [theme.breakpoints.down(744)]: {

            fontSize: "15px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",



        },
    },


    footer__bot__content1: {
        display: "flex",
        marginLeft: "32px",
        [theme.breakpoints.down(744)]: {

            display: "none"


        },
        "& ul": {
            listStyle: "none",
            padding: 0,
            textDecoration: "none",
            display: "flex",
            margin: 0,
            "& li": {
                marginRight: "24px",
                paddingLeft: 0,
                paddingRight: 0,
                "& a": {
                    textDecoration: "none",
                    color: "#222222",
                    fontSize: 15,
                    display: "block",

                    whiteSpace: "nowrap",
                    transition: "all .2s",
                    lineHeight: "18px ",
                    "&:hover": {
                        color: "inherit",
                        cursor: "pointer",
                        textDecoration: "underline"
                    }
                }
            }
        }
    },
    root: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
    },
    ButtonResult: {
        padding: 20
    },
    modal__header: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 24px",
        minHeight: 65,

        borderBottom: "1px solid rgb(235, 235, 235)",

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


}))
