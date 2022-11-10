import { v4 } from 'uuid';
// import * as db from '../database/index.js';

const categories = [
  {
    id: v4(),
    name: 'Friends',
  },
];

class CategoriesRepository {
  async findAll() {
    return categories;
  }

  async findById(id) {
    return categories.find((category) => category.id === id);
  }

  async findByName(name) {
    return categories.find((category) => category.name === name);
  }

  async create({ name }) {
    const newCategory = {
      id: v4(),
      name,
    };

    categories.push(newCategory);

    return newCategory;
  }

  async update(id, partialCategory) {
    const updatedCategory = Object.keys(partialCategory)
      .reduce((acc, key) => (partialCategory[key] ? { ...acc, [key]: partialCategory[key] } : acc), categories.find((category) => category.id === id));

    return updatedCategory;
  }

  async delete(id) {
    categories.filter((category) => category.id !== id);
  }
}

export default new CategoriesRepository();
