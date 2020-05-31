import path from 'path'

const envPath = path.resolve(process.cwd(), 'src', '.env');
require('dotenv').config({
  path: envPath,
})

const config = {
  appPort: process.env.APP_PORT || 3000,
  dbConnection: process.env.DB_CONNECTION,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpire: process.env.JWT_EXPIRE,
}

export default config
