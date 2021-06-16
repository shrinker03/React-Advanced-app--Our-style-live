import React, {useEffect, lazy, Suspense} from 'react';

import {connect} from 'react-redux';
import {Switch, Route, Redirect} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';
import {checkUserSession} from './redux/user/user.action';
import {selectCurrentUser} from './redux/user/user.selectors';

import Header from './components/header/header.component'
import Spinner from './components/spinner/spinner.component';

import { GlobalStyle } from './global.styles'; 
import ErrorBoundary from './components/error-boundary/error-boundary.component'; 

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInRegister = lazy(() => import('./pages/sign-in/sign-in-register.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

const App = ({checkUserSession, currentUser}) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route exact path="/sign" render={() => currentUser ? (<Redirect to="/" />) : (<SignInRegister />)} />
          </Suspense>
        </ErrorBoundary>
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
