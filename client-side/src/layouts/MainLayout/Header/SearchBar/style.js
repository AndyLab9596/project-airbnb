import { makeStyles, alpha } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
    root: {
        backgroundColor: '#fff',
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'no-wrap row',
        borderRadius: '40px',
        // padding: '9px 14px'
    },

    formControl: {
        padding: '12px 24px',
        borderRight: '1px solid #dddddd',
        '& > input': {
            outline: 'none',
            border: 'none'
        },
        '&:nth-child(1)': {
            // padding: '0px 48px',

        },
        '&:hover, &:active': {
            backgroundColor: '#EBEBEB',
            borderRadius: '40px',
            boxShadow: '9px 0px 10px -3px rgba(0,0,0,0.3)',
        }

    },
    formControl__label: {
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: 600,
        paddingBottom: '2px',
        paddingLeft: '2px',
        color: '#000'

    },
    formControl__input: {
        fontSize: '14px',
        lineHeight: '18px',
        width: '100%',
        color: '#222222',
        fontWeight: 500,
        backgroundColor: 'transparent',

    },
    formControl__button: {
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        border: 'transparent',
        outline: 'none',
        backgroundColor: theme.palette.secondary.main,
        cursor: 'pointer',
        marginRight: '24px'
    },

    formControl__button__icon: {
        color: '#fff',
        lineHeight: '48px',
    },
    formControl__lastEl: {
        display: 'flex',
        alignItems: 'center',
        '&:hover, &:active': {
            backgroundColor: '#EBEBEB',
            borderRadius: '40px',
            boxShadow: '9px 0px 10px -3px rgba(0,0,0,0.3)',
        }
    },

    lastEl__right: {
        padding: '12px 24px',
        minWidth: '120px',
        cursor: 'pointer',
        '&>p': {
            fontSize: '12px',
            lineHeight: '16px',
            fontWeight: 600,
            paddingBottom: '2px',
            paddingLeft: '2px',
            color: '#000',
            margin: 0
        },
        '&>span': {
            fontSize: '14px',
            lineHeight: '18px',
            width: '100%',
            color: '#222222',
            fontWeight: 500,
            backgroundColor: 'transparent',
            opacity: 0.5,
        }
    }

}));