import run from '../../../utils/database';
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    const { database } = await run();
    const news = database.collection('news');

    if (req.method === 'PUT') {
        const id = req.query.id;
        const comments = req.body;
        const query = { _id: ObjectId(id) };
        const updateDoc = {
            $push: {
                comments: comments
            },
        };
        const result = await news.updateOne(query, updateDoc);
        res.status(200).json(result);
    }
    // delete news
    if (req.method === 'DELETE') {
        const id = req.query.id;
        const query = { _id: ObjectId(id) };
        const result = await news.deleteOne(query);
        res.status(200).send(result)
    }


    // update news 

    if (req.method === 'PATCH') {
        const data = req.body;
        const id = req.query.id;
        const query = { _id: ObjectId(id) };
        const options = { upsert: true };
        const updateDoc = {
            $set: data
        };

        const result = await news.updateOne(query, updateDoc, options);
        res.status(200).json(result);
    }

}
