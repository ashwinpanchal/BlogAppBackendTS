# Blog App Backend

- In order to run the server use the command `npm run dev`
- In order to build the equivalent js files run `npm run build`
- In order to run the server , one can also use the command `npm start` but `imp` thing is that we should have already build it before

## Design

- It is a basic CRUD for making Blog 
- Blog : {
    id,
    title,
    description,
    createdAt,
    updatedAt,
}
- For [V1] we will use just id , title, description
- [V2] will have SQL instead of local files

## Run

- Clone the Repository using the below command
```
git clone https://github.com/ashwinpanchal/BlogAppBackendTS.git
```
- Run the npm install to get all the required packages
- Make a `.env` file in the root directory of your project and specify `PORT=3000`


## Step:1

- After basic setup we started making the basic express App
- We made a `.env` file and used the `dotenv` package to use the environment variables in our app
- We made a `./src/config/serverConfig.ts` file and did the `dotenv` setup 