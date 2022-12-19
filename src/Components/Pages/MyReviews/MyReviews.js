import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../Shared/hooks';
import { AuthContext } from '../Authentication/contexts/AuthProvider/AuthProvider';
import MySingleReview from './MySingleReview';





const MyReviews = () => {
    useTitle("My Reviews");
    const { user, logOut } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState()
    useEffect(() => {
        fetch(`https://aqibamanacademy-server.vercel.app/myreviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('training-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json()
            })
            .then(data => {
                setMyReviews(data);
            })
    }, [user?.email, logOut])


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if (proceed) {
            fetch(`https://aqibamanacademy-server.vercel.app/myreviews/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = myReviews.filter(odr => odr?._id !== id);
                        setMyReviews(remaining);
                        toast.error("Successfully Deleted")
                    }
                })
        }
    }

    return (
        <div className='min-h-screen mt-10'>

            {myReviews?.length ?
                <>
                    <div className="overflow-x-auto">
                        <table className="table w-full">

                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Service Name</th>
                                    <th>Review</th>
                                    <th>Review Rating</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myReviews?.map(myReview => <MySingleReview
                                        key={myReview._id}
                                        myReview={myReview}
                                        handleDelete={handleDelete}
                                    ></MySingleReview>)
                                }
                            </tbody>
                        </table>
                    </div>
                </>

                :
                <>
                    <div className="hero min-h-screen">
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">No review were added</h1>

                            </div>
                        </div>
                    </div>
                </>
            }
        </div >
    );
};

export default MyReviews;