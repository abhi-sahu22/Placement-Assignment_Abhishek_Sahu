import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/blogRoutes.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(routes);

// Connecting to MongoDB
mongoose.connect('mongodb://127.0.0.1/blog-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
  });
