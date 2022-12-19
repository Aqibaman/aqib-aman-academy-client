import React from 'react';
import { Link } from 'react-router-dom';
import Ratings from 'react-ratings-declarative';
import { PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    const { _id, img, description, rating, price, title } = service;
    const ratingNumber = parseFloat(rating);
    return (

        <div className="max-w-screen-xl mx-auto card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
                <PhotoView src={img}>
                    <img className='w-96 h-48' src={img} alt="" />
                </PhotoView>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className='flex justify-between'>
                    <p className='text-xl text-purple-600'>Price: ${price}</p>
                    <p className='text-xl text-purple-600'>Rating:
                        <Ratings
                            rating={ratingNumber}
                            widgetDimensions="20px"
                            widgetSpacings="1px"
                        >
                            <Ratings.Widget widgetRatedColor="Orange" />
                            <Ratings.Widget widgetRatedColor="Orange" />
                            <Ratings.Widget widgetRatedColor="Orange" />
                            <Ratings.Widget widgetRatedColor="Orange" />
                            <Ratings.Widget widgetRatedColor="Orange" />
                        </Ratings>
                    </p>
                </div>

                <p className='font-bold'>{description.slice(0, 100)}....</p>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}>
                        <button className="btn bg-purple-600 btn-primary font-semibold">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;