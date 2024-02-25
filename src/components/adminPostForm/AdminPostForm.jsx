"use client";

import { addPost } from "@/libs/action";
import styles from "./adminPostForm.module.css";
import { useFormState } from "react-dom";

const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);

  return (
    <div className={styles.container}>
      <form action={formAction} className={styles.container}>
        <h1>Add New Post</h1>
        <input type="hidden" name="userId" value={userId} />
        <input type="text" name="title" placeholder="Add a title" />
        <input type="text" name="slug" placeholder="Add slug" />
        <input type="text" name="img" placeholder="Add image" />
        <textarea
          type="text"
          name="desc"
          placeholder="Add description"
          rows={10}
        />
        <button>Add Post</button>
        {state && state.error}
      </form>
    </div>
  );
};

export default AdminPostForm;
