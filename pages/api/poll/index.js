import run from '../../../utils/database';

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
}