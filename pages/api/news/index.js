import run from '../../../utils/database';

export default async function handler(req, res) {
    const { database } = await run();
    const news = database.collection('news');

    if (req.method === 'GET') {
        const result = await news.find({}).toArray();
        res.status(200).json(result);
    }
    else if (req.method === 'POST') {
        const singleNews = req.body;
        const result = await news.insertOne(singleNews);
        res.status(201).json(result);
    }
}