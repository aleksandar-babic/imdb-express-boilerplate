import jwt from 'jsonwebtoken'

import { User } from './../models'

import config from '../config'

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

    const token = jwt.sign({ user }, config.jwtSecret,
      {
      // eslint-disable-next-line radix
        expiresIn: parseInt(config.jwtExpire),
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

export {
  me, register, login, logout, refresh,
};
