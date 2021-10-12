import React, { Fragment } from 'react';
import { Route } from 'react-router';
import Footer from './Footer';
import Header from './Header';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const MainLayout = (props) => {

    const { Component, redirectPath, ...restProps } = props;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.up('md'))


    return (
        <Route {...restProps} render={(propsRoute) => {
            return (
                <Fragment>
                    {isMobile ? (
                        <Header {...propsRoute} />
                    ) : (
                        'Hello'
                    )}

                    <Component {...propsRoute} />
                    {/* <Footer {...propsRoute} /> */}
                </Fragment>
            )
        }}>
        </Route>
    );
};

export default MainLayout;