import express from "express";
import { getProduk } from "../controller/produkController";

const router = express.Router();
// ini router dan endpoint yang diambil make nama fungsi Get nya
router.get("/produk", getProduk);

export default router;
