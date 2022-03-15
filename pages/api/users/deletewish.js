import run from '../../../utils/database';
export default async function handler(req, res) {
  const { database } = await run();
  const users = database.collection('users');
  if (req.method === 'PUT') {
    const email = req.query.email
    const id = req.body.id
    const filter = { email: email }
    const updateDoc = {
      $pull: {
        wishlist: id
      }
    }
    const result = await users.updateOne(filter, updateDoc)
    res.status(201).json(result);
  }
}