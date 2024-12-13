import type { NextApiRequest, NextApiResponse } from 'next';
import connectMongo from '../../config/db';
import Service from '../../models/Service';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectMongo();

    if (req.method === 'GET') {
        const services = await Service.find({});
        return res.status(200).json(services);
    }

    if (req.method === 'POST') {
        const { name, price } = req.body;
        const newService = await Service.create({ name, price });
        return res.status(201).json(newService);
    }

    return res.status(405).json({ message: 'Method not allowed' });
}