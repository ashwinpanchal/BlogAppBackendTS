# Blog App Backend

## Version 2

## Project Setup

- Git clone the repository to a directory of your choice run the following command
```
git clone -b version_2 https://github.com/ashwinpanchal/BlogAppBackendTS.git
```
- Also Execute `npm install` to install all the required packages for the project in the root directory
- Create a new `.env` file in your root directory of project and add the following environment variable
    - PORT=3000
- Inside the `source/config` file make a new file `config.json` and add the following code:
```
{
  "development": {
    "username": <YOUR_DB_LOGIN_USERNAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
- Once you have added the `config.json` file, go to your `src` folder from your terminal and execute the following:
```
npx sequelize db:create
```
```
npx sequelize db:migrate
```

## Step:1

- We installed the following packages
```
npm i sequelize sequelize-cli mysql2
```
- We ran the command `npx sequelize-cli init` to get the respected files for the database setup
- Then moves the folders in the src folder
- After this we set the `./src/config/config.json` as given in the project setup
- Then we ran the `npx sequelize db:create` to create the database
- Then run the command `npx sequelize model:generate --name Blog --attributes title:string,description:string` to setup the model
- Run the `npx sequelize db:migrate` to make the required tables in the sql database