import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    root: {
        height: props => props.displaySearchBar ? '160px' : '80px',
        width: '100%',
        margin: '0 auto',
        padding: '0 40px',
        paddingBottom: 0,
        marginBottom: 0,
        backgroundColor: props => props.scroll ? '#fff' : 'transparent'
    },
    navbar__content: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '8px',
    },

    navbar__content__right: {
        minWidth: "fix-content",
        marginRight: '8px',
        [theme.breakpoints.up("xl")]: {
            minWidth: "250px",
        },
    },

    navbar__content__icon: {
        height: '35px',
    },
    navbar__content__menu: {
        display: 'flex',
        flex: 1,
        maxWidth: 'fit-content',
        alignItems: 'center',
        '& > span': {
            fontSize: '12px',
            [theme.breakpoints.up("lg")]: {
                fontSize: '14px',
            },
            [theme.breakpoints.up("xl")]: {
                fontSize: '16px',
            },
            lineHeight: '20px',
            fontWeight: 400,
            // padding: '10px 16px',
            padding: '10px 0',
            margin: '0 16px',
            color: props => props.scroll ? '#000' : '#fff',
            cursor: 'pointer',
            transition: 'all .3s linear',
            '&:hover': {
                opacity: '.7',
                borderBottom: props => props.scroll ? `1px solid #000` : `1px solid #fff`
            },
            '&:nth-child(1)': {
                fontWeight: 500,
                borderBottom: '2px solid #fff',
                // '&:hover': {
                //     opacity: '1',
                //     borderBottom: '2px solid #fff'
                // }
            },
        }
    },

    navbar__content__search: {
        display: 'flex',
        // boxShadow: '0px 1px 2px rgb(0 0 0 / 8%), 0px 4px 12px rgb(0 0 0 / 5%)',
        color: '#222222',
        outline: 'none',
        border: 'none',
        backgroundColor: 'transparent',
        opacity: props => !props.displaySearchBar ? '1' : '0',
        transform: props => !props.displaySearchBar ? 'scale(1)' : 'scale(0)'
    },

    navbar__search__button: {
        display: 'flex',
        alignItems: 'center',
        borderRadius: '40px',
        width: '300px',
        outline: 'none',
        boxShadow: '0px 1px 2px rgb(0 0 0 / 8%), 0px 4px 12px rgb(0 0 0 / 5%)',
        backgroundColor: 'transparent'
    },

    navbar__search__button__title: {
        fontSize: '14px',
        lineHeight: '18px',
        flex: '1 1 auto',
        fontWeight: 600,
        padding: '0 16px',
        overflow: 'hidden',
        textAlign: 'left'
    },

    navbar__search__button__wrap: {
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.secondary.main,
        margin: '7px 7px 7px 0',

    },

    navbar__search__button__icon: {
        fontSize: '17px',
        color: '#fff',
        fontWeight: 500
    },

    navbar__content__left: {
        display: 'flex',
        alignItems: 'center',
        '& > span': {
            marginRight: '8px',
            color: props => props.scroll ? '#000' : '#fff',
        }
    },

    navbar__content__left__button: {
        color: props => props.scroll ? '#000' : '#fff',
        fontWeight: 400,
        fontSize: '12px',
        [theme.breakpoints.up("lg")]: {
            fontSize: '14px',
        },
        [theme.breakpoints.up("xl")]: {
            fontSize: '16px',
        },
        lineHeight: '18px',
        outline: 'none',
        padding: '12px',
        borderRadius: '22px',
        textTransform: 'lowercase',
        minWidth: '150px',
        display: 'flex',
        flexWrap: 'noWrap',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
        }
    },

    language__wrapper: {
        color: '#fff',
    },

    language__icon: {
        color: props => props.scroll ? '#000' : '#fff',
        fontSize: '24px'
    },

    chip: {
        height: '42px',
        borderRadius: '21px',
    },


    menu__items: {
        padding: '8px',

        '&:nth-child(1)': {
            fontWeight: 500,
        },

        '&:nth-child(2)': {
            borderBottom: '1px solid #e0e0e0'
        }
    },

    searchBar: {
        margin: '0 auto',
        maxWidth: '850px',
        zIndex: 2,
        transformOrigin: '50% 0',
        transition: 'all .3s linear',
        opacity: props => props.displaySearchBar ? '1' : '0',
        transform: props => props.displaySearchBar ? 'scale(1)' : 'scale(0)'
    },

}))