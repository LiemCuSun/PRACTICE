import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Profile from './pages/profile'

// import component
import Navigation from './components/navigation'

// import pages
import Home from './pages/home'
import Product from './pages/product'
import ProductTable from './pages/productTable'
import Login from './pages/login'
import SignUp from './pages/Sign_Up'
import Verify from './pages/verification'
import Category from './pages/category'

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
                <Route path='/productTable' component={ProductTable} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={SignUp} />
                <Route path='/verification' component={Verify} />
                <Route path='/profile' component={Profile} />
                <Route path='/category' component={Category} />
            </Switch>
        </div>
    )
}

export default connect(null, { keepLogin })(App)

