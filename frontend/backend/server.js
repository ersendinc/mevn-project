import express from 'express';
import bookRoute from './routes/bookRoutes.js'
import connectDb from './config/db.js';
const app = express();
const port = 3000;


app.use('/api/v1/books', bookRoute);

try {
    await connectDb();

    app.listen(port, () => {
        console.log(`server is listening: ${port}`);
    });
} catch (error) {
    process.exit(1);
}


