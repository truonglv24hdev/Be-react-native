import { Router, Request, Response, NextFunction } from "express";
import listenModel from "./listen.model";

const router = Router();

router.post("/sms", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { sender, message } = req.body;
    const sms = await listenModel.create({ number: sender, message });
    res.status(201).json(sms);
  } catch (error) {
    next(error);
  }
});

router.post(
  "/calls",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const call = await listenModel.create(req.body);
      res.status(201).json(call);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
