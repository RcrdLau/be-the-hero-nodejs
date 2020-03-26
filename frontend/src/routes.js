import React from 'react'
import History from 'helpers/History'
import {
    BrowserRouter,
    Route,
    // Router,
    Switch,
    Redirect,
} from 'react-router-dom'

//Pages
// import Home from 'pages/Home'
import Logon from 'pages/Logon'
import Register from 'pages/Register'
import Profile from 'pages/Profile'
import NewIncident from 'pages/NewIncident'

class Routes extends React.Component {
    render() {
        return (
            <BrowserRouter history={History}>
                <Switch>
                    <Route exact path='/' exact component={Logon} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/profile' component={Profile} />
                    <Route exact path='/incidents/new' component={NewIncident} />
                    <Redirect from='*' to='/' />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes
