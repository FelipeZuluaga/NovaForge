require("dotenv").config(); // Siempre en la línea 1
const express = require("express");
const cors = require("cors");
const db = require("./config/db"); 

const app = express();

// --- Middleware Global ---
app.use(cors());
app.use(express.json()); 

// --- Importación y Uso de Rutas ---

// --- Puerto ---
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});