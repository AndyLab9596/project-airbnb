import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({
    root: {
        display: "flex",
        justifyContent: "center",
        borderBottom: "1px solid #DDDDDD",
        paddingBottom: 25,
    },
    paper: {
        marginTop: theme.spacing(0),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    textfield: {
        marginTop: theme.spacing(2),
    },
    button: {
        marginTop: 8,
    },
    hyperText: {
        color: "red",
        textAlign: "left",
        margin: 0
    },
    add_content: {
        display: props => props.activeStep !== 0 ? "none" : "block"
    },
    add_title: {
        marginTop: 10
    }



}))
