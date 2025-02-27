// Required for ES module imports
import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3001;

// Middleware: Enable CORS and JSON body parsing
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],  // Allow requests from Vite dev server
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Start the server
app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
  console.log(`Server URL: http://localhost:${port}`);
});