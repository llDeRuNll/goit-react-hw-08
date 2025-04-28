import { useDispatch, useSelector } from "react-redux";
import styles from "./UserMenu.module.css";
import { selectUserName } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserName);

  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  return (
    <div className={styles.userMenu}>
      <span className={styles.username}>Hello, {user.name}</span>
      <button type="button" onClick={handleLogout} className={styles.button}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
