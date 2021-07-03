// Style
import SearchBarCSS from '../../css/components/SearchBar.module.css';

// Icons
import {FiSearch} from 'react-icons/fi';

// Dependencies
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from'react-router-dom';

// Actions
import {setResearch} from '../actions';


const SearchBar = () => {
    const [term, setTerm] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (term.trim() === '') {
            return alert('Please, write something');
        }
        dispatch(setResearch(term));

        const search = (text) => {
            const textModified = text.replace(' ', '-');
            history.push('/results/' + textModified);
        };
        search(term);
        setTerm('');    
    };

    return (
        <div className={SearchBarCSS['search']}>
            <form className={SearchBarCSS['form']} onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    value={term}
                    placeholder='Start the search'
                    className={SearchBarCSS['input']}
                    onChange={(e) => setTerm(e.target.value)}
                />
                <button type='submit' className={SearchBarCSS['button']}>
                    <FiSearch className={SearchBarCSS['icon']} />
                </button>
            </form>
        </div>
    );
};
export default SearchBar;