import React from 'react';
import './header.styles.scss';

import {connect} from 'react-redux';
import {auth} from '../../firebase/firebase.utils';
import {ReactComponent as Logo} from '../../assets/logo.svg'
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {HeaderContainer, LogoContainer, OptionContainer, OptionLink} from './header.styles';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to="/" >
            <Logo className="logo" />
        </LogoContainer>
        <OptionContainer>
            <OptionLink to="/shop">SHOP</OptionLink>
            <OptionLink to="/contact">CONTACT</OptionLink>
            {currentUser ?
                <OptionLink as="div" onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
                :
                <OptionLink to="/sign">SIGN IN</OptionLink>
            }
            <CartIcon />
        </OptionContainer>
        {
            hidden ? null : <CartDropDown />
        }
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);