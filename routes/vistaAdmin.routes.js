import express from 'express';
import { vistaAdmin } from '../controllers/vistaAdmin.js';

const router = express.Router();

router.get('/', vistaAdmin);
export default router
