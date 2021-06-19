const {v4} = require('uuid')

const path = require("path");
const fs = require("fs").promises;

const contactsPath = path.join(__dirname, "db", "contacts.json");
 
async function listContacts () {
  try {
    const file = await fs.readFile(contactsPath);
    const data = JSON.parse(file);
    return data;
  } catch (error) {
    throw error;
  }
};

async function getContactById(contactId) {
    try {
    const contacts = await listContacts();
    const contact = contacts.find((item) => item.id === contactId);
    return contact;
  } catch (error) {
    throw error;
  }
}

async function removeContact(contactId) {
  try {
    const contacts = await listContacts();
    const newContacts = contacts.filter((item) => item.id !== contactId);
    const contactsStr = JSON.stringify(newContacts);
    await fs.writeFile(contactsPath, contactsStr);
    return newContacts;
  } catch (error) {
    throw error;
  }
}

async function addContact(name, email, phone) {
    try {
        const newContact = {
            name,
            email,
            phone,
            id: v4()
     }
    const contacts = await listContacts();
    contacts.push(newContact);
    const contactsStr = JSON.stringify(contacts);
    await fs.writeFile(contactsPath, contactsStr);
    return listContacts();
  } catch (error) {
    throw error;
  }
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}