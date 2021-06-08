const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

const { users, posts } = require("./endpoints");
const { authenticate } = require("./middlewares");

app.use(express.json());

const usersHandlers = users({ axios });
const postsHandlers = users({ axios });

//users
app.get("/", usersHandlers.get);
app.post("/", usersHandlers.post);
app.put("/:id", usersHandlers.put);
app.delete("/:id", usersHandlers.delete);

//posts
app.post("/", authenticate, postsHandlers.post);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
