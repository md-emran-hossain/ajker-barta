import run from '../../../utils/database';

export default async function handler(req, res) {
    const { database } = await run();
    const users = database.collection('users');
    if (req.method === 'PUT') {
        const data = req.body;
        const allNotes = data.allNotes
        const email = data.email
        const filter = { email: email };
        const updateDoc = {
            $set: {
                notes: allNotes
            }
        };
        const result = await users.updateOne(filter, updateDoc);
        res.status(201).json(result);
    } else if (req.method === 'GET') {
        const email = req.query.email
        const query = { email: email }
        const result = await users.findOne(query)
        res.status(201).json(result);
    }
}