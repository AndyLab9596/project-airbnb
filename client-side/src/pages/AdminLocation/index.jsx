import {
  Button,
  IconButton,
  TablePagination,
  Tooltip,
  Typography,
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
import { Box } from "@mui/system";
import { useConfirm } from "material-ui-confirm";
import SearchBar from "material-ui-search-bar";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { FAKE_AVATAR, removeAccents } from "../../constants/config";
import {
  deleteLocationAction,
  getLocations,
} from "../../store/action/LocationAction";
import useStyles from "./style";
import queryString from "query-string";

const AdminLocation = ({ handleToggleRoom }) => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowPerPage] = useState(5);

  const dispatch = useDispatch();
  const { locations } = useSelector((state) => state.LocationReducer);
  const history = useHistory();
  const confirm = useConfirm();
  const [search, setSearch] = useState("");
  useEffect(() => {
    dispatch(getLocations(page));
  }, [dispatch]);

  const tableHeader = ["Name", "Image", "Province", "Country", "Valueate", ""];
  const handleDeleteLocation = (id) => {
    confirm({
      description: (
        <Typography variant="body2">
          By clicking DELETE, this location will be deleted
        </Typography>
      ),
      confirmationText: <Button color="secondary">DELETE</Button>,
      cancellationText: <Button color="primary">CANCLE</Button>,
    })
      .then(() => dispatch(deleteLocationAction(id)))
      .catch(() => console.log("deletion canclled"));
  };
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };
  const handleRowPerPageChange = (event) => {
    setRowPerPage(event.target.value);
    setPage(0);
  };
  const cancelSearch = () => {
    setSearch("");
  };
  const filtered = locations.filter((row) => {
    return removeAccents(row?.name).includes(search.toLowerCase());
  });

  return (
    <Fragment>
      <Typography variant="h4" className={classes.title}>
        Location List
      </Typography>
      <SearchBar
        value={search}
        onChange={(searchVal) => setSearch(searchVal)}
        onCancelSearch={() => cancelSearch()}
        placeholder="Search by name"
      />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
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
            {filtered
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              ?.map((location) => (
                <TableRow key={location._id} className={classes.tablerow}>
                  <TableCell align="left">
                    <Tooltip
                      title="Click để hiện danh sách phòng"
                      placement="top"
                    >
                      <Typography
                        variant="body2"
                        onClick={(e) => {
                          history.push({
                            pathname: `/admin/rooms`,
                            search: queryString.stringify({
                              locationId: location._id,
                            }),
                          });
                          handleToggleRoom(e, ["9"]);
                        }}
                      >
                        {location?.name}
                      </Typography>
                    </Tooltip>
                  </TableCell>
                  <TableCell align="left">
                    <img
                      src={location?.image}
                      alt="avatar"
                      className={classes.avatar}
                    />
                  </TableCell>
                  <TableCell align="left">
                    <Tooltip
                      title="Click để hiện danh sách phòng"
                      placement="top"
                    >
                      <Typography
                        variant="body2"
                        onClick={(e) => {
                          history.push(`/admin/rooms/${location._id}`);
                          handleToggleRoom(e, ["9"]);
                        }}
                      >
                        {location?.province}
                      </Typography>
                    </Tooltip>
                  </TableCell>
                  <TableCell align="left">{location.country}</TableCell>
                  <TableCell align="left">{location?.valueate}</TableCell>

                  <TableCell align="left">
                    <IconButton
                      color="primary"
                      onClick={() =>
                        history.push({
                          pathname: "/admin/location/edit",
                          search: queryString.stringify({
                            locationId: location._id,
                          }),
                        })
                      }
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="secondary"
                      onClick={() => handleDeleteLocation(location._id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box mt={4}>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={filtered > 0 ? filtered.length : locations.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowPerPageChange}
        />
      </Box>
    </Fragment>
  );
};

export default AdminLocation;
