import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../../Shared/hooks';

const SignUp = () => {
    useTitle("Sign Up");
    const { setUser, loading, setLoading, createUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext)
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate()



    const [error, setError] = useState("")

    const handleGoogleSignIn = () => {
        signInWithGoogle(provider)
            .then(res => {
                setLoading(true)
                const user = res.user;
                setUser(user)
                toast.success("Seccessfully Sign up")
            })
            .catch(err => {
                console.error(err)
            })
    }
    const handleUpdateUser = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => {

            })
            .catch(error => console.log(error))
    }

    //_________________________ signup__________
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        //__________handle login___________________
        createUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
                setError("")
                form.reset()
                setLoading(false)
                handleUpdateUser(name, photo)
                navigate("/")
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })

        //__________handle login___________________

    }
    return (
        <div className='-z-10'>
            {
                loading ?
                    <>
                        <div class="flex justify-center items-center">
                            <div class="spinner-border animate-spin inline-block w-16 h-16 border-4 rounded-full border-purple-600" role="status">
                                <span class="visually-hidden text-purple-600">......|||......</span>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className="hero min-h-screen bg-base-200 ">
                            <div className="hero-content flex-col">
                                <div className="text-center lg:text-left mb-10">
                                    <h1 className="text-5xl font-bold">Please Register Now!</h1>
                                </div>
                                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                    <form onSubmit={handleSubmit} className="card-body">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Name</span>
                                            </label>
                                            <input name="name" type="text" placeholder="Enter name" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Photo Url</span>
                                            </label>
                                            <input name="photoURL" type="text" placeholder="Your Photo" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input name="email" type="text" placeholder="email" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Password</span>
                                            </label>
                                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                            <label className="label">
                                                <Link href="#" to="/login" className="label-text-alt link link-hover">{error}</Link>
                                            </label>
                                            <p>Already registered? <Link to="/signin">Please login</Link></p>
                                        </div>
                                        <div className="form-control mt-6">
                                            <button className="btn btn-primary">Register</button>
                                        </div>
                                    </form>
                                    <div className='flex justify-center'>
                                        <button onClick={handleGoogleSignIn} className=" mb-5 mx-auto btn btn-outline btn-ghost">< FaGoogle /><span className='ml-2'>google</span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </div>
    );
};

export default SignUp;