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
        marginTop: '8px'
        // marginTop: '32px',
        // height: '100%',
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
            fontSize: '1rem',
            lineHeight: '20px',
            fontWeight: 400,
            padding: '10px 16px',
            color: '#fff',
            cursor: 'pointer'
        }
    },

    navbar__content__menu__scroll: {
        '& > span': {
            color: '#000',
        }
    },

    navbar__content__search: {
        display: 'flex',
        // boxShadow: '0px 1px 2px rgb(0 0 0 / 8%), 0px 4px 12px rgb(0 0 0 / 5%)',
        color: '#222222',
        outline: 'none',
        border: 'none',
        backgroundColor: 'transparent'
    },

    navbar__search__button: {
        display: 'flex',
        alignItems: 'center',
        borderRadius: '40px',
        width: '300px',
        outline: 'none',
        border: 'none'
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
            marginRight: '8px'
        }
    },

    navbar__content__left__scroll: {
        '& > span': {
            color: '#000'
        }
    },

    language__icon: {
        color: '#fff',

    },

    chip: {
        height: '42px',
        borderRadius: '21px'
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
        zIndex: 2
    }

}))