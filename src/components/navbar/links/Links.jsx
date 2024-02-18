"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./links.module.css";
import NavLinks from "./navlinks/NavLinks";
import { useState } from "react";
import { handleLogout } from "@/libs/actions";
import { auth } from "@/libs/auth";
const links = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
];
const Links = ({ session }) => {
  const [open, setOpen] = useState(false);

  const isAdmin = true;
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLinks item={link} key={link.title} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <NavLinks item={{ title: "Admin", path: "/admin" }} />
            )}
            <form action={handleLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <NavLinks item={{ title: "Login", path: "/login" }} />
        )}
      </div>

      <Image
        className={styles.menuButton}
        src="/menu.png"
        width={30}
        height={30}
        alt="menu"
        onClick={() => setOpen((prev) => !prev)}
      />

      {open && (
        <div className={styles.mobilelinks}>
          {links.map((link) => (
            <NavLinks item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
