import express from 'express';
import { vistaLogin } from '../controllers/vistaLogin.js';

const router = express.Router();

router.get('/', vistaLogin);
export default router
