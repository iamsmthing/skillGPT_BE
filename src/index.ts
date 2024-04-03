import express, { Request, Response, NextFunction } from 'express';
import contentGeneratorRouter  from './routes/generate';
import cors from "cors";
import { PORT } from './constants/constants';
// import { getPgVersion } from './controllers/db';


const app = express();
const port = PORT || 3000;


app.use(express.json());
app.use(cors())

// for all generating content from GPT we use this path requests.
app.use('/generate', contentGeneratorRouter);

// Add this error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong');
});

// (async ()=>{
//     await getPgVersion();
// })();


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
export default app;
