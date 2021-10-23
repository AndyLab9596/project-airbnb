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
        maxWidth: '640xp',
        marginLeft: 0,
        marginRight: 0,
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

    },

    section: {
        width: '85vw',
        margin: '8px auto',
    },

    card: {
        position: 'relative',
        marginTop: '8px',

    },
    card__media: {
        position: 'relative',

    },

    card__media__img: {
        display: 'block',
        objectFit: 'cover',
        width: '100%',
        borderRadius: '12px',
    },

    card__content: {
        marginTop: 10,

    },

    card__content_evaluate: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: '14px',
        lineHeight: '18px',
        marginBottom: '6px',
        '& > span': {
            marginRight: '4px'
        }
    },

    card__content__name: {
        '& > h3': {
            margin: '0',
            fontSize: '18px',
            lineHeight: '24px',
            color: '#222222',
            fontWeight: 400
        },

    },

    card__content__price: {
        marginTop: '4px',
        fontSize: '18px',
        lineHeight: '24px',
        fontWeight: 600,
        color: '#222222',
        '& > p': {
            margin: 0,
        },
        '& >span': {
            color: '#717171'
        }

    }














}))
