import React from 'react'
import { useSelector } from 'react-redux'
import Layout from '../src/containers/Layout'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
export default function ProtectedRoute() {
    const auth = useSelector(state => state.auth);

    return (
        <>
            {   !auth.isAuthenticated ? <Redirect from="/" to="/login" /> :
                <>
                    <Route path="/app" component={Layout} />
                    <Route exact path="/" render={() => <Redirect to="/app/dashboard" />} />
                </>}

        </>
    )
}
