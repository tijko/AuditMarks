
import express, { type Request, type Response } from 'express';


const app = express();
const PORT = 3000;

app.post('/bookmarks', (req: Request, res: Response) => {
    res.send('POST HTTP call made!\n');
});

app.listen(PORT, () => {
    console.log('Server up and Listening!\n');
});
