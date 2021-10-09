


import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({
    banner: {
        backgroundImage: props => `url(${props.bannerImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: '95vh',
        width: '100%',
    },
}))
