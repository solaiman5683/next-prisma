// Next js API route for get posts from prisma
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../prisma/client';

export default async function getPosts(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		if (req.method === 'GET') {
			const posts = await prisma.post.findMany({
				include: {
					author: true,
				},
			});
			res.status(200).json(posts);
		} else {
			throw new Error('Method not allowed');
		}
	} catch (error) {
		res.status(500).json({ error });
	}
}
