module.exports = function respondToClient(promise, res, sendData) {
  promise
    .then((data) => {
      console.log('DB responded with: ', data);
      if (!sendData) {
        data = null;
      }

      res.json(data);
    })
    .catch(error => {
      res.status(500).json(error);
    });
}