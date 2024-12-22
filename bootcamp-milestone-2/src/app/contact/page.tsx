"use client"
import React, { useState } from "react";
import emailjs from "emailjs-com"; 
import style from "./contact.module.css";

const Contact = () => {
  // State to manage form values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // State for error and success messages
  const [status, setStatus] = useState({
    success: false,
    error: false,
    message: "",
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    
    // Validate form fields
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        success: false,
        error: true,
        message: "All fields are required.",
      });
      return;
    }

    // Send email using EmailJS
    emailjs
      .send(
        "service_hsdtc49",
        "template_6scu4go", // EmailJS template ID
        formData, // Form data to send
        "zyLYh2MnouXfzkcmF" // EmailJS user ID
      )
      .then(
        (response) => {
          setStatus({
            success: true,
            error: false,
            message: "Your message has been sent successfully!",
          });
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setStatus({
            success: false,
            error: true,
            message: "There was an error sending your message. Please try again later.",
          });
        }
      );
  };

  return (
    <main>
      <h1 className="page-title">Contact</h1>
      <form id="contact-form" className={style.form} onSubmit={handleSubmit}>
        <label htmlFor="name" className={style.label}>
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
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
          value={formData.email}
          onChange={handleChange}
          className={style.input}
        />

        <label htmlFor="message" className={style.label}>
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Enter your message here:"
          required
          value={formData.message}
          onChange={handleChange}
          className={style.textarea}
        ></textarea>

        <input
          type="submit"
          value="Submit"
          className={style.submitButton}
        />
      </form>

      {status.message && (
        <div
          className={`${style.statusMessage} ${
            status.success ? style.success : style.error
          }`}
        >
          {status.message}
        </div>
      )}
    </main>
  );
};

export default Contact;
