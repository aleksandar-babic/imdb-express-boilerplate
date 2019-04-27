# NodeJS Express IMDB Boilerplate

### Short description

Following things were added in this Boilerplate to vanilla Node :

* Babel - We need it in order to be able to use ES6 Module imports with NodeJS (by default node has no idea how to use es6 module imports, it only knows how to work with `require()`)
* ESLint with Airbnb code style guide - We need it in order to keep our code style consistent. This is our Static code analysis tool of choice.
* Nodemon - This tool watches for file changes and automatically reloads our app when change occures.
* Docker and docker-compose - Docker allows us to run our app and database (MongoDB) isolated in containers.

### How to run with docker ?

```bash
# This command will build our containers and start both app and db
docker-compose up

# Test app with curl
curl http://localhost:3000/health-check
```

### How to run this on host machine without docker ?

```bash
# This will install our node dependencies
yarn

# This will start our app
Yarn dev

# Test app with curl
curl http://localhost:3000/health-check
```
> If you using this method to start app you will have to install MongoDB locally on machine before starting the app.