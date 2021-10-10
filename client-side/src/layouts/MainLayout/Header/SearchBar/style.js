import { makeStyles, alpha } from '@material-ui/core/styles';
export default makeStyles((theme) => ({

    root: {
        position: 'relative',
        height: '66px',
        minWidth: '800px',
        backgroundColor: '#fff',
        width: '100%',
        boxShadow: '0px 16px 32px rgb(0 0 0 / 15%), 0px 3px 8px rgb(0 0 0 / 10%) ',
        display: 'flex',
        color: '#222222',
        borderRadius: '32px',
    },

    // location

    locationSearch: {
        flex: '1.5 0 0',
        padding: '14px 32px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#EBEBEB',
            borderRadius: '40px',
            boxShadow: '9px 0px 10px -3px rgba(0,0,0,0.3)',
        }
    },

    locationSearch__wrapper: {
        borderRight: '1px solid #2222',
        '&:hover': {
            borderRight: 'none'
        }
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
        // justifyContent: 'space-evenly'

    },

    datePicker__el: {
        padding: '14px 24px',

        width: '100%',
        '&>p': {
            margin: '0'
        }
    },

    datePicker__wrapper: {
        borderRight: '1px solid #2222',
        '&>p': {
            margin: '0'
        }
    },

    datePicker__el__title: {
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: 600,
        paddingBottom: '2px',
        paddingLeft: '2px',
        color: '#000'
    },

    datePicker__el__text: {
        fontSize: '14px',
        lineHeight: '18px',
        width: '100%',
        color: '#222222',
        backgroundColor: 'transparent',
        outline: 'none',
        border: 'none'
    },

    // End picker
    customer: {
        flex: '2 0 0',
        display: 'flex',
        alignItems: 'center',

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
        border: 'none'
    },

    formControl__button: {
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        border: 'transparent',
        outline: 'none',
        backgroundColor: theme.palette.secondary.main,
        cursor: 'pointer',
        // marginRight: '24px'
    },

    formControl__button__icon: {
        color: '#fff',
        lineHeight: '48px',
    },

    /////

    // label: {
    //     display: 'block',
    // },
    // input: {
    //     width: 200,
    // },



    locationSearch__dropdown: {

        position: 'absolute',
        left: '0',
        top: '100%',
        backgroundColor: theme.palette.background.paper,
        zIndex: 1,
        marginTop: '12px',
        maxHeight: 'calc(100vh - 220px)',
        width: '500px',
        borderRadius: '32px',
        boxShadow: '0px 6px 20px rgb(0 0 0 / 20%)',
        overFlowX: 'hidden',
        overFlowY: 'auto',
    },

    locationSearch__lists: {
        padding: '16px 32px'

        // position: 'absolute',
        // left: '0',
        // top: '100%',
        // backgroundColor: theme.palette.background.paper,
        // zIndex: 1,
        // borderRadius: '32px',
        // marginTop: '12px',
        // maxHeight: 'calc(100vh - 220px)',
        // width: '500px',
        // listStyle: 'none',
        // overflow: 'auto',
        // border: '1px solid rgba(0,0,0,.25)',
        // boxShadow: '0px 6px 20px rgb(0 0 0 / 20%)',
        // '& li[data-focus="true"]': {
        //     backgroundColor: '#4a8df6',
        //     color: 'white',
        //     cursor: 'pointer',
        // },
        // '& li:active': {
        //     backgroundColor: '#2977f5',
        //     color: 'white',
        // },

        // '& li': {
        //     display: 'flex',
        //     width: '100%',
        //     padding: '8px 16ppx 8px 32px',
        //     cursor: 'pointer',
        // }
    },

    locationSearch__list: {
        cursor: 'pointer',
        width: '100%',
        display: 'flex',
        padding: '8px 16px 8px 32px',

    }


}));