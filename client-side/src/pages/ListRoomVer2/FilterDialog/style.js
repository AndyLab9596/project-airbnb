import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({
    root: {
        width: '100%',
        maxHeight: '100vh - 80px',
        borderRadius: '12px',

    },

    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '64px',
        padding: '0 24px',
        borderBottom: '1px solid rgb(235,235,235)',
        color: 'rgb(34,34,34)',
        fontSize: '16px',
        lineHeight: '20px',
        fontWeight: 800,
    },

    header__closeBtn: {
        flex: '0 0 16px',
        textAlign: 'left',
    },

    closeBtn__item: {
        border: 'none',
        outline: 'none',
        backgroundColor: 'transparent',
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        color: 'rgb(34, 34, 34)',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
            backgroundColor: 'rgb(235,235,235)'
        }
    },

    header__title: {
        flex: '1 1 auto',
        textAlign: 'center',
        margin: '0 16px',
        fontSize: '16px'
    },

    content__header: {
        minHeight: '64px'
    },

    content__container: {
        flex: '1 1 auto',
        overflowY: 'auto',
        outline: 'none',

    },

    content__element: {
        padding: '28px 24px',
        margin: '0 24px',
        borderBottom: '1px solid rgb(235, 235, 235)',
    },

    content__element__header: {
        fontSize: '20px',
        lineHeight: '26px',
        color: 'rgb(34, 34, 34)',
        fontWeight: 600,
        marginTop: 0,
        marginBottom: '24px',
    },

    content__element__items: {
        display: 'flex',
        flexFlow: 'row wrap',
        width: '100%',
    },

    content__element__item: {
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '100%',
    },

    itemWrapper: {
        color: 'rgb(34,34,34)',
        padding: '12px 4px 12px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    item__text: {
        flex: '1 1 auto',
        '& > p': {
            fontSize: '16px',
            fontWeight: 400
        }
    },

    item__action: {
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

    item__action__btn: {
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
    },


    content__element__checkbox: {
        padding: '12px 0',
        flexBasis: '50%',
    },

    formControl: {
        color: 'rgb(34, 34, 34)',

    },

}))
