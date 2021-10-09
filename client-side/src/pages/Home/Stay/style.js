import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({
    root: {
        width: "100%",
        margin: "32px auto"
    },
    stay__title: {
        fontWeight: 700,
        lineHeight: "52px",
        letterSpacing: 0,
        paddingBottom: 16
    },
    stay__item: {
        padding: "7px",
        cursor: "pointer",

    },
    stay__img: {
        objectFit: "cover",
        borderRadius: "8px",
        width: "100%",
        height: "100%",
        // padding: "7px",
        // margin:7
    },
    stay__content: {
        fontWeight: 600,
        fontSize: "18px",
        lineHeight: "22px"
    }
}))
