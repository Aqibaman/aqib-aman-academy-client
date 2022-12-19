import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import Graph from '../../Assets/73384-man-and-graph.json';
import Training from '../../Assets/77000-man-graph.json';
import HomeService from './HomeService';
import useTitle from '../../Shared/hooks';

const Home = () => {
    useTitle("Home")
    const [homeServices, setHomeServices] = useState([]);
    useEffect(() => {
        fetch('https://aqibamanacademy-server.vercel.app/homeServices')
            .then(res => res.json())
            .then(data => setHomeServices(data))
    }, [])

    return (
        <div className='-z-10'>
            <div>
                <section>
                    <div className="mb-16">
                        <div className="bg-white">
                            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                                    <div>
                                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
                                            Aqib Aman Academy
                                        </p>
                                    </div>
                                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                                        <span className="relative inline-block">
                                            <svg
                                                viewBox="0 0 52 24"
                                                fill="currentColor"
                                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                            >
                                                <defs>
                                                    <pattern
                                                        id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e"
                                                        x="0"
                                                        y="0"
                                                        width=".135"
                                                        height=".30"
                                                    >
                                                        <circle cx="1" cy="1" r=".7" />
                                                    </pattern>
                                                </defs>
                                                <rect
                                                    fill="url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)"
                                                    width="52"
                                                    height="24"
                                                />
                                            </svg>
                                            <span className="relative -z-10">The</span>
                                        </span>{' '}
                                        Platform for building your supply chain skills
                                    </h2>
                                    <p className="text-base text-gray-700 md:text-lg">
                                        Buld your supply chain knowledge with this powerful courses of my Platform
                                    </p>
                                </div>
                                <div className="flex items-center sm:justify-center">
                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                                    ><Link to='/signup'>
                                            Get started
                                        </Link>
                                    </button>
                                    <Link
                                        to="/blog"
                                        aria-label=""
                                        className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-purple-700"
                                    >
                                        Learn more
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="relative px-4 sm:px-0">
                            <div className="absolute inset-0 bg-white h-1/2" />
                            <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
                                <div className="inline-block p-8 text-center">
                                    <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-purple-800">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                                        </svg>

                                    </div>
                                    <p className="font-bold tracking-wide text-gray-800">
                                        Learn from Online
                                    </p>
                                </div>
                                <div className="inline-block p-8 text-center">
                                    <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-purple-800">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                                        </svg>

                                    </div>
                                    <p className="font-bold tracking-wide text-gray-800">
                                        Learn to know
                                    </p>
                                </div>
                                <div className="inline-block p-8 text-center">
                                    <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-purple-800">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                        </svg>

                                    </div>
                                    <p className="font-bold tracking-wide text-gray-800">
                                        Learn efficiently
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className='my-20'>
                        <div>
                            <p className="text-2xl text-center font-bold text-purple-600">Offered Trainings on</p>
                            <h2 className='text-5xl text-center font-semibold'>Supply Chain Management</h2>
                            <p className=' text-center my-5'>I will provide you my potential expertise on this field. It wil help you to understand the global logistics system. <br /> I will help you with hands on expertise on this sector with my knowledge.</p>
                        </div>
                        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5'>
                            {
                                homeServices.map(homeService => <HomeService key={homeService._id} homeService={homeService}></HomeService>)
                            }
                        </div>
                        <div className="my-10 card-actions justify-center">
                            <Link to={`/services`}>
                                <button className="btn bg-purple-600 btn-primary font-semibold">View All</button>
                            </Link>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                            <div className="flex flex-col justify-center">
                                <div className="max-w-xl mb-6">
                                    <div>
                                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
                                            Aqib Aman Academy
                                        </p>
                                    </div>
                                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-dark sm:text-4xl sm:leading-none">
                                        The pool of the ocean of
                                        <br className="hidden md:block" />
                                        supply chain{' '}
                                        <span className="inline-block text-deep-purple-accent-400">
                                            knowledge
                                        </span>
                                    </h2>
                                    <p className="text-base text-dark md:text-lg">
                                        Learn many things from our training. It will help you to build you knowledge in a better way in the sector of Sypply Chain Management (SCM). Thank you!
                                    </p>
                                </div>
                                <Link
                                    to="/blog"
                                    aria-label=""
                                    className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-400 hover:text-purple-800"
                                >
                                    Learn more
                                    <svg
                                        className="inline-block w-3 ml-2"
                                        fill="currentColor"
                                        viewBox="0 0 12 12"
                                    >
                                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                    </svg>
                                </Link>
                            </div>
                            <div className="relative">
                                <Lottie animationData={Training} loop={true} />
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="relative flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
                        <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
                            <Lottie animationData={Graph} loop={true} />
                        </div>
                        <div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
                            <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
                                <div className="max-w-xl mb-6">
                                    <div>
                                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
                                            Aqib Aman Academy
                                        </p>
                                    </div>
                                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-dark  sm:text-4xl sm:leading-none">
                                        You will understand
                                        <br className="hidden md:block" />
                                        SCM{' '}
                                        <span className="inline-block text-purple-600">
                                            Charts
                                        </span>
                                        {' '}easily.
                                    </h2>
                                    <p className="text-base text-dark md:text-lg">
                                        Learn from my expertise where I will help you to build the profund knowledge in this sector. SCM will help to understand the importance of data.
                                    </p>
                                </div>
                                <form>

                                    <div className="flex items-center mt-4">
                                        <button
                                            type="submit"
                                            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                                        ><Link to='/blog'>Learn more</Link>

                                        </button>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>



                <section>
                    <div className="relative bg-gray-900">
                        <div className="absolute inset-x-0 bottom-0">
                            <svg
                                viewBox="0 0 224 12"
                                fill="currentColor"
                                className="w-full -mb-1 text-white"
                                preserveAspectRatio="none"
                            >
                                <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
                            </svg>
                        </div>
                        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                            <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
                                <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                    Learn Coding
                                    <br className="hidden md:block" />
                                    And Enjoy{' '}
                                    <span className="relative inline-block">
                                        Your Life{' '}
                                        <div className="w-full h-3 -mt-3 bg-purple-accent-400" />
                                    </span>
                                </h2>
                                <p className="mb-6 text-base font-thin tracking-wide text-gray-300 md:text-lg">
                                    Sign up to our newsletter page for updates
                                </p>
                                <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
                                    <input
                                        placeholder="Email"
                                        required
                                        type="text"
                                        className="flex-grow w-full h-12 px-4 mb-3 text-white transition duration-200 bg-transparent border-2 border-gray-400 rounded appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-200 focus:outline-none focus:shadow-outline"
                                    />
                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-purple-400 hover:bg-purple-accent-700 focus:shadow-outline focus:outline-none"
                                    >
                                        Subscribe
                                    </button>
                                </form>
                                <p className="max-w-md mb-10 text-xs font-thin tracking-wide text-gray-500 sm:text-sm sm:mx-auto md:mb-16">
                                    Sign Up Here
                                </p>
                                <Link
                                    to="/signup"
                                    aria-label="Scroll down"
                                    className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-400 hover:border-teal-400 hover:shadow hover:scale-110"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="12"
                                        height="12"
                                        viewBox="0 0 12 12"
                                        fill="currentColor"
                                    >
                                        <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;