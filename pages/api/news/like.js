import run from '../../../utils/database';
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
  const { database } = await run();
  const news = database.collection('news');
  if (req.method === 'PUT') {
    const id = req.query.id
    const email = req.body.email
    const query = { _id: ObjectId(id) }
    const updateDoc = {
      $push: {
        likes: email
      }
    }
    const result = await news.updateOne(query, updateDoc);
    res.status(201).json(result);
  }
}