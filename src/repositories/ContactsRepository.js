import { v4 } from 'uuid';

const contacts = [
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
}

export default new ContactsRepository();
