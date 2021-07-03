// Style
import HomeCSS from '../../css/pages/Home.module.css';

// Dependencies
import React from 'react';
import {Link} from 'react-router-dom';

// Components 
import Button from '../components/Button';
import Footer from '../components/Footer';


const Home = () => {
    return (
        <div className={HomeCSS['home']}>
            <div className={HomeCSS['title']}>
                <div>Welcome <br/>in Bookland!</div>
            </div>
            <Link to='/search'>
                <Button text='Make a research!' />
            </Link>
            <Footer />
        </div>
    );
};
export default Home;