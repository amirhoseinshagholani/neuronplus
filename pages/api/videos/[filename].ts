import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { filename } = req.query;
  const filePath = path.join(process.cwd(), 'videos', filename as string);

  if (fs.existsSync(filePath)) {
    const file = fs.createReadStream(filePath);
    res.setHeader('Content-Type', 'application/octet-stream');
    file.pipe(res);
  } else {
    res.status(404).json({ message: 'File not found' });
  }
}
