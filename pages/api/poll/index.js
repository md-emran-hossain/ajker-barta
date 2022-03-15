import run from '../../../utils/database';
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    const { database } = await run();
    const poll = database.collection('poll');

    if (req.method === 'GET') {
        const result = await poll.find({}).toArray();
        res.status(200).json(result);
    }
    else if (req.method === 'POST') {
        const makePoll = req.body;
        const result = await poll.insertOne(makePoll);
        res.status(201).json(result);
    }

    if (req.method === 'PUT') {
        const data = req.body;
        const id = req.query.id;
        console.log(data, "ID: ", id)
        const query = { _id: ObjectId(id) };
        const options = { upsert: true };
        const updateDoc = {
            $set: { vote: data }
        };
        const result = await poll.updateOne(query, updateDoc, options);
        res.status(200).json(result);
    }
}


