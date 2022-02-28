import run from '../../../utils/database';

export default async function handler(req, res) {
    const { database } = await run();
    const users = database.collection('users');

    if (req.method === 'GET') {

    }

}