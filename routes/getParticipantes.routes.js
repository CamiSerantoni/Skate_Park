import express from 'express';
import { getParticipantes } from '../controllers/participantesHandler.js';

const router = express.Router();

router.get('/', getParticipantes);
export default router
