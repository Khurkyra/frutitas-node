// src/controllers/fruitController.js
import { createFruit, deleteFruit, fetchFruitById, fetchFruits, updateFruit } from '../services/fruitService.js';

// Controlador para obtener todas las frutas
export const getFruits = async (req, res) => {
  try {
    const fruits = await fetchFruits();
    res.status(200).json(fruits);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las frutas', error });
  }
};

// Obtener una fruta por ID
export const getFruitById = async (req, res) => {
  try {
    const fruit = await fetchFruitById(req.params.id);
    if (!fruit) {
      return res.status(404).json({ message: 'Fruta no encontrada' });
    }
    res.status(200).json(fruit);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la fruta', error });
  }
};

// Crear una nueva fruta
export const createFruitHandler = async (req, res) => {
  try {
    const { nombre } = req.body;
    const newFruit = await createFruit({ nombre });
    res.status(201).json(newFruit);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la fruta', error });
  }
};

// Actualizar una fruta
export const updateFruitHandler = async (req, res) => {
  try {
    const { nombre } = req.body;
    const updatedFruit = await updateFruit(req.params.id, { nombre });
    if (!updatedFruit) {
      return res.status(404).json({ message: 'Fruta no encontrada' });
    }
    res.status(200).json(updatedFruit);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la fruta', error });
  }
};

// Eliminar una fruta
export const deleteFruitHandler = async (req, res) => {
  try {
    const deleted = await deleteFruit(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Fruta no encontrada' });
    }
    res.status(200).json({ message: 'Fruta eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la fruta', error });
  }
};