import { useDispatch } from "react-redux"
// import { deleteContact } from "../../redux/contactsOps"

import { FaPhoneAlt } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";

import styles from "./contact.module.css"
import PropTypes from 'prop-types';


const Contact = ({data : {id, name, number}}) => {

  const dispatch = useDispatch()
  
  return (
        <div className={styles.element}>
        <div >
          <div className={styles.icon}>
          <GrUserManager/>
          <p>{name}</p>
          </div>
       
         <div className={styles.icon}>
          <FaPhoneAlt />
           <p>{number}</p>
         </div>
        
        </div>

        <button 
        onClick={() => dispatch(deleteContact(id))
        }
       
        >
         Delete </button>
        
        </div>
        
    )
}

Contact.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired, 
  }),
};

export default Contact; 