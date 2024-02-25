"use client";
import { addUser } from "@/libs/action";
import styles from "./adminUserForm.module.css";
import { useFormState } from "react-dom";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);

  return (
    <div className={styles.container}>
      <form action={formAction} className={styles.container}>
        <h1>Add New User</h1>

        <input type="text" name="username" placeholder="Add a username" />
        <input type="text" name="email" placeholder="Add email" />
        <input type="password" name="password" placeholder="mpassword" />
        <input type="text" name="img" placeholder="Add image" />
        <select name="isAdmin" id="">
          <option value="false">Is Admin?</option>
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>

        <button>Add Post</button>
        {state && state.error}
      </form>
    </div>
  );
};

export default AdminUserForm;
