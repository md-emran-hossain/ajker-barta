import run from '../../../utils/database';
const admin = require("firebase-admin");
const serviceAccount = require("../ajker-barta-firebase-adminsdk.json");


if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    })
}

export default async function handler(req, res) {
    const { database } = await run();
    const users = database.collection('users');


    if (req.headers?.authorization) {
        const jwtToken = req.headers?.authorization;
        console.log(jwtToken);

        const decodedUser = await admin.auth().verifyIdToken(jwtToken);
        req.decodedEmail = decodedUser.email;

    }
    if (req.method === 'PUT') {
        const user = req.body;
        const requester = req.decodedEmail;
        if (requester) {
            const requesterAccount = await users.findOne({ email: requester })
            if (requesterAccount.role === 'admin') {
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
        else {
            res.status(403).json({ message: 'You are not admin' })
        }
    }
}
