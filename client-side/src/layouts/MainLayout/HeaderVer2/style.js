import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },

    appBar: {
        height: 80,
    },

    appBarFixed: {
        position: "fixed",
        top: 0,
        backgroundColor: 'transparent',
    },

    wrapper: {
        paddingLeft: 40,
        paddingRight: 40,
        [theme.breakpoints.up("xl")]: {
            paddingLeft: 80,
            paddingRight: 80,
        },
        display: 'flex',
        alignItems: 'center',

    },

    imageIcon: {
        height: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        [theme.breakpoints.up("xl")]: {
            flex: '0 0 275px'
        },
    },

    imageIcon__img: {
        display: 'block',
        width: 102,
        height: 32,
        objectFit: 'cover',
    },

    navigation: {
        flex: '1 1 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    navigation__list: {
        display: 'flex',
        alignItems: 'center',
        listStyleType: 'none',

        '& > li > a': {
            opacity: .8,
        },

        '& > li:first-child > a': {
            opacity: 1,
        },

        '& > li:first-child > a::before': {
            content: "''",
            display: 'block',
            position: 'absolute',
            bottom: -15,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 16,
            height: 2,
            backgroundColor: '#fff',
            transition: 'all .4s ease-in',
        },
    },

    navigation__list__item: {
        padding: '10px 16px',
        '& > a': {
            color: '#fff',
            fontSize: '16px',
            lineHeight: '20px',
            fontWeight: 400,
            position: 'relative',
        },
        '& > a:hover': {
            opacity: 1,
            transition: 'hover .4s ease-in'
        },
        '& > a:hover::before': {
            content: "''",
            display: 'block',
            position: 'absolute',
            bottom: -15,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 8,
            height: 2,
            backgroundColor: '#fff',
            transition: 'all .4s ease-in',
        },
    },

    profile: {
        display: 'flex',
        alignItems: 'center',
    },

    profile__btn: {
        backgroundColor: 'transparent',
        outline: 'none',
        border: 'none',
        padding: 12,
        color: '#fff',
        fontSize: 14,
        fontWeight: 600,
        borderRadius: 22,
        transition: 'all .3s linear',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            borderRadius: 22,
            transition: 'all .3s linear'
        }
    },

    profile__language: {
        backgroundColor: 'transparent',
        outline: 'none',
        border: 'none',
        padding: 12,
        color: '#fff',
        fontSize: 12,
        lineHeight: '12px',
        fontWeight: 600,
        borderRadius: '50%',
        transition: 'all .3s linear',
        cursor: 'pointer',
        margin: '0 4px',
        textAlign: 'center',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            borderRadius: '50%',
            transition: 'all .3s linear'
        }
    },

    profile__menuToggle: {
        padding: '5px 5px 5px 12px',
        border: '1px solid #DDDDDD',
        backgroundColor: '#ffffff',
        borderRadius: 21,
        height: 42,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
        '&:hover': {
            boxShadow: '0px 2px 4px rgb(0 0 0 / 18%)',
            transition: 'box-shadow 0.25s ease',
        },
        position: 'positive',

    },

    profile__menuToggle__account: {
        flex: '0 0 30px',
        width: 30,
        marginLeft: 8,
        color: '#717171',
        fontSize: 28
    },

    popper: {
        top: '10px !important',
        left: '-80px !important',
        borderRadius: 22,
        overflow: 'hidden',
        zIndex: 2,

    },

    menu: {

    },

    menuList: {
        minWidth: 240,
        border: '1px solid rgb(221, 221, 221)',
        backgroundColor: 'rgb(255, 255, 255)',
        color: 'rgb(34, 34 ,34 )',
        padding: 12,
        boxShadow: 'rgb(0 0 0 / 18%) 0px 2px 4px',
    },

    menuItem: {
        height: 42,
        fontSize: '16px',
    },

    menuItem__signUp: {
        height: 42,
        fontWeight: 500
    },

    menuItem__dash: {
        height: 1,
        backgroundColor: 'rgb(34, 34 ,34 )',
        padding: 0,
        border: 'none',
        outline: 'none',
        margin: '4px 0'
    },

    searchBar: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 0
    },

}))

export default useStyles;