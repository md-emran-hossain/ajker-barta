import run from '../../../utils/database';

export default async function handler(req, res) {
    const { database } = await run();
    const users = database.collection('users');
    if (req.method === 'PUT') {
        const data = req.body;
        const noteText = { note: data.note, selectedText: data.selectedText }
        const filter = { email: data.email };
        const updateDoc = {
            $set: {
                note: [noteText]
            }
        };
        const result = await users.updateOne(filter, updateDoc);
        res.status(201).json(result);
    }
}