import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isAuthenticated } from './auth'

const PrivateRoute = ({ component: Component, ...rest }) =>
    <Route  {...rest} render={props => {
        return isAuthenticated(props.location) !== -1 ?
            (<Component {...props} />) :
            (<Redirect to={{ pathname: '/', state: { from: props.location } }} />)
    }} />

export default PrivateRoute