import run from '../../../utils/database';

export default async function handler(req, res) {
    const { database } = await run();
    const users = database.collection('users');
    if (req.method === 'PUT') {
        const data = req.body;
        console.log(data)
        const email = req.query.email
        const filter = { email: email };
        const updateDoc = {
            $pull: {
                notes: data
            }
        };
        const result = await users.updateOne(filter, updateDoc);
        res.status(201).json(result);
    }
}