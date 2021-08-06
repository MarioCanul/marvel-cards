import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { HeroesDc } from '../dc/HeroesDc'
import { Heroes } from '../herores/Heroes'
import { HeroeMarvel } from '../marvel/HeroeMarvel'
import { SearchScreen } from '../search/SearchScreen'
import { Navbar } from '../ui/NavBar'

export const DashBoardRoutes = () => {
    return (
        <> 
        <Navbar/>
        <div className="container">

        <Switch >
            <Route exact path="/marvel" component={HeroeMarvel} />
            <Route exact path="/heroe/:heroeId" component={Heroes} />
            <Route exact path="/dc" component={HeroesDc} />
            <Route exact path="/search" component={SearchScreen} />
           <Redirect to="/marvel"/>
          </Switch>
        </div>
        </>
    )
}
