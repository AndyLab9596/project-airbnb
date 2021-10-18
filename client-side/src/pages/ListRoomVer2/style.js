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

    card: {
        display: 'inline-block',
        padding: '8px 8px 12px 8px',
    },

    card__topLine: {
        marginTop: '12px',
        marginBottom: '24px',
        '& > div': {
            borderBottom: '1px solid #EBEBEB',
        }
    },

    card__wrapper: {
        display: 'inline-flex',
        width: '100%',
        height: '100%',
    },

    card__img: {
        display: 'block',
        width: '300px',
        height: '200px',
        '& > img': {
            width: '100%',
            height: '100%',
            borderRadius: '12px'
        }
    },

    card__content: {
        display: 'flex',
        flexFlow: 'column nowrap',
        height: '200px',
        marginLeft: '16px',
        flex: '1 1 auto'
    },

    card__header: {
        display: 'flex',
        alignItems: 'center'
    },

    card__header__text: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '16px',
        flex: '1 1 0%',
        '&>span': {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            color: 'rgb(24,24,24)',
            fontSize: '18px',
            lineHeight: '24px',
        }
    },

    card__header__button: {
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        cursor: 'pointer',
        backgroundColor: 'transparent',
        color: 'rgb(34,34,34)',
        transition: 'all .25s ease',
        outline: 'none',
        border: 'none',
        '&:hover': {
            backgroundColor: '#EBEBEBEB'
        }
    },

    card__middleLine: {
        marginTop: '12px',
        width: '32px',
        borderTop: '1px solid rgb(221, 221, 221)',
    },

    card__desc1: {
        color: 'rgb(113, 113, 113)',
        fontWeight: 400,
        minHeight: '18px',
        fontSize: '14px',
        // textOverflow: 'ellipsis',
        marginTop: '9px',
        '& > span': {
            marginRight: '5px'
        }
    },

    card__desc2: {
        marginTop: '4px',
    },

    card__footer: {
        display: 'flex',
        alignItems: 'flex-end',
        flexGrow: '1',
        marginTop: '10px',
    },

    card__footer__evaluate: {
        flex: '1 0 auto',
        marginRight: '12px',
        display: 'flex',
        alignItems: 'center',
        fontSize: '14px',
        lineHeight: '18px',
        '& > span': {
            marginRight: '5px'
        }
    },

    evaluate__icon: {
        color: theme.palette.secondary.main,
        fontSize: '18px'
    },

    evaluate__points: {
        color: 'rgb(34, 34, 34)',
        fontWeight: 600
    },

    evaluate__number: {
        color: 'rgb(113, 113, 113)',
        fontSize: '14px',
        lineHeight: '18px',
    },

    card__footer__price: {
        display: 'flex',
        alignItems: 'flex-end',
        '& > p': {
            margin: 0,
            fontSize: '18px',
            lineHeight: '24px',
            fontWeight: 600,
            color: '#222222',
            '& >span': {
                color: '#717171'
            }
        }
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
