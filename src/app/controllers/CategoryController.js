/* eslint-disable import/extensions */
import CategoriesRepository from '../repositories/CategoriesRepository.js';

class CategoryController {
  async index(request, response) {
    const categories = await CategoriesRepository.findAll();
    return response.json(categories);
  }

  async show(request, response) {
    const { id } = request.params;

    const category = await CategoriesRepository.findById(id);

    if (!category) return response.status(404).json({ error: 'Category not found' });

    return response.json(category);
  }

  async store(request, response) {
    const { name } = request.body;
    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const categoryExists = await CategoriesRepository.findByName(name);

    if (categoryExists) {
      return response.status(400).json({ error: 'A category with the same name already exists' });
    }

    const category = await CategoriesRepository.create({ name });

    return response.status(201).json(category);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    const categoryExists = await CategoriesRepository.findById(id);

    if (!categoryExists) return response.status(404).json({ error: 'Category not found' });

    const category = await CategoriesRepository.update(id, { name });

    return response.json(category);
  }

  async delete(request, response) {
    const { id } = request.params;

    await CategoriesRepository.delete(id);

    return response.sendStatus(204);
  }
}

export default new CategoryController();
