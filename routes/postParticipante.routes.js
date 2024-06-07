import express from 'express';
import { postParticipante } from '../controllers/participantesHandler.js';

const router = express.Router();

router.post('/', postParticipante);
export default router
