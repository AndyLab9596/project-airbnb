import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({
    root: {
        paddingTop: '80px',
        position: 'relative',
        display: 'flex',
    },

    content: {
        height: '100vh',
        backgroundColor: 'blue',
        flex: '1 1 60%'
    },

    map: {
        // backgroundColor: 'red',
        flex: '1 1 40%',
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
    },

    mapBox: {
        // width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'sticky',
        top: 0,
    }



}))
