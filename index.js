const express = require('express');
const app = express();
const port = 3000; // or any port you prefer

// Set up static files
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/home.html');
});

app.get('/blog', (req, res) => {
  res.sendFile(__dirname + '/public/blog.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/public/about.html');
});

// app.set('view engine', 'ejs');

// const blogs = [
//   {
//     id: 1,
//     author: "Sam",
//     topic: "Importance of Drinking Water",
//     body: "dipisicing elit. Facilis dolores recusandae commodi consequuntur! Cumque reprehenderit enim voluptate reiciendis dicta ducimus delectus recusandae odio vitae quae facilis distinctio fuga, aperiam praesentium eius earum iusto quia esse nesciunt eveniet amet nihil? Dignissimos?"
//   },
//   {
//     id: 2,
//     author: "Bob",
//     topic: "Importance of Smoking",
//     body: "dipisicing elit. Facilis dolores recusandae commodi consequuntur! Cumque reprehenderit enim voluptate reiciendis dicta ducimus delectus recusandae odio vitae quae facilis distinctio fuga, aperiam praesentium eius earum iusto quia esse nesciunt eveniet amet nihil? Dignissimos?"
//   },
//   {
//     id: 3,
//     author: "Korede",
//     topic: "How I Created A Billion dollar business",
//     body: "dipisicing elit. Facilis dolores recusandae commodi consequuntur! Cumque reprehenderit enim voluptate reiciendis dicta ducimus delectus recusandae odio vitae quae facilis distinctio fuga, aperiam praesentium eius earum iusto quia esse nesciunt eveniet amet nihil? Dignissimos?"
//   },
//   {
//     id: 4,
//     author: "Gabriel",
//     topic: "Quantum physics",
//     body: "dipisicing elit. Facilis dolores recusandae commodi consequuntur! Cumque reprehenderit enim voluptate reiciendis dicta ducimus delectus recusandae odio vitae quae facilis distinctio fuga, aperiam praesentium eius earum iusto quia esse nesciunt eveniet amet nihil? Dignissimos?"
//   }
// ]

// Routes

// app.get('/', (req, res) => {
//   console.log(blogs)
//   res.render('home', {blogs});
// });

// app.get('/about', (req, res) => {
//   res.render('about');
// });

// app.get('/blog/:id', (req, res) => {
//   const blogId = req.params.id;
//   // Render specific blog based on blogId
//   res.render('blog', { blogId });
// });

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
