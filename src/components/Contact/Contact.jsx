import React, { useState } from "react";
import { validateForm } from "../../utils/formValidation";
import styles from "./Contact.module.css";

const Contact = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = validateForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    // Simulate form submission
    setIsLoading(true);
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
      setIsLoading(false);

      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className={`${styles.contact} ${isDarkMode ? styles.dark : ""}`}
    >
      <div className={styles.container}>
        <h2 className={styles.heading}>Get In Touch</h2>
        <p className={styles.subtitle}>
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>

        <div className={styles.contactContent}>
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <span className={styles.icon}>📧</span>
              <div>
                <h3>Email</h3>
                <p>
                  <a href="mailto:your@email.com">your@email.com</a>
                </p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.icon}>💼</span>
              <div>
                <h3>LinkedIn</h3>
                <p>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/yourprofile
                  </a>
                </p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.icon}>🐙</span>
              <div>
                <h3>GitHub</h3>
                <p>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/yourprofile
                  </a>
                </p>
              </div>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`${styles.input} ${errors.name ? styles.error : ""}`}
                placeholder="Your name"
              />
              {errors.name && (
                <span className={styles.errorMessage}>{errors.name}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`${styles.input} ${errors.email ? styles.error : ""}`}
                placeholder="your@email.com"
              />
              {errors.email && (
                <span className={styles.errorMessage}>{errors.email}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`${styles.textarea} ${errors.message ? styles.error : ""}`}
                placeholder="Your message..."
                rows="5"
              ></textarea>
              {errors.message && (
                <span className={styles.errorMessage}>{errors.message}</span>
              )}
            </div>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>

            {isSubmitted && (
              <div className={styles.successMessage}>
                ✓ Thank you! Your message has been sent successfully.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
