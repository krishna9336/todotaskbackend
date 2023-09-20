import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import Routes from './routes/route.js';

const app = express();


app.use(cors({
    origin:[process.env.FRONTEND_URL,"http://127.0.0.1:5173"],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
}))

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/v1', Routes);

const PORT = 8000;

Connection();

app.listen(PORT, () => console.log(`Your server is running successfully on PORT ${PORT}`));