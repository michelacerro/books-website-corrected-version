// Style
import ResultsCSS from '../../css/pages/Results.module.css';

// Dependecies
import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import axios from 'axios';

// Components
import Book from '../components/Book';
import SearchBar from '../components/SearchBar';


const Results = () => {
    const term = useSelector(state => state.researchReducer);
    const [books, setBooks] = useState([]);
    const apyKey = process.env.REACT_APP_BOOKS_API_KEY;
    const url =`https://www.googleapis.com/books/v1/volumes?q=${term}&maxResults=40&key=${apyKey}`;

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(url)
                .catch(error => alert(error));
            setBooks(response.data.items);
        }
        fetchData();      
    }, [url])

    return (
        <div className={ResultsCSS['general-container']}>
            <div className={ResultsCSS['search-container']}>
                <SearchBar />
            </div>
            <div className={ResultsCSS['books-container']}>
                {books.map(book => (
                    <Book key={book.id} info={book} />
                ))}
            </div>
        </div>
    );
};
export default Results;