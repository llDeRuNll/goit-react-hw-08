import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import s from "./ContactsPage.module.css";
import { fetchContactsThunk } from "../../redux/contacts/operations";
import { useEffect } from "react";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContactsThunk());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <div className={s.wrapper}>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
