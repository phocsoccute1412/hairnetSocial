import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  hairName: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ hairName: 'hairStore1' })
}