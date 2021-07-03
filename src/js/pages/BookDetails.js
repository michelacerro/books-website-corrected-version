// Style
import BookDetailsCSS from '../../css/pages/BookDetails.module.css';

// Image
import cover from '../../images/cover.jpg';

// Dependencies
import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import axios from 'axios';

// Components
import BooksRating from '../components/BooksRating';
import Categories from '../components/Categories';
import Button from '../components/Button';


const BookDetails = () => {
    const [details, setDetails] = useState([]);
    const {id} = useParams();
    const apyKey = process.env.REACT_APP_BOOKS_API_KEY;
    const url =`https://www.googleapis.com/books/v1/volumes/${id}?key=${apyKey}`;
    
    useEffect(() => {
        const fetchDetails = async () => {
            const response = await axios.get(url)
                .catch(error => alert(error))
            setDetails(response.data.volumeInfo);
        }
        fetchDetails();
    }, [url])

    return (
        <div className={BookDetailsCSS['general-container']}>
            <div className={BookDetailsCSS['data-container']}>

                {/* Image */}
                <div>
                    <img    src={details.imageLinks ? details.imageLinks.thumbnail : cover} 
                            alt={details.title} 
                            className={BookDetailsCSS['image']}
                    />
                </div>

                <div className={BookDetailsCSS['details-container']}>
                    {/* Authors + Title + Subtitle + Description */}
                    <div className={BookDetailsCSS['authors-container']}>
                        {details.authors 
                            ? (
                                details.authors.map(author => <h3 key={author}>{author}</h3>)
                            ) : (
                            <div></div>
                        )}
                    </div>
                    <h1 className={BookDetailsCSS['title']}>{details.title}</h1>
                    <h2 className={BookDetailsCSS['subtitle']}>{details.subtitle ? details.subtitle : ''}</h2>
                    <p className={BookDetailsCSS['description']}>{details.description ? details.description : ''}</p>

                    <div className={BookDetailsCSS['extra-container']}>
                        {/* Rating */}
                        <div className={BookDetailsCSS['rating']}>
                            {details.averageRating && details.ratingsCount
                                ? (
                                    <BooksRating averageRating={details.averageRating} ratingsCount={details.ratingsCount} />
                                ) : (
                                    <BooksRating averageRating={0} ratingsCount={0} />
                                )}
                        </div>
                        <div className={BookDetailsCSS['more-info-container']}>
                            
                            {/* Categories */}
                            <div 
                                className={BookDetailsCSS['category-container']}
                                style={(details.categories && details.categories.length > 0) ? {marginRight:'80px'} : {margin:'0'}}
                            >
                                {details.categories ? <Categories categories={details.categories} /> : <div></div>}
                            </div>                 
                            
                            {/* Language + Pages + Publication info + ISNB + link */}
                            <div className={BookDetailsCSS['info-container']}>
                                <p>Language: <strong>{details.language}</strong></p>
                                <p>{details.printedPageCount} pages</p>
                                <p>{details.publisher}, {details.publishedDate}</p>
                                <br />
                                <div>
                                    {details.industryIdentifiers 
                                        ? (
                                            details.industryIdentifiers.map(data => {
                                                return <p key={data.type}>{data.type.replace('_', ' ')}: {data.identifier.replace('_', ' ')}</p>
                                            })
                                        ) : (
                                        <div></div>
                                    )}
                                </div>
                                <br />
                                <a 
                                    href={details.previewLink} 
                                    target='_blank'
                                    rel='noreferrer'
                                    className={BookDetailsCSS['link']}
                                >
                                    Read more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Link to='/search'><Button text='New Research' /></Link>
        </div>
    );
}; export default BookDetails;