import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../Shared/hooks';
import { AuthContext } from '../Authentication/contexts/AuthProvider/AuthProvider';
import ServiceCard from './ServiceCard';

const Services = () => {
    useTitle("Services");
    const [services, setServices] = useState([]);
    const { loading, setLoading } = useContext(AuthContext);
    useEffect(() => {
        fetch('https://aqibamanacademy-server.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setServices(data)
            })
    }, [setLoading])
    return (
        <div className='my-20'>
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
                        <div>
                            <p className="text-2xl text-center my-2 font-bold text-purple-600">My offered supply chain trainings</p>
                            <h2 className='text-5xl text-center my-2 font-semibold'>All Supply Chain Trainings</h2>
                            <p className=' text-center my-2'>I will provide you my potential expertise on this field. It wil help you to understand the global logistics system. <br /> I will help you with hands on expertise on this sector with my knowledge. </p>
                        </div>
                        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5'>
                            {
                                services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                            }
                        </div>
                    </>
            }
        </div>

    );
};

export default Services;