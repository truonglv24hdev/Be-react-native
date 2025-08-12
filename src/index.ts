import express, { Request, Response } from "express";
import listenRouter from "./listen";
import connectDB from "./connectDB";

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware đọc JSON
app.use(express.json());

connectDB();

// Routes
app.use("/", listenRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
