import React from 'react';
import { Link } from 'react-router-dom'

//Styles
import { Image } from './Thumb.styles';

//component Thumb called from Home Component
const Thumb =({ image, movieId, clickable}) =>( 
    <>
        {clickable ? (
            <Link to={`/${movieId}`}>
            <Image src={image} alt="movie-thumbnail" />
            </Link>
        ) :  <Image src={image} alt="movie-thumbnail" />}
       
    </>
)
export default Thumb;