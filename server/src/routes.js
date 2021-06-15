import { Router } from "express";

const router = Router();

router.post("/register", (req) => {
    console.log(req.body);
});
