import React from 'react';
import './customerReview.css';
import { reviewsList } from '../../../constants/info';
import { Card } from '@mui/material';
import starIcon from '../../../assets/images/star.png';

const ReviewItem = ({ item }) => {

    return <Card className='reviewCard'>
        <h4>{item.name}</h4>
        <div className="starSection">
            {[1, 2, 3, 4, 5].map((number) => {
                return <img
                    key={number}
                    src={starIcon}
                    className={item.starRating < number ? 'greyStarStyle' : 'starStyle'}
                    alt='star-icon'
                />
            })}
        </div>
        <p>{item.review}</p>
    </Card>
}

export const CustomerReviews = ({ title = '' }) => {
    return (
        <div className='reviewContainer'>
            <h1 className='sectionHeaderText'>{title || 'Our Customers Review'}</h1>

            <div className='roomCardContainer'>
                {reviewsList.map((item) => <ReviewItem key={item.name} item={item} />)}
            </div>

            <div className='roomCardCarousel'>
                <div className='scrollReview'>
                    {reviewsList.map((item) => <ReviewItem key={item.name} item={item} />)}
                </div>
            </div>
        </div>
    )
}