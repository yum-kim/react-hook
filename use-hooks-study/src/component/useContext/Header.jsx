import React, { useContext } from 'react';
import '../../App.css';
import { ThemeContext } from '../../context/ThemeContext';
import { UserContext } from '../../context/UserContext';

const Header = () => {
    const {isDark} = useContext(ThemeContext);
    const user = useContext(UserContext);

    return (
        <div className={isDark ? 'dark': ''}>
            <h1>Welcome, {user}</h1>
        </div>
    );
};

export default Header;