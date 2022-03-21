import React, {useContext} from 'react';
import '../../App.css';
import { ThemeContext } from '../../context/ThemeContext';
import { UserContext } from '../../context/UserContext';

const Content = () => {
    const {isDark} = useContext(ThemeContext);
    const user = useContext(UserContext);

    return (
        <div className={isDark ? "dark": ""}>
            <p>{user}! have a nice day!</p>
        </div>
    );
};

export default Content;