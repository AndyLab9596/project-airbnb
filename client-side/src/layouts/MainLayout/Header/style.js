import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({

  // Homepage CSS

  root: {
    height: props => props.displaySearchBar && props.homepageRoute ? '160px' : '80px',
    position: "fixed",
    width: '100%',
    margin: '0 auto',
    padding: '0 40px',
    paddingBottom: 0,
    marginBottom: 0,
    boxShadow: 'rgb(0 0 0 / 8%) 0px 1px 12px ',
    backgroundColor: props => props.scroll && props.homepageRoute ? '#fff' : 'transparent'
  },

  listRoot: {
    height: props => props.listPageDisplaySearchBar && props.listpageRoute ? '160px' : '80px',
    backgroundColor: props => props.listpageRoute && '#fff',
    position: "fixed",
    width: '100%',
    margin: '0 auto',
    padding: '0 40px',
    paddingBottom: 0,
    marginBottom: 0,
    boxShadow: 'rgb(0 0 0 / 8%) 0px 1px 12px '
  },

  detailRoot: {
    height: props => props.detailPageDisplaySearchBar && props.detailpageRoute ? '160px' : '80px',
    backgroundColor: props => props.detailpageRoute && '#fff',
    position: "static",
    width: '100%',
    margin: '0 auto',
    padding: '0 40px',
    paddingBottom: 0,
    marginBottom: 0,
    boxShadow: 'rgb(0 0 0 / 8%) 0px 1px 12px '
  },

  navbar__content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '8px',
  },

  navbar__content__right: {
    minWidth: "fix-content",
    marginRight: '8px',
    [theme.breakpoints.up("xl")]: {
      minWidth: "250px",
    },
  },

  navbar__content__icon: {
    height: '35px',
  },
  navbar__content__menu: {
    display: 'flex',
    flex: 1,
    maxWidth: 'fit-content',
    alignItems: 'center',
    '& > span': {
      fontSize: '12px',
      [theme.breakpoints.up("lg")]: {
        fontSize: '14px',
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: '16px',
      },
      lineHeight: '20px',
      fontWeight: 400,
      // padding: '10px 16px',
      padding: '10px 0',
      margin: '0 16px',
      color: props => props.scroll && props.homepageRoute ? '#000' : '#fff',
      cursor: 'pointer',
      transition: 'all .3s linear',
      '&:hover': {
        opacity: '.7',
        borderBottom: props => props.scroll && props.homepageRoute ? `1px solid #000` : `1px solid #fff`
      },
      '&:nth-child(1)': {
        fontWeight: 500,
        borderBottom: '2px solid #fff',
        // '&:hover': {
        //     opacity: '1',
        //     borderBottom: '2px solid #fff'
        // }
      },
    }
  },

  list__navbar__content__menu: {
    '& > span': {
      color: props => props.listpageRoute && '#000',
      '&:hover': {
        borderBottom: props => props.listpageRoute && `1px solid #000`
      },
      '&:nth-child(1)': {
        borderBottom: props => props.listpageRoute && '2px solid #000',
      },
    }
  },

  detail__navbar__content__menu: {
    '& > span': {
      color: props => props.detailpageRoute && '#000',
      '&:hover': {
        borderBottom: props => props.detailpageRoute && `1px solid #000`
      },
      '&:nth-child(1)': {
        borderBottom: props => props.detailpageRoute && '2px solid #000',
      },
    }
  },


  navbar__content__search: {
    display: 'flex',
    // boxShadow: '0px 1px 2px rgb(0 0 0 / 8%), 0px 4px 12px rgb(0 0 0 / 5%)',
    color: '#222222',
    outline: 'none',
    border: 'none',
    backgroundColor: 'transparent',
    opacity: props => !props.displaySearchBar && props.homepageRoute ? '1' : '0',
    transform: props => !props.displaySearchBar && props.homepageRoute ? 'scale(1)' : 'scale(0)'
  },

  list__navbar__content__search: {

    opacity: props => props.listPageDisplaySearchBar && props.listpageRoute ? '0' : '1',
    transform: props => props.listPageDisplaySearchBar && props.listpageRoute ? 'scale(0)' : 'scale(1)'
  },

  detail__navbar__content__search: {
    opacity: props => props.detailPageDisplaySearchBar && props.detailpageRoute ? '0' : '1',
    transform: props => props.detailPageDisplaySearchBar && props.detailpageRoute ? 'scale(0)' : 'scale(1)'
  },

  navbar__search__button: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '40px',
    width: '300px',
    outline: 'none',
    boxShadow: '0px 1px 2px rgb(0 0 0 / 8%), 0px 4px 12px rgb(0 0 0 / 5%)',
    backgroundColor: 'transparent'
  },

  navbar__search__button__title: {
    fontSize: '14px',
    lineHeight: '18px',
    flex: '1 1 auto',
    fontWeight: 600,
    padding: '0 16px',
    overflow: 'hidden',
    textAlign: 'left'
  },

  navbar__search__button__wrap: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.main,
    margin: '7px 7px 7px 0',

  },

  navbar__search__button__icon: {
    fontSize: '17px',
    color: '#fff',
    fontWeight: 500
  },

  navbar__content__left: {
    display: 'flex',
    alignItems: 'center',
    '& > span': {
      marginRight: '8px',
      color: props => props.scroll && props.homepageRoute ? '#000' : '#fff',
    }
  },

  list__navbar__content__left: {
    '& > span': {
      color: props => (props.listpageRoute || props.detailpageRoute) && '#000'
    }
  },

  navbar__content__left__button: {
    color: props => props.scroll && props.homepageRoute ? '#000' : '#fff',
    fontWeight: 400,
    fontSize: '12px',
    [theme.breakpoints.up("lg")]: {
      fontSize: '14px',
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: '16px',
    },
    lineHeight: '18px',
    outline: 'none',
    padding: '12px',
    borderRadius: '22px',
    textTransform: 'lowercase',
    minWidth: '150px',
    display: 'flex',
    flexWrap: 'noWrap',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
    }
  },

  list__navbar__content__left__button: {
    color: props => (props.listpageRoute || props.detailpageRoute) && '#000',
    '&:hover': {
      backgroundColor: 'rgb(221, 221, 221)',
    }
  },

  language__wrapper: {
    color: '#fff',
  },

  list__language__wrapper: {
    color: props => (props.listpageRoute || props.detailpageRoute) && '#fff',
  },

  language__icon: {
    color: props => props.scroll ? '#000' : '#fff',
    fontSize: '24px'
  },

  list__language__icon: {
    color: props => (props.listpageRoute || props.detailpageRoute) && '#000',
  },


  button__chip: {
    backgroundColor: props => props.homepageRoute && props.scroll ? "transparent" : "#fff",
    border: "1px solid #DDDDDD",
    color: "222222",
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '5px 5px 5px 12px',
    borderRadius: '21px',
    height: '42px',
    width: '75px',
    "&:hover": {
      boxShadow: "0px 2px 4px rgb(0 0 0 / 18%)"
    }
  },

  list__button__chip: {
    backgroundColor: props => (props.listpageRoute || props.detailpageRoute) && "transparent"
  },

  avatar: {
    width: 30,
    height: 30
  },


  menu__items: {
    padding: '8px',

    '&:nth-child(1)': {
      fontWeight: 500,
    },

    '&:nth-child(2)': {
      borderBottom: '1px solid #e0e0e0'
    }
  },

  searchBar: {
    margin: '0 auto',
    maxWidth: '850px',
    zIndex: 2,
    transformOrigin: '50% 0',
    transition: 'all .3s linear',
    opacity: props => props.displaySearchBar && props.homepageRoute ? '1' : '0',
    transform: props => props.displaySearchBar && props.homepageRoute ? 'scale(1)' : 'scale(0)'
  },

  list__searchBar: {
    margin: '0 auto',
    maxWidth: '850px',
    zIndex: 2,
    transformOrigin: '50% 0',
    transition: 'all .3s linear',
    opacity: props => props.listPageDisplaySearchBar && props.listpageRoute ? '1' : '0',
    transform: props => props.listPageDisplaySearchBar && props.listpageRoute ? 'scale(1)' : 'scale(0)'
  },

  detail__searchBar: {
    margin: '0 auto',
    maxWidth: '850px',
    zIndex: 2,
    transformOrigin: '50% 0',
    transition: 'all .3s linear',
    opacity: props => props.detailPageDisplaySearchBar && props.detailpageRoute ? '1' : '0',
    transform: props => props.detailPageDisplaySearchBar && props.detailpageRoute ? 'scale(1)' : 'scale(0)'
  },

  // Detail Page CSS

  list__navbar__search__wrapper: {
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    border: '1px solid #dddddd',
    borderRadius: '40px',
    textAlign: 'left',
    boxShadow: '0px 1px 2px rgb(0 0 0 / 8%), 0px 4px 12px rgb(0 0 0 / 5%)',
    color: '#222222',
    maxWidth: '100%',
    verticalAlign: 'middle',

  },

  list__navbar__button: {
    paddingLeft: '8px',
    borderTopLeftRadius: 'inherit',
    borderBottomLeftRadius: 'inherit',
    borderRadius: '4px',
    border: '1px solid transparent',
    backgroundColor: 'transparent',
    outline: 'none',
    cursor: 'pointer',
    margin: '-1px',
    display: 'flex',
    alignItems: 'center',
    flex: '0 1 auto',
    height: '48px',
    minWidth: 0,

    '&>span': {
      fontSize: '14px',
      lineHeight: '18px',
      flex: '1 1 auto',
      fontWeight: 500,
      padding: '0 16px',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    }

  },

  list__navbar__dash: {
    backgroundColor: 'rgb(221, 221, 221)',
    flex: '0 0 1px',
    height: '24px',
    width: '1px'
  }

}))