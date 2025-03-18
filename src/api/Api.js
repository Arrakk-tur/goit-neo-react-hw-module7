import axios from "axios";

const BASE_URL = "https://67d9427d00348dd3e2aa5cbd.mockapi.io/contacts";

export const fetchContacts = async () => {
  return await axios.get(BASE_URL);
};

export const addContact = async (contact) => {
  return await axios.post(BASE_URL, contact);
};

export const deleteContact = async (contactId) => {
  return await axios.delete(`${BASE_URL}/${contactId}`);
};
