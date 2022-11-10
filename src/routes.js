/* eslint-disable import/extensions */
import { Router } from 'express';
import CategoryController from './app/controllers/CategoryController.js';
import ContactController from './app/controllers/ContactController.js';

const router = Router();

router.get('/contacts', ContactController.index);
router.get('/contacts/:id', ContactController.show);
router.delete('/contacts/:id', ContactController.delete);
router.post('/contacts', ContactController.store);
router.put('/contacts/:id', ContactController.update);

router.get('/categories', CategoryController.index);
router.get('/categories/:id', CategoryController.show);
router.put('/categories/:id', CategoryController.update);
router.delete('/categories/:id', CategoryController.delete);
router.post('/categories', CategoryController.store);

export { router };
