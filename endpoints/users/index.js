const handlers = ({ axios }) => ({
  get: async (req, res) => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    res.status(200).send(data);
  },
  post: async (req, res) => {
    const { body } = req;
    const { data } = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      body
    );
    res.status(201).send(data);
  },
  put: async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, body);
    res.status(204);
    res.end();
  },
  delete: async (req, res) => {
    const { id } = req.params;
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    res.status(204);
    res.end();
  },
});

module.exports = handlers;
