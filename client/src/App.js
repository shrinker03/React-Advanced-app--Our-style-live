import React, {useEffect} from 'react';
import './App.css';

import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {checkUserSession} from './redux/user/user.action';
import {selectCurrentUser} from './redux/user/user.selectors';

import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInRegister from './pages/sign-in/sign-in-register.component';
import CheckoutPage from './pages/checkout/checkout.component';

const App = ({checkUserSession, currentUser}) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/sign" render={() => currentUser ? (<Redirect to="/" />) : (<SignInRegister />)} />
      </Switch>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () =>  dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App); 
