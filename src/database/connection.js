// src/database/connection.js
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

// Configurar la conexión a SQL Server
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mssql',
  port: process.env.DB_PORT,
  logging: false, // Deshabilitar logs SQL en consola
});

sequelize
  .authenticate()
  .then(() => console.log('Conectado a la base de datos "frutas" en SQL Server correctamente.'))
  .catch((err) => console.error('Error al conectar a la base de datos:', err));

export default sequelize;
