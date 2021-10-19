import {
  Box,
  Button,
  Grid,
  Modal,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import clsx from "clsx";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import { FaMedal } from "react-icons/fa";
import { FcPrevious } from "react-icons/fc";
import { IoAppsOutline } from "react-icons/io5";
import Slider from "react-slick";
import useStyles from "./style";
import { scroller } from "react-scroll";
import { useDispatch } from "react-redux";
import { createAction } from "../../../store/action/createAction/createAction";
import { SHOW_MODAL_RATED } from "../../../store/types/ListRoomType";
import Slide from "@material-ui/core/Slide";

const RoomImage = ({ detailRoom, detailRating }) => {
  const [currentImg, setCurrentImg] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up("md"));
  const isDeskTop = useMediaQuery(theme.breakpoints.up("xl"));
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (isTablet) {
      const timer = setTimeout(() => {
        const currentHeight = ref.current.clientHeight + 80; // header 80px
        const handleScroll = () => {
          setScrolled(window.scrollY > currentHeight);
        };
        window.addEventListener("scroll", handleScroll);
      }, 100);
      return () => {
        window.clearTimeout(timer);
      };
    }
  }, [isTablet]);
  const settings = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentImg(next + 1),
    afterChange: (current) => setCurrentImg(current + 1),
  };

  //  Vì api chỉ có thể thêm 1 hình nên phải xét cứng
  const arrImg = [
    { img: detailRoom?.locationId?.image },
    { img: detailRoom?.locationId?.image },
    { img: detailRoom?.locationId?.image },
    { img: detailRoom?.locationId?.image },
    { img: detailRoom?.locationId?.image },
    { img: detailRoom?.locationId?.image },
    { img: detailRoom?.locationId?.image },
    { img: detailRoom?.locationId?.image },
    { img: detailRoom?.locationId?.image },
    { img: detailRoom?.locationId?.image },
    { img: detailRoom?.locationId?.image },
    { img: detailRoom?.locationId?.image },
    { img: detailRoom?.locationId?.image },
    { img: detailRoom?.locationId?.image },
    { img: detailRoom?.locationId?.image },
    { img: detailRoom?.locationId?.image },
    { img: detailRoom?.locationId?.image },
    { img: detailRoom?.locationId?.image },
    { img: detailRoom?.locationId?.image },
    { img: detailRoom?.locationId?.image },
    { img: detailRoom?.locationId?.image },
    { img: detailRoom?.locationId?.image },
    { img: detailRoom?.locationId?.image },
  ];
  const menuScroll = [
    {
      name: "Ảnh",
      id: "picture",
    },
    {
      name: "Tiện nghi",
      id: "review",
    },
    {
      name: "Đánh giá",
      id: "rated",
    },
    {
      name: "Vị trí",
      id: "map",
    },
  ];

  const handleScrollToView = (id) => {
    scroller.scrollTo(id, {
      duration: 800,
      smooth: "easeInOutQuart",
      offset: -70,
    });
  };
  const handleShowRating = () => {
    dispatch(createAction(SHOW_MODAL_RATED));
  };

  const classes = useStyles({ isTablet, isDeskTop, isScroll: scrolled });
  return (
    <Fragment>
      {isTablet ? (
        <Fragment>
          <div className={classes.headerScroll}>
            <div className={classes.header__menu}>
              {menuScroll.map((item, index) => (
                <div
                  key={index}
                  name={item.id}
                  onClick={() => handleScrollToView(item.id)}
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>
          <div ref={ref} id="picture">
            <div className={classes.room__title}>
              <Typography variant="body1">{detailRoom.name}</Typography>
              <div
                className={clsx(
                  classes.room__content__rating__deskTop,
                  classes.room__content__rating
                )}
              >
                <Typography variant="span" className={classes.room__userRating}>
                  <BsFillStarFill />
                  {detailRoom?.locationId?.valueate}
                  <Button disableRipple onClick={handleShowRating}>
                    ({detailRating?.length} đánh giá)
                  </Button>
                </Typography>
                <Typography variant="span" className={classes.room__medal}>
                  <FaMedal />
                  Chủ nhà siêu cấp
                </Typography>
                <Typography variant="body2">
                  <Button disableRipple className={classes.room__location}>
                    {detailRoom?.locationId?.name}
                    {detailRoom?.locationId?.province}-
                    {detailRoom?.locationId?.country}
                  </Button>
                </Typography>
              </div>
            </div>
            <div className={classes.room__image__content}>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <div
                    className={classes.image}
                    onClick={() => setOpenModal(true)}
                  >
                    <img src={detailRoom?.locationId?.image} alt="img" />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <Grid container spacing={1}>
                    {arrImg.slice(0, 4).map((item, index) => (
                      <Grid item xs={6} key={index}>
                        <div
                          className={classes.image}
                          onClick={() => setOpenModal(true)}
                        >
                          <img src={item.img} alt="img" />
                        </div>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
              <div
                className={clsx(classes.currentImg, classes.text_show_all_img)}
                onClick={() => setOpenModal(true)}
              >
                <IoAppsOutline />
                <Typography variant="span">Hiển thị tất cả ảnh</Typography>
              </div>
            </div>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div>
            <Slider {...settings}>
              {arrImg.map((item, index) => (
                <Box key={index} position="relative" cursor="pointer">
                  <div
                    className={classes.image}
                    onClick={() => setOpenModal(true)}
                  >
                    <img src={item.img} alt="img" />
                  </div>
                  <div className={classes.currentImg}>
                    {currentImg}/{arrImg.length}
                  </div>
                </Box>
              ))}
            </Slider>
            <div className={classes.room__title}>
              <Typography variant="body1">{detailRoom?.name}</Typography>
              <div className={classes.room__content__rating}>
                <Typography variant="span" className={classes.room__userRating}>
                  <BsFillStarFill />
                  {detailRoom?.locationId?.valueate}
                  <Button disableRipple={true} onClick={handleShowRating}>
                    ( {detailRating?.length} đánh giá)
                  </Button>
                </Typography>
                <Typography variant="span" className={classes.room__medal}>
                  <FaMedal />
                  Chủ nhà siêu cấp
                </Typography>
                <Button disableRipple={true} className={classes.room__location}>
                  {detailRoom?.locationId?.name}
                  {detailRoom?.locationId?.province}-
                  {detailRoom?.locationId?.country}
                </Button>
              </div>
            </div>
          </div>
        </Fragment>
      )}
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Slide direction="up" in={openModal} style={{ width: "100vw" }}>
          <div className={classes.modal__show__all}>
            <div className={classes.btnPrev}>
              <FcPrevious onClick={() => setOpenModal(false)} />
            </div>

            <Grid container spacing={1} className={classes.modal_show_all_img}>
              {arrImg.map((item, index) => (
                <Fragment key={index}>
                  {index % 3 === 0 ? (
                    <Grid item xs={12}>
                      <div className={classes.image}>
                        <img src={item.img} alt="img" />
                      </div>
                    </Grid>
                  ) : (
                    <Grid item xs={6}>
                      <div className={classes.image}>
                        <img src={item.img} alt="img" />
                      </div>
                    </Grid>
                  )}
                </Fragment>
              ))}
            </Grid>
          </div>
        </Slide>
      </Modal>
    </Fragment>
  );
};

export default RoomImage;
