export default async function handler(req, res) {

    if (req.method === 'POST') {
        const token = req.body;
        const secret = '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe';
        const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`, {
            method: 'POST'
        })
        const data = await response.json();
        res.status(201).json(data.success);
    }
}