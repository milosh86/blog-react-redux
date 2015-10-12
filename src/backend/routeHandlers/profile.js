var ProfileService = require('../serviceLayer/profile');
var respondToClient = require('./respondToClient');

// GET profile/userId
exports.getProfile = function getProfile(req, res) {
  var userId = req.params.userId;

  if (!userId) {
    return res.status(500).json({error: 'Missing userId...'});
  }

  respondToClient(ProfileService.readProfile(userId), res);
};

// PUT profile/userId
exports.updateProfile = (req, res) => {
  var userId = req.params.userId;
  var newData = req.body.profile;

  respondToClient(ProfileService.updateProfile(userId, newData), res);
};

