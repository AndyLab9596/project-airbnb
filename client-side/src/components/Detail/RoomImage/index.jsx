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
import React, { Fragment, useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import { FaMedal } from "react-icons/fa";
import { FcPrevious } from "react-icons/fc";
import { IoAppsOutline } from "react-icons/io5";
import Slider from "react-slick";
import useStyles from "./style";

const RoomImage = () => {
  const [currentImg, setCurrentImg] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("md"));
  const isDeskTop = useMediaQuery(theme.breakpoints.up("xl"));
  const classes = useStyles({ isMobile, isDeskTop });

  const settings = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentImg(next + 1),
    afterChange: (current) => setCurrentImg(current + 1),
  };
  const arrImg = [
    {
      img: "https://a0.muscache.com/im/pictures/d113b6b5-91c8-428c-9bba-203848abf8f3.jpg?im_w=1680",
    },
    {
      img: "https://a0.muscache.com/im/pictures/034d40a3-0295-4dda-a373-fbd24c2a3f42.jpg?im_w=720",
    },
    {
      img: "https://a0.muscache.com/im/pictures/3885f501-0ce4-449e-a741-361d361fb07c.jpg?im_w=720",
    },
    {
      img: "https://a0.muscache.com/im/pictures/034d40a3-0295-4dda-a373-fbd24c2a3f42.jpg?im_w=720",
    },
    {
      img: "https://a0.muscache.com/im/pictures/3885f501-0ce4-449e-a741-361d361fb07c.jpg?im_w=720",
    },
    { img: "http://picsum.photos/200/300" },
    { img: "http://picsum.photos/200/300" },
    { img: "http://picsum.photos/200/300" },
    { img: "http://picsum.photos/200/300" },
    { img: "http://picsum.photos/200/300" },
    { img: "http://picsum.photos/200/300" },
    { img: "http://picsum.photos/200/300" },
    { img: "http://picsum.photos/200/300" },
    { img: "http://picsum.photos/200/300" },
    { img: "http://picsum.photos/200/300" },
    { img: "http://picsum.photos/200/300" },
    { img: "http://picsum.photos/200/300" },
    { img: "http://picsum.photos/200/300" },
    { img: "http://picsum.photos/200/300" },
    { img: "http://picsum.photos/200/300" },
    { img: "http://picsum.photos/200/300" },
    { img: "http://picsum.photos/200/300" },
  ];
  return (
    <Fragment>
      {isMobile ? (
        <div>
          <div className={classes.room__title}>
            <Typography variant="body1">
              Luck Villa 01 - Hồ bơi nước mặn-425m2-Long Cung
            </Typography>
            <div
              className={clsx(
                classes.room__content__rating__deskTop,
                classes.room__content__rating
              )}
            >
              <Typography variant="span" className={classes.room__userRating}>
                <BsFillStarFill />
                5.0
                <Button disableRipple>
                  ( {Math.floor(Math.random() * 10)} đánh giá)
                </Button>
              </Typography>
              <Typography variant="span" className={classes.room__medal}>
                <FaMedal />
                Chủ nhà siêu cấp
              </Typography>
              <Typography variant="body2">
                <Button disableRipple className={classes.room__location}>
                  Thành phố Vũng Tầu, Bà Rịa - Vũng Tàu, Việt Nam
                </Button>
              </Typography>
            </div>
          </div>
          <Box position="relative">
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <img
                  src={arrImg[0].img}
                  alt="img"
                  className={classes.image}
                  onClick={() => setOpenModal(true)}
                />
              </Grid>
              <Grid item xs={6}>
                <Grid container spacing={1}>
                  {arrImg.slice(0, 4).map((item, index) => (
                    <Fragment key={index}>
                      <Grid item xs={6} key={index}>
                        <img
                          src={item.img}
                          alt="img"
                          className={classes.image}
                          onClick={() => setOpenModal(true)}
                        />
                      </Grid>
                    </Fragment>
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
          </Box>
        </div>
      ) : (
        <Fragment>
          <div className={classes.roomImage}>
            <Slider {...settings}>
              {arrImg.map((item, index) => (
                <Box key={index} position="relative" cursor="pointer">
                  <img
                    src={item.img}
                    alt="img"
                    className={classes.image}
                    onClick={() => setOpenModal(true)}
                  />
                  <div className={classes.currentImg}>
                    {currentImg}/{arrImg.length}
                  </div>
                </Box>
              ))}
            </Slider>
            <div className={classes.room__title}>
              <Typography variant="body1">
                Luck Villa 01 - Hồ bơi nước mặn-425m2-Long Cung
              </Typography>
              <div className={classes.room__content__rating}>
                <Typography variant="span" className={classes.room__userRating}>
                  <BsFillStarFill />
                  5.0
                  <Button disableRipple={true}>
                    ( {Math.floor(Math.random() * 9 + 1)} đánh giá)
                  </Button>
                </Typography>
                <Typography variant="span" className={classes.room__medal}>
                  <FaMedal />
                  Chủ nhà siêu cấp
                </Typography>
                <Button disableRipple={true} className={classes.room__location}>
                  Thành phố Vũng Tầu, Bà Rịa - Vũng Tàu, Việt Nam
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
        <div className={classes.modal__show__all}>
          <div className={classes.btnPrev}>
            <FcPrevious onClick={() => setOpenModal(false)} />
          </div>

          <Grid container spacing={1} className={classes.modal_show_all_img}>
            {arrImg.map((item, index) => (
              <Fragment key={index}>
                {index % 3 === 0 ? (
                  <Grid item xs={12}>
                    <img src={item.img} alt="img" className={classes.image} />
                  </Grid>
                ) : (
                  <Grid item xs={6}>
                    <img src={item.img} alt="img" className={classes.image} />
                  </Grid>
                )}
              </Fragment>
            ))}
          </Grid>
        </div>
      </Modal>
    </Fragment>
  );
};

export default RoomImage;
