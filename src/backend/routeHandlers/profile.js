var ProfileService = require('../serviceLayer/profile');

// GET profile/userId
exports.getProfile = function getProfile(req, res) {
  var userId = req.params.userId;

  ProfileService.readProfile(userId).then(profile =>{
    res.json(profile);
  });
};

// PUT profile/userId
exports.updateProfile = (req, res) => {
  var userId = req.params.userId;
  var newData = req.body.profile;

  ProfileService.updateProfile(userId, newData)
    .then(() => {
      res.json({error: null});
    })
  .catch(error => {
      res.json({error: error});
    });
};