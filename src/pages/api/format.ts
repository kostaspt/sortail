import type { NextApiRequest, NextApiResponse } from 'next'
import sortClasses from '../../lib/sortClasses'

type Payload = {
  classes: string
}

type Error = {
  message: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Payload | Error>) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Method not allowed' })
    return
  }

  res.status(200).json({ classes: sortClasses(req.body.classes) })
}
