import run from '../../../utils/database';
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
  const { database } = await run();
  const news = database.collection('news');
  if (req.method === 'GET') {
    const id = req.query.id
    const query = { '_id': ObjectId(id) }
    const result = await news.findOne(query)
    res.status(201).json(result);
  }
}