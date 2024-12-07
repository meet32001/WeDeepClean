import { useEffect, useState } from 'react';
import axios from '../utils/api';

export default function Services() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('/api/services').then((response) => setServices(response.data));
    }, []);

    return (
        <div className="py-10">
            <h1 className="text-2xl font-bold text-center">Our Services</h1>
            <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service: any) => (
                    <li key={service._id} className="p-4 border rounded shadow">
                        <h2 className="text-xl font-bold">{service.name}</h2>
                        <p>${service.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}