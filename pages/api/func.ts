import type { NextApiRequest, NextApiResponse } from 'next'
import func, { funcDataType } from '../../components/func'

export default function handler(
  _: NextApiRequest,
  res: NextApiResponse<funcDataType>
) {
  res.status(200).json(func);
}