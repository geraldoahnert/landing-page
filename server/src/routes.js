import { Router } from "express";

import EmailController from "./controllers/EmailController.js";

const router = Router();

router.post("/register", EmailController);
