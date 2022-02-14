import { MongoClient } from 'mongodb';

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.9yofe.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    if (!client.isConnected) await client.connect();
    const database = client.db('ajkerBarta');
    return { database, client };
}

export default run;