import run from '../../../utils/database';
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
  const { database } = await run();
  const users = database.collection('users');
  if (req.method === 'PUT') {
    const designation = req.body.designation
    const id = req.query.id
    const filter = { '_id': ObjectId(id) }
    const options = { upsert: true };
    const updateDoc = {
      $set: {
        role: designation
      }
    }
    const result = await users.updateOne(filter, updateDoc, options);
    res.status(201).json(result);
  }
}