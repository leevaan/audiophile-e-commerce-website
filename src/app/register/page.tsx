"use client";

import styles from "./register.module.css";
import Link from "next/link";
// components
import Navtitle from "../../component_styles/NavTitle";
import Button from "../../component_styles/Button";

export default function RegisterPage() {
  return (
    <main className={`${styles.mainRegister} `}>
      <div className={`${styles.registerContent} containerSize`}>
        <Navtitle title="Register" />
        <div className={`${styles.container} `}>
          <form className={styles.form} autoComplete="off">
            <input
              className={styles.input}
              type="text"
              placeholder="Name"
              required
            />
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
              type="submit"
              className={styles.button}
              buttonName="Register"
            />
          </form>
          <div style={{ textAlign: "center" }}>
            <div style={{ margin: "16px 0", color: "#aaa", fontWeight: "600" }}>
              or
            </div>
            <button
              type="button"
              className={styles.googleButton}
              onClick={() => alert("Google sign up integration coming soon!")}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                style={{ verticalAlign: "middle", marginRight: 8 }}
              >
                <g fill="none" fillRule="evenodd">
                  <path d="M0 0h20v20H0z" />
                  <path
                    d="M19.6 10.23c0-.68-.06-1.36-.18-2H10v3.77h5.5a4.7 4.7 0 01-2.04 3.08v2.56h3.3c1.93-1.78 3.04-4.4 3.04-7.41z"
                    fill="#4285F4"
                  />
                  <path
                    d="M10 20c2.7 0 4.97-.9 6.63-2.44l-3.3-2.56c-.92.62-2.1.99-3.33.99-2.56 0-4.73-1.73-5.5-4.07H1.1v2.6A10 10 0 0010 20z"
                    fill="#34A853"
                  />
                  <path
                    d="M4.5 12.92A5.98 5.98 0 014.1 10c0-.5.08-.98.18-1.92V5.48H1.1A10 10 0 000 10c0 1.64.4 3.18 1.1 4.52l3.4-2.6z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M10 4.02c1.47 0 2.8.5 3.84 1.48l2.88-2.88C14.97 1.1 12.7 0 10 0A10 10 0 001.1 5.48l3.4 2.6C5.27 6.75 7.44 4.02 10 4.02z"
                    fill="#EA4335"
                  />
                </g>
              </svg>
              Sign up with Google
            </button>
          </div>
          <Link href="/login" className={styles.link}>
            Already have an account? Login
          </Link>
        </div>
      </div>
    </main>
  );
}
