import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({
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
    rootPriceMenu: {
        "& .MuiPaper-root": {
            backgroundColor: 'rgb(255, 255, 255)',
            border: '0.5px solid rgba(118, 118, 118, 0.28)',
            borderRadius: '12px',
            boxShadow: 'rgb(0 0 0 / 15%) 0px 10px 37px',
            overflow: 'hidden',
        },

        '& .MuiListItem-button:hover': {
            backgroundColor: 'transparent'
        }

    },


}))
