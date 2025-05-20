import express from 'express';
import cors from 'cors';
import boardRoutes from './routes/board.routes';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', boardRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));