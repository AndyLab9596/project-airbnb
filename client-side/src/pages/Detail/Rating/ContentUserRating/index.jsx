import { Button, Typography } from "@material-ui/core";
import moment from "moment";
import React, { Fragment } from "react";
import { MdNavigateNext } from "react-icons/md";
import useStyles from "../style";
const ContentUserRating = ({ item, handleShowModal, openModal }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.room__rating__infoUser}>
        <img
          src={item?.userId?.avatar}
          alt="avatar"
          className={classes.room__rating_avatar}
        />
        <div className={classes.room__rating__createAt}>
          <Typography variant="body2">{item?.userId.name}</Typography>
          <Typography variant="span">
            {moment(`${item?.created_at}`).format("Do MMM YYYY hh:mm")}
          </Typography>
        </div>
      </div>
      <Typography variant="span" className={classes.room__rating__content}>
        {item?.content.length > 180 && !openModal ? (
          <Fragment>
            {item?.content.substr(0, 160)}...
            <Button onClick={handleShowModal}>
              Hiển thị thêm <MdNavigateNext />
            </Button>
          </Fragment>
        ) : (
          item?.content
        )}
      </Typography>
    </Fragment>
  );
};

export default ContentUserRating;
