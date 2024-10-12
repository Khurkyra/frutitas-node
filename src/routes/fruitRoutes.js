// src/routes/fruitRoutes.js
import express from 'express';
import { getFruits, getFruitById, createFruitHandler, updateFruitHandler, deleteFruitHandler } from '../controllers/fruitController.js';

const router = express.Router();

// Rutas CRUD para frutas
router.get('/fruits', getFruits);                // Obtener todas las frutas
router.get('/fruits/:id', getFruitById);         // Obtener una fruta por ID
router.post('/fruits', createFruitHandler);      // Crear una fruta
router.put('/fruits/:id', updateFruitHandler);   // Actualizar una fruta
router.delete('/fruits/:id', deleteFruitHandler);// Eliminar una fruta

export default router;
