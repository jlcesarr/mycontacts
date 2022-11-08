/* eslint-disable import/extensions */
import ContactsRepository from '../../repositories/ContactsRepository.js';

class ContactController {
  async index(request, response) {
    const contactsRepository = ContactsRepository;
    const allContacts = await contactsRepository.findAll();
    return response.json(allContacts);
  }

  async show(request, response) {
    const { id } = request.params;

    const contactsRepository = ContactsRepository;
    const contact = await contactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({
        error: 'Contact not found',
      });
    }

    return response.json(contact);
  }

  async delete(request, response) {
    const { id } = request.params;

    const contactsRepository = ContactsRepository;
    const contact = await contactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({
        error: 'Contact not found',
      });
    }

    await contactsRepository.delete(contact.id);

    return response.sendStatus(204);
  }

  async store(request, response) {
    const {
      name, email, phone, category_id: categoryId,
    } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const contactsRepository = ContactsRepository;

    const contactExists = await contactsRepository.findByEmail(email);

    if (contactExists) {
      return response.status(400).json({ error: 'This e-mail is already been taken' });
    }

    const contact = await contactsRepository.create({
      name, email, phone, categoryId,
    });

    return response.json(contact);
  }
}

export default new ContactController();
