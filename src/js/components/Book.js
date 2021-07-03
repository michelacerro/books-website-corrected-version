// Style
import BookCSS from '../../css/components/Book.module.css';

// Images
import cover from '../../images/cover.jpg';

// Dependencies
import React from 'react';
import {Link} from 'react-router-dom';

// Components
import BooksRating from './BooksRating';
import Categories from './Categories';


const Book = (props) => {
    const id = props.info.id;
    const info = props.info.volumeInfo;

    return (
        <Link to={`/info/${id}`} className={BookCSS['link']}>
            <div className={BookCSS['general-container']}>
                <img 
                    src={info.imageLinks ? info.imageLinks.thumbnail : cover} 
                    alt={info.title} 
                    className={BookCSS['image']} 
                />
                <div className={BookCSS['data-container']}>
                    <div className={BookCSS['author-container']}>
                        {info.authors ? 
                            info.authors.map(author => (
                                <h3 key={id + author}
                                    className={BookCSS['author']}
                                >
                                    {author}
                                </h3>
                            ))
                            :
                            <div></div>
                        }
                    </div>
                    <h1 className={BookCSS['title']}>{info.title}</h1>
                    
                    <div className={BookCSS['rating-container']}>
                        {(info.averageRating && info.ratingsCount) 
                            ? (
                                <BooksRating averageRating={info.averageRating} ratingsCount={info.ratingsCount} />
                            ) : (
                                <BooksRating averageRating={0} ratingsCount={0} />
                            )}
                    </div>
                    <div className={BookCSS['category-container']}>
                        {info.categories ? 
                            info.categories.map(category => (
                                <Categories categories={info.categories} key={id + category}/>
                            ))
                            :
                            <div></div>
                        }
                    </div>
                </div>
            </div>
        </Link>
    );
}; export default Book;
