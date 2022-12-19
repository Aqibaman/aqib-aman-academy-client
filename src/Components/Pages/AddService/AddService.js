import React, { useContext } from 'react';
import { AuthContext } from '../Authentication/contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import useTitle from '../../Shared/hooks';

const AddService = () => {
    useTitle("Add Service");
    const { user } = useContext(AuthContext);
    const { displayName } = user;

    const handlePlaceService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img = form.img.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const description = form.description.value;
        // console.log(title, img, rating, price, description);

        const service = {
            title: title,
            img: img,
            rating: rating,
            price: price,
            description: description,
        }


        fetch('https://aqibamanacademy-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset();
                    toast.success("Training is successfully added")
                }

            })
            .catch(e => console.error(e));
    }

    return (
        <div className='my-10 max-w-screen-xl mx-auto'>
            <form onSubmit={handlePlaceService}>
                <h2 className='text-4xl my-10 text-center text-purple-600 font-bold'>Add New Training</h2>
                <h2 className='text-3xl my-10 text-center text-purple-600 font-bold'>{displayName} <br /> Please, request the training you want</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='title' type="text" placeholder="Training Name" className="input input-primary w-full input-bordered" required />
                    <input name='img' type="text" placeholder="Provide Image Link" className="input input-primary w-full input-bordered" required />
                    <input name='rating' type="number" placeholder="Place the Rating" className="input input-primary w-full input-bordered" required />
                    <input name='price' type="number" placeholder="Price you want to pay" className="input input-primary w-full input-bordered" required />
                </div>
                <div>
                    <textarea name='description' className="textarea textarea-primary w-full mt-10 h-32" placeholder="Write here the training you need" required></textarea>
                </div>
                <div className='my-10'>
                    <input className='btn btn-primary' type="submit" value="Place the training" />
                </div>

            </form>
        </div>
    );
};

export default AddService;