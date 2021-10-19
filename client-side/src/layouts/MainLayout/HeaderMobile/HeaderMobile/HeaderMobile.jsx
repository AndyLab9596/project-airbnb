import { Button, Modal, Slide, TextField, Typography } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React, { Fragment, useEffect, useState } from "react";
import { FcPrevious } from "react-icons/fc";
import { MdMyLocation, MdSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { createAction } from "../../../../store/action/createAction/createAction";
import {
  HIDE_MODAL_SEARCH,
  SHOW_MODAL_SEARCH,
} from "../../../../store/types/ModalType";
import useStyles from "./style";

const HeaderMobileHuy = () => {
  const [scrolled, setScrolled] = useState(false);
  const [valueSearch, setValueSearch] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);
  const classes = useStyles({ isScrolled: scrolled });
  const dispatch = useDispatch();
  const history = useHistory();
  const { modalSearch } = useSelector((state) => state.ModalReducer);
  const { locations } = useSelector((state) => state.LocationReducer);
  const handleShowModalSearch = () => {
    dispatch(createAction(SHOW_MODAL_SEARCH));
  };

  const handleHideModalSearch = () => {
    dispatch(createAction(HIDE_MODAL_SEARCH));
  };
  const arrListSearch = locations?.filter(
    (item) =>
      (item.name.toLowerCase()?.includes(valueSearch) && valueSearch !== "") ||
      (item.province.toLowerCase()?.includes(valueSearch) && valueSearch !== "")
  );
  return (
    <div className={classes.content}>
      <div className={classes.btnSearch}>
        <Button
          disableRipple
          startIcon={<MdSearch />}
          onClick={handleShowModalSearch}
        >
          Bạn sắp đi đâu?
        </Button>
      </div>
      <Modal
        open={modalSearch}
        onClose={handleHideModalSearch}
        className={classes.modal}
      >
        <Slide direction="up" in={modalSearch}>
          <div className={classes.modal__header}>
            <div className={classes.modal__search}>
              <FcPrevious onClick={handleHideModalSearch} />
              <Autocomplete
                options={locations}
                getOptionLabel={(option) => option.name}
                className={classes.modal__autocomplete}
                renderInput={(params) => (
                  <div>
                    <TextField
                      inputProps={params.inputProps}
                      placeholder="Bạn sẽ đi đâu?"
                      type="search"
                      fullWidth
                      value={valueSearch}
                      onChange={(e) => setValueSearch(e.target.value)}
                    />
                  </div>
                )}
                renderOption={(option) => (
                  <div className={classes.modal__locations_searched}>
                    <div className={classes.modal__locations__searched__icons}>
                      <MdMyLocation />
                    </div>
                    <div>
                      <Typography
                        variant="body1"
                        className={classes.modal__locations__searched__name}
                      >
                        {option?.name}
                      </Typography>
                    </div>
                  </div>
                )}
              />
            </div>
            {arrListSearch.length > 0 ? (
              <Fragment>
                {arrListSearch.map((item) => (
                  <div
                    key={item._id}
                    className={classes.modal__locations_searched}
                  >
                    <div className={classes.modal__locations__searched__icons}>
                      <MdMyLocation />
                    </div>
                    <div>
                      <Typography
                        variant="body1"
                        className={classes.modal__locations__searched__name}
                        onClick={() => {
                          history.push(`/list/${item._id}`);
                          handleHideModalSearch();
                        }}
                      >
                        {item?.name} - {item?.province}
                      </Typography>
                    </div>
                  </div>
                ))}
              </Fragment>
            ) : (
              <div className={classes.modal__list__search}>
                <Typography variant="body2">TÌM KIẾM GẦN ĐÂY</Typography>
                {locations?.slice(0, 5)?.map((item) => (
                  <div
                    key={item._id}
                    className={classes.modal__locations_searched}
                  >
                    <div className={classes.modal__locations__searched__icons}>
                      <MdMyLocation />
                    </div>
                    <div>
                      <Typography
                        variant="body1"
                        className={classes.modal__locations__searched__name}
                        onClick={() => {
                          history.push(`/list/${item._id}`);
                          handleHideModalSearch();
                        }}
                      >
                        {item?.name} - {item?.province}
                      </Typography>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Slide>
      </Modal>
    </div>
  );
};

export default HeaderMobileHuy;
