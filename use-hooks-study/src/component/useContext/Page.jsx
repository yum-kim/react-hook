import React, { useContext } from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import '../../App.css';
import { ThemeContext } from '../../context/ThemeContext';

const Page = () => {
    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    );
};

export default Page;