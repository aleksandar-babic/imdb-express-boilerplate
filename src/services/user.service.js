const jwt = require('jsonwebtoken');

const { User } = require('./../models');

const me = token => token.user;

const register = async ({ email, password, name }) => {
  if (!email || !password || !name) {
    return { err: 'Malformed request data' };
  }

  const user = new User({
    email,
    password,
    name,
  });

  return user.save();
};

// eslint-disable-next-line consistent-return
const login = ({ email, password }) => new Promise(async (resolve, reject) => {
  const user = await User.findOne({ email: email.toLowerCase() });

  if (!user) return reject(new Error(`Could not find user with e-mail ${email}`));

  try {
    await user.comparePassword(password);

    const token = jwt.sign({ user }, process.env.JWT_SECRET,
      {
      // eslint-disable-next-line radix
        expiresIn: parseInt(process.env.JWT_EXPIRE),
      });

    resolve({
      user,
      token,
    });
  } catch (err) {
    reject(err);
  }
});

const logout = () => {
  // Todo
};

const refresh = () => {
  // Todo
};

module.exports = {
  me, register, login, logout, refresh,
};
