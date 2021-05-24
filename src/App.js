// import React, {Component} from 'react';
// import './App.css';
// import Header from './components/header/header.component'
// import {Switch, Route, Redirect} from 'react-router-dom';
// import {connect} from 'react-redux';
// import HomePage from './pages/homepage/homepage.component'
// import ShopPage from './pages/shop/shop.component'
// import SignInRegister from './pages/sign-in/sign-in-register.component';
// import {auth, createUserProfileDocument} from './firebase/firebase.utils';
// import {setCurrentUser} from './redux/user/user.action';
// import {createStructuredSelector} from 'reselect';
// import {selectCurrentUser} from './redux/user/user.selectors';
// import CheckoutPage from './pages/checkout/checkout.component';

// class App extends Component {
  
//   unsubscribedFromAuth = null;

//   componentDidMount() {

//     const {setCurrentUser} = this.props;

//     this.unsubscribedFromAuth = auth.onAuthStateChanged(async userAuth => {
//       if(userAuth) {
//         const userRef = await createUserProfileDocument(userAuth)

//         userRef.onSnapshot(snapShot => {
//           setCurrentUser ({
//               id: snapShot.id,
//               ...snapShot.data()
//           })
//         })
//       }
//       setCurrentUser(userAuth);
//     })
//   }

//   componentWillUnmount() { 
//     this.unsubscribedFromAuth()
//   }

//   render() {
//     return (
//     <div>
//       <Header />
//       <Switch>
//         <Route exact path="/" component={HomePage} />
//         <Route path="/shop" component={ShopPage} />
//         <Route exact path="/checkout" component={CheckoutPage} />
//         <Route exact path="/sign" render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInRegister />)} />
//       </Switch>
//     </div>
//     )
//   }
// }

// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser,
// });

// const mapDispatchToProps = dispatch => ({
//   setCurrentUser: user => dispatch(setCurrentUser(user))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(App); 
