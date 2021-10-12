


import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({
    banner: {
        // backgroundImage: props => `url(${props.bgImgW774})`,
        backgroundImage: props => props.isTablet ? `url(${props.bgImgW960})` : `url(${props.bgImgW774})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: '95vh',
        width: '100%',
    },
}))
