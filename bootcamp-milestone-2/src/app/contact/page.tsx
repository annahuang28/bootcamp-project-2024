import React from "react";
import style from "./contact.module.css";

const Contact = () => {
  return (
    <main>
      <h1 className="page-title">Contact</h1>
      <form id="contact-form" className={style.form}>
        <label htmlFor="name" className={style.label}>
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className={style.input}
        />

        <label htmlFor="email" className={style.label}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className={style.input}
        />

        <label htmlFor="message" className={style.label}>
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Enter your message here"
          required
          className={style.textarea}
        ></textarea>

        <input
          type="submit"
          value="Submit"
          className={style.submitButton}
        />
      </form>
    </main>
  );
};

export default Contact;
