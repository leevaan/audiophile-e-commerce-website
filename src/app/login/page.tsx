// "use client";
import styles from "./login.module.css";
import Link from "next/link";
//  components
import Button from "../../components&styles/Button";
import Navtitle from "../../components&styles/NavTitle";

export default async function LoginPage() {
  return (
    <main className={`${styles.mainLogin}`}>
      <div className={`${styles.loginContent} containerSize`}>
        <Navtitle title="Login" />
        <div className={styles.container}>
          <form className={styles.form} autoComplete="off">
            <input
              className={styles.input}
              type="email"
              placeholder="Email"
              required
            />
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
              required
            />
            <Button
              className={styles.button}
              type="submit"
              buttonName="Login"
            />
          </form>
          <Link href="/register" className={styles.link}>
            Don&apos;t have an account? Register
          </Link>
        </div>
      </div>
    </main>
  );
}
