import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB  from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';
import midjourneyRoutes from './routes/midjourneyRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb'}));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);
app.use('/api/v1/dalle', midjourneyRoutes);

app.get('/', async (req, res) => {
    res.send('Hello from DALL-E and midjourney');
})

const startServer = async () => {

    try {
        connectDB(process.env.MONGODB_URL);
        app.listen (8081, console.log('Server has started on port http://localhost:8080'));
    } catch (error) {
        console.log(error);
    }

    app.listen (8080, console.log('Server has started on port http://localhost:8080'));
}

startServer();