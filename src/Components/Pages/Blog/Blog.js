import React from 'react';
import useTitle from '../../Shared/hooks';

const Blog = () => {
    useTitle("Blogs");
    return (
        <div>
            <div>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-purple-600 uppercase rounded-full bg-teal-accent-400">
                                Aqib Aman Academy
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-purple-600 sm:text-4xl md:mx-auto">
                            <span className="relative inline-block">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                >
                                    <defs>
                                        <pattern
                                            id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                                <span className="relative">The</span>
                            </span>{' '}
                            ultimate platform for building your supply chain knowledge
                        </h2>
                        <p className="text-base text-purple-600 md:text-lg">
                            See our famous blogs
                        </p>
                    </div>
                    <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
                        <div className="max-w-md sm:mx-auto sm:text-center">
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                                <svg
                                    className="w-12 h-12 text-purple-600 sm:w-16 sm:h-16"
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
                            <h6 className="mb-3 text-xl text-purple-600 font-bold leading-5">Difference between SQL and NoSQL</h6>
                            <p className="mb-3 text-m text-purple-600">
                                SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
                            </p>

                        </div>
                        <div className="max-w-md sm:mx-auto sm:text-center">
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full text-purple-600 bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                                <svg
                                    className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
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
                            <h6 className="mb-3 text-xl text-purple-600 font-bold leading-5">What is JWT, and how does it work?
                            </h6>
                            <p className="mb-3 text-m text-purple-600">
                                JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.
                            </p>

                        </div>
                        <div className="max-w-md sm:mx-auto sm:text-center">
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full text-purple-600 bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                                <svg
                                    className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
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
                            <h6 className="mb-3 text-xl text-purple-600 font-bold leading-5">What is the difference between javascript and NodeJS?
                            </h6>
                            <p className="mb-3 text-m text-purple-600">
                                JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
                            </p>

                        </div>
                        <div className="max-w-md sm:mx-auto sm:text-center">
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full text-purple-600 bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                                <svg
                                    className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
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
                            <h6 className="mb-3 text-xl text-purple-600 font-bold leading-5">
                                How does NodeJS handle multiple requests at the same time?

                            </h6>
                            <p className="mb-3 text-sm text-purple-600">
                                NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;