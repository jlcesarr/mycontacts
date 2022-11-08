/* eslint-disable import/extensions */
import ContactsRepository from '../../repositories/ContactsRepository.js';

class ContactController {
  async index(request, response) {
    const contactsRepository = ContactsRepository;
    const allContacts = await contactsRepository.findAll();
    return response.json(allContacts);
  }
}

export default new ContactController();
