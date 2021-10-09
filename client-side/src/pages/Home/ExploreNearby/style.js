import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({

    places: {
        width: '100%',
        margin: 'auto',
        padding: '0 8px',
        paddingBottom: '16px'
    },

    places__title: {
        fontWeight: 700,
        lineHeight: '52px',
        letterSpacing: '0',
        paddingBottom: '1rem',
        paddingTop: '1rem',
    },

    cities: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    city__img: {
        width: '64px',
        height: '64px',
        objectFit: 'cover',
        display: 'block',
        borderRadius: '8px',
        marginRight: '1rem'
    },

    city__info: {
        '& > p': {
            margin: 0
        }
    }

}))
