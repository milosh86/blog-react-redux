module.exports = function respondToClient(promise, res) {
  promise
    .then((data) => {
      res.json(data);
    })
    .catch(error => {
      res.status(500).json(error);
    });
}