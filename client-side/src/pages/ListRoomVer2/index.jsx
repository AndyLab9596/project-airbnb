import React, { Fragment, useCallback, useEffect, useMemo } from 'react';
import DesktopListRoom from './DesktopListRoom'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import MobileListRoom from './MobileListRoom';
import { useDispatch, useSelector } from 'react-redux';
import { getRentRoomPaginateAction } from '../../store/action/RentRoomsAction';
import { useParams } from 'react-router';

const ListRoomVer2 = () => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
    const dispatch = useDispatch();
    const params = useParams();
    const locationId = params.locationId

    const fetchRentsRoom = useCallback(() => {
        dispatch(getRentRoomPaginateAction(locationId))
    }, [locationId]);

    const paginateRentRoom = useSelector(state => state.RentRoomsReducer.paginateRentRoom);

    useEffect(() => {
        fetchRentsRoom()
    }, [fetchRentsRoom])

    if (paginateRentRoom.length === 0) return <h3>Loading</h3>

    return (
        <Fragment>
            {isDesktop ? <DesktopListRoom paginateRentRoom={paginateRentRoom} /> : <MobileListRoom />}
        </Fragment>
    )
}

export default ListRoomVer2