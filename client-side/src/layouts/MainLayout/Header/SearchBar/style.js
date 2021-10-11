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

        "&::after": {
            content: "''",
            position: 'absolute',
            display: 'block',
            width: '1px',
            height: '50%',
            top: '50%',
            transform: 'translateY(-50%)',
            right: 0,
            backgroundColor: '#222222',
            opacity: .3,
        },
    },

    locationSearch__wrapper: {
        // borderRight: '1px solid #2222',
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
            borderBottom: 'none'
        }

    },

    datePicker__el: {
        padding: '14px 24px',
        position: 'relative',

        '&:hover': {
            backgroundColor: '#EBEBEB',
            borderRadius: '32px',
            boxShadow: '9px 0px 10px -3px rgba(0,0,0,0.3)',
        },
        "&::after": {
            content: "''",
            position: 'absolute',
            display: 'block',
            width: '1px',
            height: '50%',
            top: '50%',
            transform: 'translateY(-50%)',
            right: 0,
            backgroundColor: '#222222',
            opacity: .3,
            zIndex: 1,
        },
        width: '100%',
        '&>p': {
            margin: '0'
        }
    },

    datePicker__wrapper: {
        // borderRight: '1px solid #2222',
        '&:hover': {
            borderRight: 'none'
        },
        '&>p': {
            margin: '0'
        },

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

    //// Date picker css
    // DateInput_input: {
    //     fontSize: '12px',
    //     lineHeight: '16px',
    //     fontWeight: 600,
    //     paddingBottom: '2px',
    //     paddingLeft: '2px',
    //     color: '#000'
    // }

    // datePicker: {
    //     '& .DateRangePickerInput': {
    //         backgroundColor: 'red !important'
    //     }
    // },

    // dateRangePicker: {
    //     '& .DateRangePickerInput': {
    //         backgroundColor: 'red !important'
    //     }
    // }


}));