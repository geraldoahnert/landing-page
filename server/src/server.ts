import express, { Request, Response, NextFunction } from 'express';
import 'reflect-metadata';
import './database/index';

import routes from './routes';

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message,
        });
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal server error.',
    });
});

app.listen(port, () => {
    console.log(`+ Server running at ${port}.`);
});
