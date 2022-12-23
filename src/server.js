import express from "express"
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import authRoutes from "./routes/authRoutes.js"
import urlRoutes from "./routes/urlRoutes.js"

const app = express();
app.use(cors());
app.use(express.json());

app.use(authRoutes);
app.use(urlRoutes);

const port = process.env.PORT;
app.listen(port, () => console.log(`Server running in port ${port}`));

//token p testar: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoxMSwiaWF0IjoxNjcxNzY4MjI2fQ.uz3bZToIprgtgzE0pHnxGG0klz7tzTl1gnbf8xDrGgA"