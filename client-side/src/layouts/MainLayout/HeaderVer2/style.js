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
        justifyContent: 'center',
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
    }


}))

export default useStyles;