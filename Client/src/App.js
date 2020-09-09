import React, { lazy } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import AccessibleNavigationAnnouncer from './components/AccessibleNavigationAnnouncer'
import store from '../src/redux/store'
import '../src/assets/css/tailwind.css'
import PortectedRoute from './ProtectedRoute'
import ProtectedRoute from './ProtectedRoute'


const Layout = lazy(() => import('./containers/Layout'))
const Login = lazy(() => import('./pages/Login'))
const CreateAccount = lazy(() => import('./pages/CreateAccount'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))


function App() {


  return (
    <Provider store={store}>
      <Router>
        <AccessibleNavigationAnnouncer />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/create-account" component={CreateAccount} />
          <Route path="/forgot-password" component={ForgotPassword} />

          <ProtectedRoute />
          {/* Place new routes over this */}

          {/* If you have an index page, you can remove this Redirect */}





        </Switch>
      </Router>
    </Provider>
  )
}

export default App
