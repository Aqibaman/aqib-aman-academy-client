import React from 'react';
import Ratings from 'react-ratings-declarative';

const ServiceReviews = ({ singleReview }) => {
    console.log(singleReview);
    const { title, rating, review, displayName, photoURL } = singleReview;
    const ratingNumber = parseFloat(rating);
    console.log(title);

    return (
        <div>
            <div className="p-8 bg-white border rounded shadow-sm">
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <a
                        href="/"
                        className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        aria-label="Category"
                    >
                        Rating
                    </a>{' '}
                    <span className="text-gray-600">— <Ratings
                        rating={ratingNumber}
                        widgetDimensions="20px"
                        widgetSpacings="1px"
                    >
                        <Ratings.Widget widgetRatedColor="Orange" />
                        <Ratings.Widget widgetRatedColor="Orange" />
                        <Ratings.Widget widgetRatedColor="Orange" />
                        <Ratings.Widget widgetRatedColor="Orange" />
                        <Ratings.Widget widgetRatedColor="Orange" />
                    </Ratings></span>
                </p>
                <a
                    href="/"
                    aria-label="Article"
                    title="Jingle Bells"
                    className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                    {title}
                </a>
                <p className="mb-5 text-gray-700">
                    {review}
                </p>
                <div className="flex items-center">
                    <a href="/" aria-label="Author" title="Author" className="mr-3">
                        <img
                            src={photoURL}
                            alt="avatar"
                            className="object-cover w-10 h-10 rounded-full shadow-sm"
                        />
                    </a>
                    <div>
                        <a
                            href="/"
                            aria-label="Author"
                            title="Author"
                            className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            {displayName}
                        </a>
                        <p className="text-sm font-medium leading-4 text-gray-600">
                            Student
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceReviews;