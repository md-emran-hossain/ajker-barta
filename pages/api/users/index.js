import run from '../../../utils/database';

export default async function handler(req, res) {
    const { database } = await run();
    const users = database.collection('users');

    if (req.method === 'GET') {
        const email = req.query.email;
        const query = { email: email };
        const user = await users.findOne(query);
        let isAdmin = false;
        if (user?.role === 'admin') {
            isAdmin = true;
        }
        res.status(200).json({ admin: isAdmin });
    }
    else if (req.method === 'POST') {
        const user = req.body;
        const result = await users.insertOne(user);
        res.status(201).json(result);
    }
    else if (req.method === 'PUT') {
        const user = req.body;
        const filter = { email: user.email }
        const options = { upsert: true };
        const updateDoc = { $set: user }
        const result = await users.updateOne(filter, updateDoc, options);
        res.status(201).json(result);
        // const user = req.body;
        // const filter = { email: user.email };
        // const updateDoc = {
        //     $set: {
        //         role: 'admin'
        //     }
        // };
        // const result = await users.updateOne(filter, updateDoc);
        // res.status(201).json(result);
    }
}