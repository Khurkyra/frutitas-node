// src/models/fruitModel.js
import { DataTypes } from 'sequelize';
import sequelize from '../database/connection.js';

// Definir el modelo de la tabla 'frutas' con solo 'id' y 'nombre'
const Fruit = sequelize.define('Fruit', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'frutas',
  timestamps: false, // Desactivar timestamps
});

export default Fruit;
