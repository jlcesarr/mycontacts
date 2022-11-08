import { v4 } from 'uuid';

let contacts = [
  {
    id: v4(),
    name: 'Mateus',
    email: 'mateus@mail.com',
    phone: '123123123',
    category_id: v4(),
  },
];

class ContactsRepository {
  async findAll() {
    return contacts;
  }

  async findById(id) {
    return contacts.find((contact) => contact.id === id);
  }

  async delete(id) {
    contacts = contacts.filter((contact) => contact.id !== id);
  }
}

export default new ContactsRepository();
