// import { Router } from 'express';
// import payload from 'payload';

// const router = Router();

// // GET /api/posts
// router.get('/', async (req, res) => {
//   try {
//     const posts = await payload.find({
//       collection: 'posts',
//     });
//     res.status(200).json(posts);
//   } catch (error) {
//     res.status(500).json({ error: (error as Error).message });
//   }
// });

// // POST /api/posts
// router.post('/', async (req, res) => {
//   try {
//     const newPost = await payload.create({
//       collection: 'posts',
//       data: req.body,
//     });
//     res.status(201).json(newPost);
//   } catch (error) {
//     res.status(500).json({ error: (error as Error).message });
//   }
// });

// export default router;
