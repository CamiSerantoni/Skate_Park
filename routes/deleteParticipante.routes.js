import express from 'express';
import { deleteParticipante } from '../controllers/participantesHandler.js';

const router = express.Router();

router.delete('/', deleteParticipante);
export default router
