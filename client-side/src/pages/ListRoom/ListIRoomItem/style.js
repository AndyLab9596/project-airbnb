import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    room__item__img: {
        width: "100%",
        borderRadius: "10px"
    },
    room__item__left: {

        marginLeft: 16
    },
    room__item__title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title__text: {
        fontSize: 14,
        lineHeight: "18px",
        color: "rgb(113, 113, 113) !important",


    },
    title__text__desc: {
        color: "#222222",
        lineHeight: "24px",
        fontSize: 17,

    },
    room__item__line: {
        marginTop: 11,
        width: 32,
        borderTop: "1px solid rgb(221, 221, 221)",
    },
    room__item__desc: {
        marginTop: 9,

        "& >ul": {
            display: "flex",
            margin: "0 !important",
            padding: "0 0 0 16px",
            justifyContent: "left",
            "& > li": {
                marginRight: 25,
                alignItems: "center",
                color: "rgb(113, 113, 113) !important",
                fontSize: 14,
                fontWeight: 400,
                lineHeight: "18px",

            }
        }
    },
    room__item__bot: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        flexGrow: 1,
        height: "130px",
    },
    room__item__bot__style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }

}))
