import express from 'express';

const app = express();

// Generating 20 posts dynamically
const generatePosts = () => {
  const posts = [];
  for (let i = 1; i <= 20; i++) {
    posts.push({
      id: i,
      title: `Post ${i}`,
      content: `I, Abhishek Sahu, generating the posts!!!! Thanks for opening the portal. ${i}`
    });
  }
  return posts;
};

// Endpoint for getting all posts and showing all the posts in a list
app.get('/post', (req, res) => {
  const posts = generatePosts();

  const htmlList = `<ul>${posts.map(post => `<li>${post.title}: ${post.content}</li>`).join('')}</ul>`;

  res.send(htmlList);
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
