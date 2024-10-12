// src/app.js
import express from 'express';
import dotenv from 'dotenv';
import fruitRoutes from './routes/fruitRoutes.js'; // Importar rutas de frutas

dotenv.config();

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Registrar rutas
app.use('/api', fruitRoutes); // Usa /api/fruits para manejar las frutas

export default app;
