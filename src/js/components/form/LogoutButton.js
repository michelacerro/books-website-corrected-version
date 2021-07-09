// Style
import FormCSS from '../../../css/components/Form.module.css';

// Dependecies
import React from 'react';
import {useHistory} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

// Contexts
import {useAuth} from '../../contexts/AuthContext';

// Component
import Button from '../Button';


const Logout = () => {
    const {logout} = useAuth();
    const history = useHistory();

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            await logout;
            await firebase.auth().setPersistence('none');
            history.push('/books-website-corrected-version');
            window.location.reload();
        } catch (error){
            alert(error);
        }
    };
    return (
        <div className={FormCSS['button']}>
            <form onSubmit={handleLogout}>
                <Button text='Log Out' />
            </form>
        </div>
    );
};
export default Logout;