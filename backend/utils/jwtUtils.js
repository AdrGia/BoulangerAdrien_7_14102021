
const jwt = require('jsonwebtoken');

module.exports = {
  tokenSign : 'process.env.KEY_TOKEN_PASSWORD',
  	newToken: function (user) {
    return jwt.sign({
      user_id: user.id,
      isAdmin: user.isAdmin
    },
      this.tokenSign,
      {
        expiresIn: '1d'
      })
  },
  getUser: function (data) {
    if (data.length > 1) {
      let token = data.split(' ')[1];
      try {
        let decodedToken = jwt.verify(token, this.tokenSign)
        user_id = decodedToken.user_id
        return user_id
      }
      catch (err) {
        return err
      }
    };
  }
}