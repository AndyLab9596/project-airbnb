import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, useLocation } from "react-router";
import { getRentRoomsAction } from "../../store/action/RentRoomsAction";
import {
  Button,
  IconButton,
  TablePagination,
  Box,
  Typography,
  Tooltip,
  Collapse,
  Grid,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import useStyles from "./style";
import SearchBar from "material-ui-search-bar";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { formMoney } from "../../utilities/coordinates";
import ButtonSubmit from "../../components/ButtonSubmit";
import queryString from "query-string";
import EditRoom from "./EditRoom";
import { removeAccents } from "../../constants/config";

const AdminRoom = ({ handleToggleRatedRoom }) => {
  const location = useLocation();
  const params = queryString.parse(location.search);

  const dispatch = useDispatch();
  const [searched, setSearched] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const history = useHistory();
  useEffect(() => {
    dispatch(getRentRoomsAction(params?.locationId));
  }, [params?.locationId, dispatch]);
  const { arrListRoom } = useSelector((state) => state.RentRoomsReducer);
  const classes = useStyles();
  const tableHeader = ["", "", "Name", "Description", "Price", ""];

  const filteredRows = arrListRoom.filter((row) => {
    return removeAccents(row?.name).includes(searched.toLowerCase());
  });

  const cancelSearch = () => {
    setSearched("");
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  const ContentTableRow = ({ room }) => {
    const [open, setOpen] = useState(false);

    return (
      <Fragment>
        <TableRow key={room?._id} hover role="checkbox" tabIndex={-1}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell align="left">
            <img src={room?.image} alt="avatar" className={classes.image} />
          </TableCell>
          <TableCell align="left">{room?.name}</TableCell>

          <TableCell align="left" className={classes.description}>
            {room?.description}
          </TableCell>
          <TableCell align="left">{formMoney(room?.price)}</TableCell>

          <TableCell align="left">
            <Tooltip title="Click để hiện thông tin đánh giá" placement="top">
              <Typography
                variant="body2"
                className={classes.valueate}
                onClick={(e) => {
                  history.push({
                    pathname: "/admin/rooms/ratings",
                    search: queryString.stringify({ roomId: room?._id }),
                  });
                  handleToggleRatedRoom(e, ["12"]);
                }}
              >
                Nội dung đánh giá phòng
              </Typography>
            </Tooltip>
          </TableCell>
        </TableRow>
        {/*  Edit Room */}
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <EditRoom room={room} params={params} />
            </Collapse>
          </TableCell>
        </TableRow>
      </Fragment>
    );
  };

  return (
    <Fragment>
      <Typography variant="h5" color="primary">
        {arrListRoom?.[0]?.locationId?.province} - Việt Nam
      </Typography>
      <SearchBar
        value={searched}
        onChange={(searchVal) => setSearched(searchVal)}
        onCancelSearch={() => cancelSearch()}
        placeholder="Search by name"
        className={classes.inputSearch}
      />
      <TableContainer component={Paper} className={classes.container}>
        <Table className={classes.table} stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {tableHeader.map((item) => (
                <TableCell align="left" padding="normal">
                  {item}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              ?.map((room) => (
                <ContentTableRow room={room} key={room._id} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={
          filteredRows?.length > 0 ? filteredRows?.length : arrListRoom?.length
        }
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Fragment>
  );
};

export default AdminRoom;
