import { Link } from "react-router-dom";
import MyButtton from "../button/MyButton";
import { AuthContext } from "../../../context";
import React, { useContext } from 'react';

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    } 
    return (
        <div className="navbar">
            <MyButtton onClick={logout}>Exit</MyButtton>
        <div className="navbar__links">
          <Link to="/about">About</Link>
          <Link to="/posts">Posts</Link>
        </div>
      </div>
    );
};

export default Navbar;