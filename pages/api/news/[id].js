import run from '../../../utils/database';
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    const { database } = await run();
    const news = database.collection('news');

    if (req.method === 'PUT') {
        const id = req.query.id;
        const comments = req.body;
        const query = { _id: ObjectId(id) };
        const options = { upsert: true };
        const updateDoc = {
            $set: {
                comments
            },
        };
        const result = await news.updateOne(query, updateDoc, options);
        res.status(200).json(result);
    }
}