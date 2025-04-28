import { IoMdPerson } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import styles from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContactThunk } from "../../redux/contactsOps";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.containerContacts}>
      <ul className={styles.contactsInfo}>
        <li>
          <div>
            <IoMdPerson />
            {name}
          </div>
        </li>
        <li>
          <a href={`tel:${number}`}>
            <MdLocalPhone />
            {number}
          </a>
        </li>
      </ul>
      <button onClick={() => dispatch(deleteContactThunk(id))}>Delete</button>
    </div>
  );
};

export default Contact;
