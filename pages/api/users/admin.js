import run from '../../../utils/database';

export default async function handler(req, res) {
    const { database } = await run();
    const users = database.collection('users');
    if (req.method === 'PUT') {
        const user = req.body;
        const filter = { email: user.email };
        const updateDoc = {
            $set: {
                role: 'admin'
            }
        };
        const result = await users.updateOne(filter, updateDoc);
        res.status(201).json(result);
    }
}