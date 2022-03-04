import run from '../../../../utils/database';

export default async function handler(req, res) {
    const { database } = await run();
    const users = database.collection('users');
    if (req.method === 'GET') {
        const email = req.query.email;
        const query = { email: email };
        console.log(email);
        const user = await users.findOne(query);
        res.status(200).json(user);
    }
}