# Movie Explorer 

This project uses https://developers.themoviedb.org/3 API to build Back-end in Node.js and Front-end in React

## Application Features 
1. Search for movies
2. Search and Filter results based on Genres
3. Click on movie to get more details. Explore about Actors in a movie
4. Paginated results


This is a submission for Lattice - Take home coding assignment, by Ravali Peddi

## Requirements

- `Node.js v12.6.1`

May work on earlier versions of Node, but was developed and tested using the above version.


## To Run the Project locally

After cloning the repository we will need to run the server and the client.

### Server:

Before starting the server we will have to configure it.

```
cd server
cp .env.example .env
```

Then open `.env` in your favorite editor and add your apiKey for the moviedb.org API to `MOVIES_API_KEY`

Once it is configured, start the Koa server on `localhost:8080`
Ensure that server is running on port `8080`

```
yarn install
yarn run start
```

### Client:


Start the React.js frontend on `localhost:3000`
```
cd client
yarn install
yarn run start
```
