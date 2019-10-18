import "@babel/polyfill";
import express from "express";
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import router from './server/routes/index';
import cors from 'cors';

// creating app instance
const app = express();

// enable cors 
// CORS or cross-origin-resource sharing is the process of making an HTTP-request 
// to a top-level domain that is different to the domain, the browser is currently at.
const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}
  
app.use(cors(corsOptions))
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

dotenv.config();


// current process environment
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});

export default app;