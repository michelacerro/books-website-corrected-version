// Style
import MyBooksCSS from '../../css/pages/MyBooks.module.css';

// Dependencies
import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

// Component
import ListedBooks from '../components/ListedBooks';
import Button from '../components/Button';


const MyBooks = () => {
    const booksList = useSelector(state => state.listReducer.books);

    return (
        <div className={MyBooksCSS['general-container']}>
            <div className={MyBooksCSS['button-container']}>
                <Link to='/search' className={MyBooksCSS['link-button']}>
                    <Button text='New Research' />
                </Link>
            </div>
            {booksList.length === 0 ?
                <div className={MyBooksCSS['no-books']}>
                    There are no saved books.
                    <br /> Search your favorite books and create your personal list!
                </div>
                : 
                <div className={MyBooksCSS['list-container']}>
                    {booksList.map(book => (
                        <ListedBooks key={book.id} info={book} />
                    ))}
                </div>             
            }
        </div>
    );
};
export default MyBooks;