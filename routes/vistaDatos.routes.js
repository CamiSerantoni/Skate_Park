import express from 'express';
import { vistaDatos } from '../controllers/vistaDatos.js';

const router = express.Router();

router.get('/', vistaDatos);
export default router
