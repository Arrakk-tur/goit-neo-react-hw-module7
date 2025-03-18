import axios from "axios";

const BASE_URL = "https://67d9427d00348dd3e2aa5cbd.mockapi.io/contacts";
export const fetchContacts = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addContact = async (contact) => {
  try {
    const response = await axios.post(BASE_URL, contact);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteContact = async (contactId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${contactId}`);
    return contactId; // Return the id of the deleted contact
  } catch (error) {
    throw error;
  }
};
