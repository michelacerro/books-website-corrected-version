// Style
import HomeCSS from '../../css/pages/Home.module.css';

// Dependencies
import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

// Components 
import Button from '../components/Button';
import Footer from '../components/Footer';


const Home = () => {
    const log = useSelector(state => state.logReducer);

    return (
        <div className={HomeCSS['home']}>
            <div className={HomeCSS['title']}>
                <div>Welcome <br/>in Bookland!</div>
            </div>
            <Link to='/search'>
                <Button text='Make a research!' />
            </Link>
            {!log ? <Footer /> : <div></div>}   
        </div>
    );
};
export default Home;