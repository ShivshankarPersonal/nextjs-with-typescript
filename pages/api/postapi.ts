// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import bodyParser from 'body-parser';
// import { promisify } from 'util';
// const getBody = promisify(bodyParser.urlencoded());

export default function postapi(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.body);
  if (req.method === 'POST') {
    // await getBody(req, res);
    console.log(req.body);
  }

  // return {
  //   props: {
  //     firstName: req.body?.firstName || 'smeijer',
  //     // message: req.body ? 'received!' : '',
  //   },
  // };
  res.status(201).json({ name: 'yes' });
}

type Data = {
  name: string;
};

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' });
// }
