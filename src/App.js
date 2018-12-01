/* eslint-disable spaced-comment */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import HomePage from './components/pages/HomePage';
 import LoginPage from './components/pages/Login Page';
import DashboardPage from './components/pages/DashBoardPage';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';

import TopNavigation from './components/navigations/TopNavigation'


const App = ({location,isAuthenticated}) =>
    (<div className="ui container">
        {isAuthenticated && <TopNavigation/>}
        <Route location={location} path="/" exact component={HomePage} />
        <GuestRoute location={location} path="/login" exact component={LoginPage} />
        <UserRoute location={location} path="/dashboard" exact component={DashboardPage} />

    </div>)

App.propTypes ={
    location: PropTypes.shape({
        pathname:PropTypes.string.isRequired
    }).isRequired,
    isAuthenticated:PropTypes.bool.isRequired
}
function mapStateToProps(state) {
    return {
        isAuthenticated:!! state.user.email
    }
}

export default connect(mapStateToProps)(App);
