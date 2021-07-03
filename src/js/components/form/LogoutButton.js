// Style
import FormCSS from '../../../css/components/Form.module.css';

// Dependecies
import React from 'react';
import {useDispatch} from 'react-redux';

// Contexts
import {useAuth} from '../../contexts/AuthContext';

// Actions
import {logoutState} from '../../actions';

// Component
import Button from '../Button';


const Logout = () => {
    const {logout} = useAuth();
    const dispatch = useDispatch();

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            await logout;
            dispatch(logoutState());
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