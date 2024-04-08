import Contact from "../Contact/Contact"
import styles from "../ContactList/contactList.module.css"

import { useSelector } from "react-redux"
// import { selectFilteredContacts } from '../../redux/contactsSlice';

const ContactList = () => {
  
  const filters = useSelector(selectFilteredContacts)

    return (
        <ul>
        { filters.map((el) =>(

        <li key={el.id}>
        <Contact data = {el}/>
        </li> 
         ))}

        </ul>
      
    )
}


export default ContactList;