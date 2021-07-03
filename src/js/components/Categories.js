// Style
import CategoriesCSS from '../../css/components/Categories.module.css';

// Dependencies
import React from 'react';


const Categories = (props) => {
    return (
        <>
            {props.categories ?
                props.categories.map(category => (
                    <p  key={category} className={CategoriesCSS['category']}>
                        {category}
                    </p>
                 ))
                :
                <div></div>
            }
        </>
    );
};
export default Categories;