import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    root: {
        height: '80px',
        width: '100%',
        margin: 'auto',
        padding: '0 40px',
        paddingBottom: 0,
        marginBottom: 0,
        backgroundColor: 'transparent'

    },
    navbar__content: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
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
        // position: 'absolute',
        // top: 80,
        // left: '50%',
        // transform: 'translateX(-50%)',
        // minWidth: '850px'
        maxWidth: '850px',
        margin: 'auto',

    }

}))