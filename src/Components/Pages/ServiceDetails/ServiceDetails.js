import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import Ratings from 'react-ratings-declarative';
import { AuthContext } from '../Authentication/contexts/AuthProvider/AuthProvider';
import ServiceReviews from './ServiceReviews';
import { PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import useTitle from '../../Shared/hooks';



const ServiceDetails = () => {
    useTitle("Service Details");
    const { _id, title, img, rating, price, description } = useLoaderData();
    console.log(_id);
    const { user } = useContext(AuthContext);
    const ratingNumber = parseInt(rating);
    const [reviews, setReviews] = useState([]);
    const location = useLocation();

    useEffect(() => {
        fetch(`https://aqibamanacademy-server.vercel.app/reviews/?training_id=${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [_id]);

    const handlePlaceReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const rating = form.rating.value;
        const title = form.title.value;
        const individualReview = form.individualReview.value;
        // console.log(name, email, rating, title, individualReview);

        const reviewCollection = {
            training_id: _id,
            title: title,
            rating: rating,
            review: individualReview,
            displayName: name,
            email: user?.email,
            photoURL: photoURL

        }


        fetch('https://aqibamanacademy-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(reviewCollection)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review placed successfully');
                    form.reset();
                    setReviews([reviewCollection, ...reviews]);
                }

            })
            .catch(e => console.error(e))
    }

    return (

        <div>
            <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                    <div className="flex flex-col justify-center">
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                {title}
                                <br />
                                Training Fee: {' '}
                                <span className="relative px-1">
                                    <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-400" />
                                    <span className="relative inline-block text-purple-400">
                                        ${price}
                                    </span>
                                </span>
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                {description}
                            </p>
                        </div>
                        <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
                            <div className="bg-white border-l-4 shadow-sm border-purple-400">
                                <div className="h-full p-5 border border-l-0 rounded-r">
                                    <h6 className="mb-2 font-semibold leading-5">
                                        Rating: {rating} star
                                    </h6>
                                    <p className="text-sm text-gray-900">
                                        <div>

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
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <PhotoView src={img}>
                            <img
                                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                                src={img}
                                alt=""
                            />
                        </PhotoView>
                    </div>

                </div>
            </section>

            <section>
                <div>

                    {
                        user?.email ?
                            <>
                                <div className='my-10 max-w-screen-xl mx-auto'>
                                    <form onSubmit={handlePlaceReview}>
                                        <h2 className='text-4xl my-10 text-center text-dark font-bold'>Add your review</h2>
                                        <h2 className='text-3xl my-10 text-center text-dark font-bold'> <br /> Please, add your review so that we can evaluate ourselves.</h2>
                                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                                            <input name='name' type="text" placeholder="Your Name" defaultValue={user?.displayName} className="input input-primary w-full input-bordered" required />
                                            <input name='photoURL' type="text" placeholder="Your Photo" defaultValue={user?.photoURL} className="input input-primary w-full input-bordered" readOnly />
                                            <input name='title' type="text" placeholder="Training Name" defaultValue={title} className="input input-primary w-full input-bordered" readOnly />
                                            <input name='rating' type="number" placeholder="Place the Rating" className="input input-primary w-full input-bordered" required />

                                        </div>
                                        <div>
                                            <textarea name='individualReview' className="textarea textarea-primary w-full mt-10 h-32" placeholder="Write here the review" required></textarea>
                                        </div>
                                        <div className='my-10'>
                                            <input className='btn btn-primary' type="submit" value="Submit the Review" />
                                        </div>

                                    </form>
                                </div>
                            </>
                            :
                            <>
                                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                                    <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                                        <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
                                            <a href="/" className="mb-6 sm:mx-auto">
                                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                                                    <svg
                                                        className="w-10 h-10 text-deep-purple-accent-400"
                                                        stroke="currentColor"
                                                        viewBox="0 0 52 52"
                                                    >
                                                        <polygon
                                                            strokeWidth="3"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            fill="none"
                                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                                        />
                                                    </svg>
                                                </div>
                                            </a>
                                            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                                                    <span className="relative inline-block">
                                                        <svg
                                                            viewBox="0 0 52 24"
                                                            fill="currentColor"
                                                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                                        >
                                                            <defs>
                                                                <pattern
                                                                    id="e77df901-b9d7-4b9b-822e-16b2d410795b"
                                                                    x="0"
                                                                    y="0"
                                                                    width=".135"
                                                                    height=".30"
                                                                >
                                                                    <circle cx="1" cy="1" r=".7" />
                                                                </pattern>
                                                            </defs>
                                                            <rect
                                                                fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)"
                                                                width="52"
                                                                height="24"
                                                            />
                                                        </svg>
                                                        <span className="relative">Please</span>
                                                    </span>{' '}
                                                    sign in here for posting a REVIEW
                                                </h2>
                                                <p className="text-base text-gray-700 md:text-lg">
                                                    If you want to give a review please sign in here. Then you can post a review. Thank you for reviewing my training!
                                                </p>
                                            </div>
                                            <div>
                                                <Link
                                                    to="/signin" state={{ from: location }} replace
                                                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                                                >
                                                    Sign in
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                    }

                </div>
                <div>
                    <h2 className="max-w-lg mb-6 font-sans text-2xl text-center font-bold tracking-tight mx-auto text-gray-900 sm:text-4xl sm:leading-none">
                        <br className="hidden md:block" />
                        I have {' '}
                        <span className="relative px-1">
                            <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-400" />
                            <span className="relative inline-block text-purple-400">
                                {reviews?.length} reviews
                            </span>
                        </span>on this Training.
                    </h2>

                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                            {
                                reviews?.map(singleReview => <ServiceReviews
                                    key={singleReview?._id}
                                    singleReview={singleReview}
                                ></ServiceReviews>)
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetails;


