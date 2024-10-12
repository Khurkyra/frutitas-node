// src/server.js
import app from './app.js';
import sequelize from './database/connection.js';

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    // Verificar la conexión a la base de datos
    await sequelize.authenticate();
    console.log('Conectado a la base de datos SQL Server correctamente.');

    // Iniciar el servidor
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
};

startServer();
