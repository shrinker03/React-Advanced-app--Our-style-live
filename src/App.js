import React, {Component} from 'react';
import './App.css';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user.selectors';
import {Switch, Route, Redirect} from 'react-router-dom';
import {checkUserSession} from './redux/user/user.action';

import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInRegister from './pages/sign-in/sign-in-register.component';
import CheckoutPage from './pages/checkout/checkout.component';

class App extends Component {
  
  unsubscribedFromAuth = null;

  componentDidMount() {
    const {checkUserSession} = this.props;
    checkUserSession();
  }

  componentWillUnmount() { 
    this.unsubscribedFromAuth()
  }

  render() {
    const {currentUser} = this.props;
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
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () =>  dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App); 
