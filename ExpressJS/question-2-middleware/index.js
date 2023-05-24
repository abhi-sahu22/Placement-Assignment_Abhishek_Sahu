import express from 'express';
import checkAuthentication from './authMiddleware.js';

const app = express();

app.use(checkAuthentication);

app.get('/', (req, res) => {
  if (req.userID) {
    // User is authenticated, generating and returning 20 dummy posts
    const posts = [];
    for (let i = 1; i <= 20; i++) {
      const post = {
        id: i,
        title: `Post ${i}`,
        content: `This is the content of Post ${i}`,
      };
      posts.push(post);
    }

    res.json({ posts });
  } else {
    res.status(401).json({ error: 'User is not authenticated' });
  }
});

app.listen(3000, () => {
  console.log('Server is successfully running on port 3000');
});
