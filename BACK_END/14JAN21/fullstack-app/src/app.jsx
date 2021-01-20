import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'

// import component
import Navigation from './components/navigation'

// import pages
import Home from './pages/home'
import Product from './pages/product'
import Login from './pages/login'
import SignUp from './pages/Sign_Up'

// import actions
import { keepLogin } from './action'
import { connect } from 'react-redux'

function App(props) {
    useEffect(() => {
        props.keepLogin()
    }, [props])

    return (
        <div>
            <Navigation />
            <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/product' component={Product} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={SignUp} />
            </Switch>
        </div>
    )
}

export default connect(null, { keepLogin })(App)

