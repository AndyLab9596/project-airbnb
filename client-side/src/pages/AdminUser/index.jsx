import { IconButton, Typography, Button } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Pagination } from "@material-ui/lab";
import { Box } from "@mui/system";
import moment from "moment";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FAKE_AVATAR } from "../../constants/config";
import {
  deleteUserAction,
  getListUser,
} from "../../store/action/ManageUserAction";
import { useHistory } from "react-router";
import { useConfirm } from "material-ui-confirm";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: 600,
    paddingBottom: 20,
  },
  avatar: {
    width: 70,
    height: 70,
    objectFit: "cover",
  },
  pagination: {
    justifyContent: "center",
    display: "flex",
  },
});

const AdminUser = () => {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { userList } = useSelector((state) => state.ManageUserReducer);
  const history = useHistory();
  const confirm = useConfirm();

  useEffect(() => {
    dispatch(getListUser(page));
  }, [page]);

  const tableHeader = [
    "Name",
    "Avatar",
    "Email",
    "Birth Day",
    "Gender",
    "Type",
    "Address",
    "",
  ];
  const handleDeleteUser = (idUser) => {
    confirm({
      description: (
        <Typography variant="body2">
          By clicking DELETE, this user will be deleted
        </Typography>
      ),
      confirmationText: <Button color="secondary">DELETE</Button>,
      cancellationText: <Button color="primary">CANCLE</Button>,
    })
      .then(() => dispatch(deleteUserAction(idUser)))
      .catch(() => console.log("deletion canclled"));
  };
  return (
    <Fragment>
      <Typography variant="h4" className={classes.title}>
        User List
      </Typography>
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
            {userList?.content?.map((user) => (
              <TableRow key={user._id}>
                <TableCell align="left">{user?.name}</TableCell>
                <TableCell align="left">
                  <img
                    src={user?.avatar || `${FAKE_AVATAR}/${user?._id}`}
                    alt="avatar"
                    className={classes.avatar}
                  />
                </TableCell>
                <TableCell align="left">{user?.email}</TableCell>
                <TableCell align="left">
                  {moment(user?.birthday).format("DD/MM/YYYY")}
                </TableCell>
                <TableCell align="left">
                  {user?.gender === true ? "Male" : "Female"}
                </TableCell>
                <TableCell align="left">{user?.type}</TableCell>
                <TableCell align="left">{user?.address}</TableCell>
                <TableCell align="left">
                  <IconButton
                    color="primary"
                    onClick={() => history.push(`/admin/user/edit/${user._id}`)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    onClick={() => handleDeleteUser(user._id)}
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
        <Pagination
          count={userList?.totalPage}
          onChange={(e, page) => setPage(page)}
          page={page}
          defaultPage={1}
          color="primary"
          className={classes.pagination}
        />
      </Box>
    </Fragment>
  );
};

export default AdminUser;
