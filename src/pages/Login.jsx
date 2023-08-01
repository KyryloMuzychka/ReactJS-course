import React from 'react';
import MyButtton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';

const Login = () => {
    return (
        <div>
            <h1>Page for login</h1>
            <form>
                <MyInput type="text" placeholder="Login"/>
                <MyInput type="passord" placeholder="Password"/>
                <MyButtton>Sign in</MyButtton>
            </form>
        </div>
    );
};

export default Login;