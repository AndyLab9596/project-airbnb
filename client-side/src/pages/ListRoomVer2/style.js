import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({
    root: {
        paddingTop: '80px',
        position: 'relative',
        display: 'flex',
    },

    content: {
        // flex: '1 1 auto',
        width: '60%',
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

    cards: {
        width: '90%',
        display: 'flex',
        flexFlow: 'column wrap'
    },

    map: {
        width: '40%',
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
    },

    mapBox: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'sticky',
        top: 0,
    },

    pagination__wrapper: {
        width: '100%',
        margin: '32px auto',
        padding: '8px 8px 12px 8px',
    },

    pagination: {
        "& .MuiPagination-ul": {
            justifyContent: 'center'
        }
    },

    pagination__topLine: {
        marginTop: '12px',
        marginBottom: '24px',
        '& > div': {
            borderBottom: '1px solid #EBEBEB',
        }
    },




}))
