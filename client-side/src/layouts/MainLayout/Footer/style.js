import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({
    footer: {
        marginTop: "20px",
        backgroundColor: "#F7F7F7",
        borderTop: "1px solid #DDDDDD",

    },
    footer__title: {
        fontSize: "14px",
        fontWeight: "bold",
        textTransform: "uppercase",
        color: "#222222"
    },
    // footer__item: {
    //     // width: "calc(100%/3)"
    // },
    footer__content: {
        [theme.breakpoints.down(1180)]: {
            paddingTop: "20px",
            borderTop: "1px solid #DDDDDD",

        },
    },
    footer__item: {
        // width: "45%",



        "& ul": {
            listStyle: "none",
            padding: 0,
            textDecoration: "none",
            display: "block",
            [theme.breakpoints.down(1180)]: {

                display: "flex",
                flexWrap: "wrap",


            },
            [theme.breakpoints.down(744)]: {

                display: "block"


            },
            "& li": {
                marginTop: "16px",
                paddingLeft: 0,
                paddingRight: 0,
                [theme.breakpoints.down(1180)]: {
                    flexBasis: "calc(100%/3)",



                },
                "& a": {
                    textDecoration: "none",
                    color: "#222222",
                    fontSize: 12,
                    display: "block",
                    width: "100%",
                    whiteSpace: "nowrap",
                    transition: "all .2s",
                    lineHeight: "18px",

                    "&:hover": {
                        color: "inherit",
                        cursor: "pointer",
                        textDecoration: "underline"
                    }
                }
            }
        }
    },
    footer__bot: {
        display: "flex",
        padding: "24px 0",
        borderTop: "1px solid #DDDDDD",
        justifyContent: "space-between",
        alignItems: "center",
        [theme.breakpoints.down(1180)]: {

            display: "block",

        },
        [theme.breakpoints.down(744)]: {

            display: "block"


        },
    },
    footer__item__bot: {
        // width: "45%",
        display: "flex",
        listStyle: "none",
        paddingRight: 10,
        textDecoration: "none",
        alignItems: "center",
        [theme.breakpoints.down(1180)]: {

            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "10px"

        },
        [theme.breakpoints.down(744)]: {

            display: "block"


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
        [theme.breakpoints.down(1180)]: {
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
    }

}))
