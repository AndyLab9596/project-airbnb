import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({
    root: {
        paddingTop: '80px',
        position: 'relative',
        display: 'flex',
    },

    content: {
        // height: '100vh',
        // backgroundColor: 'blue',
        flex: '1 1 60%',
        marginTop: '50px',
        padding: '0 24px',
    },

    content__header: {
        width: '100%',
        margin: '0 auto',
        '& > p': {
            fontSize: '14px',
            lineHeight: '18px',
            color: 'rgb(24,24,24)',
            paddingBottom: '8px',
            margin: 0
        },
        '& > h3': {
            fontSize: '32px',
            lineHeight: '36px',
            fontWeight: 700,
            color: 'rgb(24,24,24)',
            margin: 0
        }
    },

    filter: {
        width: '100%',
        marginTop: '16px',
        marginLeft: 'auto',
        marginRight: 'auto',

    },

    filter__wrapper: {
        display: 'flex',
        flex: '1 1 auto',
        alignItems: 'center',
        width: '100%',
    },

    filter__item: {
        display: 'inline-block',
        whiteSpace: 'nowrap',
        padding: '4px 8px 4px 0',
    },

    filter__item__button: {
        cursor: 'pointer',
        textAlign: 'center',
        border: '1px solid rgb(176, 176, 176)',
        backgroundColor: 'rgb(255, 255, 255)',
        outline: 'none',
        margin: 0,
        borderRadius: '30px',
        color: 'rgb(34, 34, 34)',
        position: 'relative',
        padding: '8px 16px',
        fontSize: '12px',
        lineHeight: '16px',
        '&:hover': {
            borderColor: 'rgb(34, 34, 34)',
        },
    },

    cards: {
        display: 'grid',
        gridTemplateColumns: 'auto',
    },

    map: {
        backgroundColor: 'red',
        flex: '1 1 40%',
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
    },

    mapBox: {
        // width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'sticky',
        top: 0,
    }



}))
