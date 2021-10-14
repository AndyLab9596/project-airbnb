import { makeStyles } from '@material-ui/core/styles';
import { underLine } from '../../Profile/underline';

export default makeStyles(theme => ({
    list__text__titile: {
        fontSize: "14px",
        lineHeight: "18px",
        color: "#222222",
        paddingBottom: "8px"
    },
    list__title: {
        fontSize: "32px",
        lineHeight: "36px",
        fontWeight: 800
    },
    list__filter: {
        marginTop: "16px",
        display: "flex"
    },
    list__filter__item: {
        padding: "4px 8px 4px 0px",

    },
    chip: {
        border: "1px solid rgb(176, 176, 176)",
        backgroundColor: "rgb(255, 255, 255) !important",

        "&:hover": {
            borderColor: "rgb(34, 34, 34) !important"
        }
    },

    //style flex chung
    list__style__flex: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        ...underLine,
    },

    //Menu HỦY MIỄN PHÍ
    list__menu__cancel__top: {
        maxHeight: "calc(100vh-300px)",
        overflow: "hidden auto",
        padding: 20,
        "&> p": {
            fontSize: 14,
            lineHeight: "18px",
            fontWeight: 400,
            color: "rgb(113, 113, 113)",
            padding: "12px 4px 12px 0"
        }
    },

    roott: {
        width: 42,
        height: 26,
        padding: 0,
        margin: theme.spacing(1),
    },



    switchBase: {
        padding: 1,
        '&$checked': {
            transform: 'translateX(14px)',
            color: theme.palette.common.white,

            '& + $track': {
                backgroundColor: '#52d869',
                opacity: 1,
                border: 'none',
            },
        },
        '&$focusVisible $thumb': {
            color: '#52d869',
            border: '6px solid #fff',
        },

    },
    thumb: {
        width: 24,
        height: 24,
    },
    track: {
        borderRadius: 26 / 2,
        border: `1px solid ${theme.palette.grey[400]}`,
        backgroundColor: theme.palette.grey[50],
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
    },
    colorSecondary: {
        color: "#fff !important",

    },

    list__menu__cancel__bot: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 14px",

    },
    button__erase: {
        fontSize: 14,
        lineHeight: "20px",
        fontWeight: 600,
        padding: 10,
        borderRadius: 8,
        outline: "none",
        transition: "box-shadow 0.2s ease 0s",
        border: "none",
        backgroundColor: "transparent",
        color: "rgb(34, 34, 34)",
        textDecoration: "underline",
        cursor: "pointer",
        "&:hover": {
            border: "none",
            backgroundColor: "rgb(247, 247, 247)"
        }
    },
    button__save: {
        fontSize: 12,
        lineHeight: "20px",
        fontWeight: 600,
        padding: "5px 14px",
        borderRadius: 8,
        outline: "none",
        transition: "box-shadow 0.2s ease 0s",
        border: "none",
        backgroundColor: "rgb(34, 34, 34)",
        color: "rgb(255, 255, 255)",
        cursor: "pointer",
        "&:hover": {
            border: "none",
            backgroundColor: "rgb(0, 0, 0)"
        }
    },


    //MENU LOẠI NƠI Ở
    list__menu__accommodation__top: {
        maxHeight: "calc(100vh-300px)",
        overflow: "hidden auto",
        padding: 20,
        ...underLine

    },
    checkbox: {
        padding: 0,
        color: "#000 !important",
        marginRight: 15,
        borderColor: "red !important",
        border: "none !important"
    },
    // "& .MuiCheckbox-colorSecondary.Mui-checked": {
    //     backgroundColor: "#000 !improtant"
    // },

    // checked__checkbox: {
    //     // color: "#000 !important"
    // },
    list__menu__accommodation__text: {
        color: "rgb(34, 34, 34)",
        fontSize: 15,
        lineHeight: "20px"
    },
    list__menu__accommodation__text2: {
        color: "rgb(113, 113, 113)",
        fontSize: 14,
        lineHeight: "18px",
        marginTop: 4
    },
    list__menu__accommodation__item: {
        padding: "12px 0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
    },
    list__menu__accommodation__bot: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 14px",

    },




    //MENU GIÁ
    list__menu__price__top: {
        maxHeight: "calc(100vh-300px)",
        overflow: "hidden auto",
        padding: 20,
        ...underLine
    },
    list__menu__price__text: {
        fontSize: 16,
        lineHeight: "20px",
        fontWeight: 400,
        color: "rgb(34, 34, 34)",
        marginBottom: 40
    },
    input: {
        width: "100%"
    },






















    modal: {

    },

    modal__style: {
        overflowX: "hidden",
        paddingRight: "25px",
        paddingLeft: "25px",
    },
    modal__title__text: {
        color: "#222222",
        fontWeight: 500,
        lineHeight: "20px",
        fontSize: 20,
        marginBottom: 24
    },
    modal__style__content: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 0",

    },
    modal__style__checkbox: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "12px 0",

    },
    //phòng và phòng ngủ


    modal__bedroom__text: {
        width: "25px",
        margin: "0 5px",
        textAlign: "center",
    },
    modal__bedroom: {
        padding: "20px 0",
        ...underLine

    },
    modal__bedroom__item: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    modal__text_style: {
        fontWeight: 600,
        textDecoration: "underline",
        borderRadius: 4,
        outline: "none",
        fontSize: 14,
        cursor: "pointer",
        padding: "5px 0"
    },
    // lựa chọn khác
    modal__another: {
        padding: "20px 0",
        ...underLine
    },

    modal__another__text: {
        fontSize: 14,
        lineHeight: "18px",
        fontWeight: 400,
        color: "rgb(113, 113, 113)"
    },

    // tiện nghi
    modal__convenient: {
        padding: "20px 0",
        ...underLine
    },

    root: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "rgb(34,34,34,0.5)",

    },


    check__info: {
        display: "flex",
        padding: "25px 0",
        ...underLine
    },









    modal__content: {
        width: "100%",
        maxWidth: 764,
        borderRadius: 12,
        animation: "slide 0.4s linear",
        backgroundColor: "#fff",
        zIndex: 999,
        display: "flex",
        flexDirection: "column",
        margin: "30px 0",

    },

    modal__header: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 24px",
        minHeight: 65,
        marginBottom: "50px",
        borderBottom: "1px solid rgb(235, 235, 235)",
        ...underLine,
        "& >p": {
            fontWeight: 800,
            fontSize: "1em",
        },
        "& > button": {
            padding: 6,
        },
    },

    icon: {
        position: "absolute",
        left: "1%",
    },



    button: {
        width: "32px",
        height: "32px",
        cursor: "pointer",
        border: "1px solid rgb(113,113,113)",
        color: "rgb(113,113,113)",
        outline: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgb(255,255,255)",
        borderRadius: "50%"
    },




    modal__footer: {
        borderTop: "1px solid rgb(235, 235, 235) !important",
        display: "flex",
        padding: "16px 24px",
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: "16px",
        lineHeight: "20px"

    },
    button__modal__button: {
        padding: "14px 24px",
        backgroundColor: "rgb(34, 34, 34)",
        color: "rgb(255, 255, 255)",

        outline: "none",
        fontSize: 16,
        lineHeight: "20px0",
        fontWeight: 600,
        borderRadius: 8,
        cursor: "pointer",
        transition: "box-shadow 0.2s ease 0s",
        "&:hover": { backgroundColor: "rgb(0, 0, 0)" }

    },
    dropdown: {
        animation: "$myEffect 0.2s linear",
    },

    "@keyframes myEffect": {
        "0%": {
            transform: "translateY(-10%)",
            opacity: 0,
        },
        "100%": {
            transform: "translateY(0)",
            opacity: 1,
        },
    },

}))
