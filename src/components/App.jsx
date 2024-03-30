import ContactForm from "./ContactForm/ContactForm"
import SearchBox from "./SearchBox/SearchBox"
import ContactList from "./ContactList/ContactList"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contactsOps";
import { selectError, selectLoading } from "../redux/contactsSlice";

export const App = () => {

  const dispatch = useDispatch()
  const loading = useSelector(selectLoading)
  const error = useSelector(selectError)

  useEffect(() => {

    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm />


      {loading && <p>Loading</p>}
      {error && <p>Error</p>}

      <SearchBox />
      <ContactList />

    </div>
  );
};




