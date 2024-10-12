// src/repositories/fruitRepository.js
import Fruit from '../models/fruitModel.js'; // Asegúrate de usar 'models' en plural

// Función para obtener todas las frutas
export const getAllFruits = async () => {
  return await Fruit.findAll({
    attributes: ['id', 'nombre'], // Seleccionar solo 'id' y 'nombre'
  });
};

// Obtener una fruta por ID
export const getFruitById = async (id) => {
return await Fruit.findByPk(id, {
    attributes: ['id', 'nombre'],
});
};

// Crear una nueva fruta
export const createFruitInDb = async (fruitData) => {
return await Fruit.create(fruitData);
};

// Actualizar una fruta
export const updateFruitInDb = async (id, fruitData) => {
const fruit = await Fruit.findByPk(id);
if (!fruit) return null;
return await fruit.update(fruitData);
};

// Eliminar una fruta
export const deleteFruitInDb = async (id) => {
const fruit = await Fruit.findByPk(id);
if (!fruit) return null;
await fruit.destroy();
return true;
};