import { makeStyles } from '@material-ui/core/styles';
import { underLine } from './underline';
export default makeStyles(theme => ({
    profile: {
        marginTop: "100px"
    },
    root: {
        maxWidth: 308,
        padding: 14,
        borderRadius: 12,
        marginRight: "25px",
        marginLeft: 0,

    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 8,
        fontSize: 18,
        lineHeight: "28px",
        fontWeight: 800
    },
    large: {
        width: 125,
        height: 125,
        textAlign: "center"
    },
    profile__top: {
        paddingBottom: 30,
        ...underLine
    },
    profile__text: {
        color: "#222222",
        textDecoration: "underline",
        borderRadius: "4px",
        fontWeight: 600,
        outline: "none",
        fontSize: 13
    },
    profile__text1: {
        fontSize: 16,
        lineHeight: "20px",
        marginBottom: 16
    },
    profile__button: {
        border: "1px solid #DDDDDD",
        padding: "10px 18px"
    },

    profile__left: {
        marginLeft: 25,
        maxWidth: 632

    },
    profile__title: {
        fontSize: 32,
        lineHeight: "36px",
        fontWeight: 600,
        marginBottom: 8
    },
    profile__text3: {
        fontSize: 14,
        lineHeight: "18px",
        color: "#717171",
        marginBottom: 8
    },
    profile__left__item: {
        display: "flex",
        position: "relative",
        paddingBottom: "25px",
        ...underLine
    },
    profile__left__item2: {
        display: "flex",
        position: "relative",
        padding: "25px 0",
        ...underLine
    },
    //Mobile
    large2: {
        width: 85,
        height: 85,
        textAlign: "center"
    },
    profile__mobile: {
        maxWidth: 632,
        margin: "auto",
        [theme.breakpoints.down(769)]: {

            minHeight:"85vh",
            marginTop:"20%"

        },
        [theme.breakpoints.down(1025)]: {

            minHeight:"85vh",
            marginTop:"20%"

        },
        [theme.breakpoints.down(376)]: {

            margin: "0 25px",

        },


    },
    profile__mobile__title: {
        fontSize: 32,
        lineHeight: "36px",
        fontWeight: 600,
        marginBottom: 8,
        [theme.breakpoints.down(376)]: {

            fontSize: 24

        },
    },
    profile__mobile__item: {
        display: "block",
        paddingTop: 20,
        ...underLine
    },





}))
