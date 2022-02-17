import run from '../../../utils/database';

export default async function handler(req, res) {
    const { database } = await run();
    const news = database.collection('news');

    if (req.method === 'PUT') {
        const id = req.params.id;
        console.log(id);
        const comments = req.body;
        console.log(comments);
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
    else if (req.method === 'GET') {
        const id = req.params;
        console.log(id);
    }
}