import React, {useContext} from 'react';
import '../../App.css';
import { ThemeContext } from '../../context/ThemeContext';
import { UserContext } from '../../context/UserContext';

const Footer = () => {
    const {isDark, handleSetIsDark} = useContext(ThemeContext);
    const user = useContext(UserContext);

    return (
        <div className={isDark ? "dark": ""}>
            <button onClick={handleSetIsDark}>Dark Mode</button>
        </div>
    );
};

export default Footer;