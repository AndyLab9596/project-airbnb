import { makeStyles, alpha } from '@material-ui/core/styles';
export default makeStyles((theme) => ({

    root: {
        position: 'relative',
        height: '66px',
        minWidth: '300px',
        [theme.breakpoints.up("lg")]: {
            minWidth: '800px',
        },
        backgroundColor: '#fff',
        width: '100%',
        boxShadow: '0px 16px 32px rgb(0 0 0 / 15%), 0px 3px 8px rgb(0 0 0 / 10%) ',
        display: 'flex',
        color: '#222222',
        borderRadius: '32px',
    },

    locationSearch: {
        position: 'relative',
        flex: '1.5 0 0',
        padding: '14px 32px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#EBEBEB',
            borderRadius: '32px',
            boxShadow: '8px 0px 10px -3px rgba(0,0,0,0.3)',

            '&::after': {
                height: 0
            }
        },
    },

    locationSearch__wrapper: {
        '&:hover': {
            borderRight: 'none'
        },

    },

    locationSearch__label: {
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: 600,
        paddingBottom: '2px',
        paddingLeft: '2px',
        color: '#000'
    },

    locationSearch__input: {
        fontSize: '14px',
        lineHeight: '18px',
        width: '100%',
        color: '#222222',
        fontWeight: 500,
        backgroundColor: 'transparent',
        outline: 'none',
        border: 'none',
        '&::placeholder': {
            fontSize: '14px',
        }
    },

    // Date picker

    datePicker: {
        flex: '2.5 0 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        '& .DateInput_input__focused': {
            borderBottom: 'none',
        },
        '&:hover': {
            backgroundColor: '#EBEBEB',
            borderRadius: '32px',
            boxShadow: '9px 0px 10px -3px rgba(0,0,0,0.3)',
        }
    },

    datePicker__el: {
        cursor: 'pointer',
        margin: 'auto',
    },

    datePicker__label: {
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: 600,
        paddingBottom: '2px',
        paddingLeft: '2px',
        color: '#000',
        width: '100%',
        margin: '0 auto',
        textAlign: 'center'
    },

    datePicker__input: {
        fontSize: '14px',
        lineHeight: '18px',
        width: '100%',
        // textShadow: "0px 0px 1px #222222",
        // color: 'transparent',
        color: '#222222',
        fontWeight: 500,
        backgroundColor: 'transparent',
        outline: 'none',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'center',
        '&::placeholder': {
            fontSize: '14px',
            textAlign: 'center'
        }

    },

    customer: {
        flex: '2 0 0',
        display: 'flex',
        alignItems: 'center',
        '&:hover': {
            backgroundColor: '#EBEBEB',
            borderRadius: '32px',
            boxShadow: '9px 0px 10px -3px rgba(0,0,0,0.3)',
        },

    },

    customer__el: {
        padding: '14px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',

    },

    customer__el__content: {
        '&>p': {
            margin: '0'
        }
    },

    customer__title: {
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: 600,
        paddingBottom: '2px',
        paddingLeft: '2px',
        color: '#000'
    },

    customer__text: {
        fontSize: '14px',
        lineHeight: '18px',
        width: '100%',
        color: '#222222',
        backgroundColor: 'transparent',
        outline: 'none',
        border: 'none',
        textOverflow: 'ellipsis'
    },

    formControl__button: {
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        border: 'transparent',
        outline: 'none',
        backgroundColor: theme.palette.secondary.main,
        cursor: 'pointer',
    },

    formControl__button__icon: {
        color: '#fff',
        lineHeight: '48px',
    },


    locationSearch__dropdown: {
        position: 'absolute',
        left: '0',
        top: '100%',
        backgroundColor: theme.palette.background.paper,
        zIndex: 1,
        marginTop: '12px',
        borderRadius: '32px',
        boxShadow: '0px 6px 20px rgb(0 0 0 / 20%)',

    },

    locationSearch__lists: {
        padding: "16px 0 0",
        margin: "0 - 32px - 8px ",
        listStyle: 'none',
        overflow: 'auto',
        overflowX: 'hidden',
        maxHeight: 'calc(100vh - 220px)',
        width: '500px',

        '& li[data-focus="true"]': {
            backgroundColor: 'rgba(247, 247, 247)',
            cursor: 'pointer',
            width: '100%'
        },
        '& li:active': {
            backgroundColor: 'rgba(247, 247, 247)',
            cursor: 'pointer'
        },

    },

    locationSearch__list: {
        cursor: 'pointer',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '8px 16px 8px 32px',

    },

    locationSearch__lists__icon: {
        fontSize: '17px',
        backgroundColor: 'rgb(241, 241, 241)',
        border: '1px solid rgba(176,176,176,0.2)',
        borderRadius: '8px',
        minWidth: '48px',
        height: '48px',
        marginRight: '16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    locationSearch__lists__icon__item: {
        display: 'block',
        height: '22px',
        width: '22px',
        lineHeight: '22px'
    },

    locationSearch__lists__title: {
        fontSize: '16px',
        lineHeight: '20px',
        fontWeight: 400,
        color: 'rgb(34,34,34)',
        maxHeight: '120px',
    },


    dateRangePicker: {
        marginTop: '24px',
        // minWidth: '500px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '32px',
        borderRadius: '32px'
    },

    menu__items: {
        '&:hover': {
            backgroundColor: '#fff',
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {

            },
        },
    },

    count: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgb(235, 235, 235)',
        padding: '16px 4px 16px 0',
        minWidth: '330px',
    },

    count__content: {
        flexGrow: 1,

        '&>h6': {
            margin: 0,
            fontSize: '16px',
            lineHeight: '20px',
            fontWeight: 600,
            color: 'rgb(34,34,34)'
        },

        '&>p': {
            margin: 0,
            fontSize: '14px',
            lineHeight: '18px',
            fontWeight: 400,
            color: 'rgb(113, 113, 113)'
        }
    },

    count__action: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '104px',
        height: '32px',
        color: 'rgb(34, 34, 34)',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '20px'

    },

    count__action__button: {
        width: '32px',
        height: '32px',
        cursor: 'pointer',
        border: '1px solid rgb(113, 113, 113)',
        color: 'rgb(113, 113, 113)',
        outline: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(255, 255, 255)',
        borderRadius: '50%'
    }

}));