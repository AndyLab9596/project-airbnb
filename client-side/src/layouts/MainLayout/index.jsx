import React, { Fragment } from 'react';
import { Route } from 'react-router';
import Footer from './Footer';
import Header from './Header';

const MainLayout = (props) => {

    const { Component, redirectPath, ...restProps } = props;


    return (
        <Route {...restProps} render={(propsRoute) => {
            return (
                <Fragment>
                    <Header {...propsRoute} />
                    <Component {...propsRoute} />
                    {/* <Footer {...propsRoute} /> */}
                </Fragment>
            )
        }}>
        </Route>
    );
};

export default MainLayout;