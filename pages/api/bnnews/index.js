import run from '../../../utils/database';

export default async function handler(req, res) {
    const { database } = await run();
    const bnnews = database.collection('bnnews');

    if (req.method === 'GET') {
        const result = await bnnews.find({}).toArray();
        res.status(200).json(result);
    }
    else if (req.method === 'POST') {
        const singleNews = req.body;
        const result = await bnnews.insertOne(singleNews);
        res.status(201).json(result);
    }
    else if (req.method === 'PUT') {
        const singleNews = req.body;
        const result = await bnnews.insertOne(singleNews);
        res.status(201).json(result);
    }
}