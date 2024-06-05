import express from 'express';
import { vistaHome } from '../controllers/vistaHome.js';

const router = express.Router();

router.get('/', vistaHome);
export default router
