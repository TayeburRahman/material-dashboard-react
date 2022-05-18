import { Rating } from '@mui/material';
import React from 'react';

const TestiMonialsDetails = ({testiMonialDetail}) => {
     return (
        <div className="item">
            <div className="shadow-effect">
                <img className="img-circle" src={testiMonialDetail?.productUrl} />
                <h5>{testiMonialDetail?.userName}</h5>

                <Rating name="read-only" value={testiMonialDetail?.rating} readOnly />
                <p>{testiMonialDetail?.description}</p>
             </div>
            
        </div>
    );
};

export default TestiMonialsDetails;