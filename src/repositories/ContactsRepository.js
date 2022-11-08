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

  async findByEmail(email) {
    return contacts.find((contact) => contact.email === email);
  }

  async create({
    name, email, phone, category_id,
  }) {
    const newContact = {
      id: v4(),
      name,
      email,
      phone,
      category_id,
    };
    contacts.push(newContact);
    return newContact;
  }

  async delete(id) {
    contacts = contacts.filter((contact) => contact.id !== id);
  }

  async update(id, partialContact) {
    const updatedContact = Object
      .keys(partialContact)
      .reduce((acc, key) => (partialContact[key] ? { ...acc, [key]: partialContact[key] } : acc), {});

    contacts = contacts.map((contact) => (contact.id === id ? { ...contact, ...updatedContact } : contact));

    return contacts.filter((contact) => contact.id === id);
  }
}

export default new ContactsRepository();
