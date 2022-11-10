/* eslint-disable import/extensions */
import * as db from '../database/index.js';

class CategoriesRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.execQuery(`SELECT * FROM categories ORDER BY name ${direction}`);
    return rows;
  }

  async findById(id) {
    const [row] = await db.execQuery('SELECT * FROM categories WHERE id = $1', [id]);
    return row;
  }

  async findByName(name) {
    const [row] = await db.execQuery('SELECT * FROM categories WHERE name = $1', [name]);
    return row;
  }

  async create({ name }) {
    const [row] = await db.execQuery('INSERT INTO categories(name) VALUES($1) RETURNING *', [name]);
    return row;
  }

  async update(id, { name }) {
    const [row] = await db.execQuery('UPDATE categories SET name = $2 WHERE id = $1 RETURNING *', [id, name]);
    return row;
  }

  async delete(id) {
    const deleteOp = await db.execQuery('DELETE FROM categories WHERE id = $1', [id]);
    return deleteOp;
  }
}

export default new CategoriesRepository();
