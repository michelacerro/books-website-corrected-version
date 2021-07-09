// Style
import ListedBooksCSS from '../../css/components/ListedBooks.module.css';

// Icons
import {ImHeart} from 'react-icons/im';
import {IoClose} from 'react-icons/io5';

// Images
import cover from '../../images/cover.jpg';

// Dependencies
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';

// Actions
import {deleteBook} from '../actions';


const ListedBooks = (props) => {
    const [like, setLike] = useState(false);
    const dispatch = useDispatch();

    const eliminateBook = (e) => {
        dispatch(deleteBook(e.target.id));
    };

    return (
        <div className={ListedBooksCSS['general-container']}>
            <Link to={`/info/${props.info.id}`} className={ListedBooksCSS['link']}>
                <div className={ListedBooksCSS['info-container']}>
                    <img 
                            src={props.info.image ? props.info.image : cover} 
                            alt={props.info.title} 
                            className={ListedBooksCSS['image']} 
                    />
                    <div className={ListedBooksCSS['data-container']}>
                        <div className={ListedBooksCSS['author-container']}>
                            {props.info.authors ? 
                                props.info.authors.map(author => (
                                    <h3 key={props.info.id + author}
                                        className={ListedBooksCSS['author']}
                                    >
                                        {author}
                                    </h3>
                                ))
                                :
                                <div></div>
                            }
                        </div>
                        <h1 className={ListedBooksCSS['title']}>{props.info.title}</h1>                    
                    </div>
                </div>
            </Link>
            <div className={ListedBooksCSS['icons-container']}>
                <ImHeart 
                    className={ListedBooksCSS['heart-icon']}
                    onClick={() => setLike(!like)} 
                    style={{color: like ? '#bc4639' : '#d4a59a'}}
                />
                <IoClose
                    className={ListedBooksCSS['delete-icon']}
                    id={props.info.id}
                    onClick={eliminateBook}
                />
            </div>
        </div>
    );
};
export default ListedBooks;