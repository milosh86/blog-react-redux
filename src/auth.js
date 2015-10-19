let credentials = null;

function checkCredentials(username, password) {
  return new Promise((resolve, reject) => {
    (username === 'dzm' && password ==='123') ?
      resolve() :
      reject();
  });
}

export default {
  login: function (username, password) {
    return new Promise((resolve, reject) => {
      checkCredentials(username, password).then(() => {
        credentials = {username, password};
        resolve();
      }, reject);
    });
  },

  logout: function () {
    credentials = null;
  },

  loggedIn: function () {
    return !!credentials;
  },

  authorize: function (nextState, replaceState) {
    if (!this.loggedIn()) {
      replaceState({nextPathname: nextState.location.pathname}, '/blog/login');
    }
  }
};