import express from 'express';
import { vistaRegistro } from '../controllers/vistaRegistro.js';

const router = express.Router();

router.get('/', vistaRegistro);
export default router
