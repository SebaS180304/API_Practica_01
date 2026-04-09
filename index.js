import "dotenv/config";
import express from "express";
import morgan from "morgan";
import indexRoutes from "./routes/index.routes.js";
import usersRoutes from "./routes/users.route.js";
import loginRoutes from "./routes/login.routes.js";
import connectDB from "./utils/db.js";
  
connectDB();

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use(indexRoutes);
app.use(usersRoutes);
app.use(loginRoutes);

const PORT = 3000;

app.listen(PORT, () =>
  console.log(`Servidor corriendo en la URL http://localhost:${PORT}`),
);
