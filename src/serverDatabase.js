
import express from 'express';
import crypto from "crypto"
import mongoose from 'mongoose';
const PORT = 7000;
const app = express();
//const DB_url ="mongodb+srv://nikita:nikita@cluster0.vsujhaf.mongodb.net/?retryWrites=true&w=majority"
const DB_url1 ="mongodb+srv://nikita:nikita@cluster0.bjysy3o.mongodb.net/?retryWrites=true&w=majority"
app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); 
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

async function startApp() {
    try {
      await mongoose.connect(DB_url, { useUnifiedTopology: true, useNewUrlParser: true })
    //  await mongoose.connect(DB_url1, { useUnifiedTopology: true, useNewUrlParser: true })
      app.listen(PORT, () => {
        console.log('SERVER STARTED ON PORT: ' + PORT);
      });
    } catch (e) {
      console.log(e);
    }
  
  }
  
  startApp(); 




/* npm install concurrently nodemon --save-dev

  {
    "name": "log",
    "version": "0.1.0",
    "private": true,
    "type": "module",
    "dependencies": {
      "@testing-library/jest-dom": "^5.17.0",
      "@testing-library/react": "^13.4.0",
      "@testing-library/user-event": "^13.5.0",
      "crypto": "^1.0.1",
      "crypto-browserify": "^3.12.0",
      "express": "^4.18.2",
      "mongoose": "^7.4.0",
      "react": "^18.2.0",
      "react-dom": "^18.2.0",
      "react-redux": "^8.1.1",
      "react-router-dom": "^6.14.2",
      "react-scripts": "5.0.1",
      "redux": "^4.2.1",
      "redux-thunk": "^2.4.2",
      "web-vitals": "^2.1.4"
    },
    "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "test": "react-scripts test",
      "eject": "react-scripts eject",
      "server": "nodemon server.js",
      "dev": "concurrently \"npm run server\" \"npm start\""
    },
    "eslintConfig": {
      "extends": [
        "react-app",
        "react-app/jest"
      ]
    },
    "browserslist": {
      "production": [
        ">0.2%",
        "not dead",
        "not op_mini all"
      ],
      "development": [
        "last 1 chrome version",
        "last 1 firefox version",
        "last 1 safari version"
      ]
    },
    "description": "This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).",
    "main": "index.js",
    "devDependencies": {
      "concurrently": "^8.2.0",
      "nodemon": "^3.0.1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC"
  }
*/  