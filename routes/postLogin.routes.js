import express from 'express';
import { postLogin } from '../controllers/participantesHandler.js';

const router = express.Router();

router.post('/', postLogin);
export default router
