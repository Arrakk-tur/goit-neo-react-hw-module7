import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";
import { fetchContacts } from "./redux/contactsOps";
import { selectContactsError } from "./redux/contactsSlice";

function App() {
  const dispatch = useDispatch();
  const error = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {error && <p>Error fetching contacts: {error}</p>}
      <ContactList />
    </div>
  );
}

export default App;
