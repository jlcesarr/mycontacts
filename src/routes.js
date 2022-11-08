/* eslint-disable import/extensions */
import { Router } from 'express';
import ContactController from './app/controllers/ContactController.js';

const router = Router();

router.get('/contacts', ContactController.index);
router.get('/contacts/:id', ContactController.show);

export { router };
