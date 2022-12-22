import { NextApiRequest, NextApiResponse } from 'next'
import { usersFakeDB } from '../../mocked/fakeUsers'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        res.status(400).send({ error: 'Bad request' })
    }

    const user = usersFakeDB.find(
        ({ login, password }) =>
            login === req.body.login && password === req.body.password
    )
    if (!user) {
        res.status(401).send({ error: 'User not found' })
    }

    const { name, email, role } = user || {}

    res.status(200).json({ name, email, role })
}

export default handler
