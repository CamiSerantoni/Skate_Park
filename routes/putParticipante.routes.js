import express from 'express';
import { putParticipante } from '../controllers/participantesHandler.js';

const router = express.Router();

router.put('/', putParticipante);
export default router
