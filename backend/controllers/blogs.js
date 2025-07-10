/* eslint-disable @stylistic/js/semi */
/* eslint-disable @stylistic/js/quotes */
const blogsRouter = require("express").Router();
const Blog = require("../models/blog");

blogsRouter.get("/", (request, response) => {
  Blog.find({}).then((blog) => {
    response.json(blog);
  });
});

blogsRouter.get("/:id", (request, response, next) => {
  Blog.findById(request.params.id)
    .then((blog) => {
      if (blog) {
        response.json(blog);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});

blogsRouter.post("/", (request, response, next) => {
  const body = request.body;

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes || 0, // Default to 0 if likes are not provided
  });

  blog
    .save()
    .then((savedBlog) => {
      response.json(savedBlog);
    })
    .catch((error) => next(error));
});

blogsRouter.delete("/:id", (request, response, next) => {
  Blog.findByIdAndDelete(request.params.id)
    .then(() => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

// blogsRouter.put("/:id", (request, response, next) => {
//   const { content, important } = request.body;

//   Blog.findById(request.params.id)
//     .then((blog) => {
//       if (!blog) {
//         return response.status(404).end();
//       }

//       blog.content = content;
//       blog.important = important;

//       return blog.save().then((updatedNote) => {
//         response.json(updatedNote);
//       });
//     })
//     .catch((error) => next(error));
// });

module.exports = blogsRouter;
