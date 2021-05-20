import React from 'react';
import './sign-in-register.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInRegister = () => (
    <div className="sign-in-register">
        <SignIn />
        <SignUp />
    </div>
)

export default SignInRegister;