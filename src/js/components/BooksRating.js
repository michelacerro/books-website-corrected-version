// Style 
import BooksRatingCSS from '../../css/components/BooksRating.module.css';

// Dependencies
import React from 'react';


const BooksRating = (props) => {
    return (
        <div className={BooksRatingCSS['container']}>
            <div className={BooksRatingCSS['score-container']}>
                <p 
                    className={BooksRating['score']}
                    style={props.averageRating > 0 ? {marginRight:'10px', display: 'block'} : {margin:'0', display: 'none'}}
                >
                    <strong>{props.averageRating ? props.averageRating : ''}/5</strong>,
                </p>
            </div>
            <p className={BooksRatingCSS['reviews']}>{props.ratingsCount} Reviews</p>
        </div>
    );
};
export default BooksRating;