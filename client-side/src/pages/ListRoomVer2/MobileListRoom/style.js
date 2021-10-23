import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({
    root: {
        position: 'relative',
    },

    map: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 0,
    },

    mapBox: {
        width: '100%',
        height: '40vh',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    content__top__transparent: {
        height: '40vh',
        appearance: 'none',
        backgroundColor: 'transparent',
        border: 0,
        display: 'block',
        margin: 0,
        outline: 'none',
        width: '100%',
        zIndex: -1
    },

    content: {
        position: 'relative',
        zIndex: 0,
        display: 'flex',
        background: 'rgb(255, 255, 255)',
        width: '100%',
        // borderTopLeftRadius: '24px',
        // borderTopRightRadius: '24px',
        minHeight: 'calc(60vh + 65px)',
    },

    wrapper: {
        minHeight: '30xp',
        width: '100%',
        position: 'unset',
        // borderTopLeftRadius: '24px',
        // borderTopRightRadius: '24px',
    },

    header: {
        height: '72px',
        // borderTopLeftRadius: '24px',
        // borderTopRightRadius: '24px',
        position: 'relative',

        '&::before': {
            content: '""',
            display: 'block',
            position: "absolute",
            top: '8px',
            right: '50%',
            transform: 'translateX(50%)',
            width: '40px',
            height: '4px',
            borderRadius: '4px',
            backgroundColor: 'rgba(32, 32, 32, 0.2)'
        }

    },

    header__content: {
        paddingLeft: '24px',
        paddingRight: '24px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottom: '1px solid #EBEBEB',
        marginLeft: '24px',
        marginRight: '24px',
        minHeight: '64px',
        textAlign: 'center',
    },

    header__content__text: {
        fontSize: '16px',
        margin: 0,
        padding: 0,
    },





}))
