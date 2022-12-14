/* eslint-disable import/extensions */
import * as db from '../database/index.js';

class ContactsRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.execQuery(`
      SELECT contacts.*, categories.name AS category_name
      FROM contacts
      LEFT JOIN categories ON categories.id = category_id
      ORDER BY contacts.name ${direction}
    `);
    return rows;
  }

  async findById(id) {
    // id / name
    const [row] = await db.execQuery(`
      SELECT contacts.*, categories.name AS category_name
      FROM contacts
      LEFT JOIN categories ON categories.id = contacts.category_id
      WHERE contacts.id = $1
    `, [id]);
    return row;
  }

  async findByEmail(email) {
    const [row] = await db.execQuery('SELECT * FROM contacts WHERE email = $1', [email]);
    return row;
  }

  async create({
    name, email, phone, category_id,
  }) {
    const [row] = await db.execQuery(
      'INSERT INTO contacts(name, email, phone, category_id) VALUES($1, $2, $3, $4) RETURNING *',
      [name, email, phone, category_id],
    );
    return row;
  }

  async delete(id) {
    const deleteOp = await db.execQuery('DELETE FROM contacts WHERE id = $1', [id]);
    return deleteOp;
  }

  async update(id, {
    name, email, phone, category_id,
  }) {
    const [row] = await db.execQuery('UPDATE contacts SET name = $2, email= $3, phone= $4, category_id = $5 WHERE id = $1 RETURNING *', [id, name, email, phone, category_id]);
    return row;
  }
}

export default new ContactsRepository();
