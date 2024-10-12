// src/services/fruitService.js
import { createFruitInDb, deleteFruitInDb, getAllFruits, getFruitById, updateFruitInDb } from '../repositories/fruitRepository.js';

// Función del servicio para obtener todas las frutas
export const fetchFruits = async () => {
  return await getAllFruits();
};

// Obtener una fruta por ID
export const fetchFruitById = async (id) => {
return await getFruitById(id);
};

// Crear una nueva fruta
export const createFruit = async (fruitData) => {
return await createFruitInDb(fruitData);
};

// Actualizar una fruta
export const updateFruit = async (id, fruitData) => {
return await updateFruitInDb(id, fruitData);
};

// Eliminar una fruta
export const deleteFruit = async (id) => {
return await deleteFruitInDb(id);
};
