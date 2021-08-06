import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
 
    
  } from "react-router-dom";
import { AuthContext } from '../Auth/AuthContext';

import { LoginScreen } from '../login/LoginScreen';
import { DashBoardRoutes } from './DashBoardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const RouterApp = () => {
  const {user} = useContext(AuthContext)
    return (
        <>
        <Router>
        <div>
          <Switch>
            <PublicRoute exact path="/login" isAuthenticated={user.logged} redirect={'/'} component={LoginScreen} />
            <PrivateRoute isAuthenticated={user.logged} path="/" redirect={'/login'} component={DashBoardRoutes} />
          </Switch>
        </div>
     
      </Router>
        </>
    )
}
