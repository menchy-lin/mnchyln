import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { BiErrorCircle } from "react-icons/bi";
import "./Contact.css";
import AOSAnimation from "./AOSAnimation";

const Contact = () => {
  const [activeInputs, setActiveInputs] = useState({});
  const [validationMessages, setValidationMessages] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const handleInputFocus = (inputName) => {
    setActiveInputs((prevState) => ({
      ...prevState,
      [inputName]: true,
    }));
  };

  const handleInputBlur = (inputName) => {
    setActiveInputs((prevState) => ({
      ...prevState,
      [inputName]: false,
    }));
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Custom validation logic
    const { user_name, user_email, subject, message } = form.current.elements;
    const messages = {};

    if (!user_name.value) {
      messages.user_name = "Please enter your full name.";
    }
    if (!user_email.value) {
      messages.user_email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user_email.value)) {
      messages.user_email = "Please enter a valid email address.";
    } else if (!user_email.value.endsWith("@gmail.com")) {
      messages.user_email = "Please use a Gmail email address.";
    }
    if (!subject.value) {
      messages.subject = "Please enter the subject.";
    }
    if (!message.value) {
      messages.message = "Please enter the message.";
    }

    setValidationMessages(messages);

    if (Object.keys(messages).length > 0) {
      return;
    }

    emailjs
      .sendForm(
        "service_cq58kqf",
        "template_axg4m46",
        form.current,
        "1p5N3xNR6KS4h2Ruo"
      )
      .then(
        (result) => {
          console.log(result.text);
          // alert("Email sent successfully");
        },
        (error) => {
          console.log(error.text);
          // alert("Failed to send email");
        }
      );
    e.target.reset();
  };

  const getInputClassName = (inputName) => {
    return activeInputs[inputName] ? "contact-input-active" : "contact-input";
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <AOSAnimation animation="fade-right" duration={2000} delay={100}>
          <div className="contact-sub-container">
            <div className="contact-notify-text">
              <h3>Notify Me</h3>
            </div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="contact-form"
              noValidate
            >
              <input
                className={getInputClassName("user_name")}
                type="text"
                placeholder="Full Name"
                name="user_name"
                required
                onFocus={() => handleInputFocus("user_name")}
                onBlur={() => handleInputBlur("user_name")}
                noValidate
              />
              {validationMessages.user_name && (
                <span className="validation-message">
                  <BiErrorCircle className="contact-error-icon" />
                  {validationMessages.user_name}
                </span>
              )}

              <input
                className={getInputClassName("user_email")}
                type="email"
                placeholder="Email"
                name="user_email"
                required
                onFocus={() => handleInputFocus("user_email")}
                onBlur={() => handleInputBlur("user_email")}
                noValidate
              />
              {validationMessages.user_email && (
                <span className="validation-message">
                  <BiErrorCircle className="contact-error-icon" />
                  {validationMessages.user_email}
                </span>
              )}

              <input
                className={getInputClassName("subject")}
                type="text"
                placeholder="Subject"
                name="subject"
                required
                onFocus={() => handleInputFocus("subject")}
                onBlur={() => handleInputBlur("subject")}
                noValidate
              />
              {validationMessages.subject && (
                <span className="validation-message">
                  <BiErrorCircle className="contact-error-icon" />
                  {validationMessages.subject}
                </span>
              )}

              <textarea
                className={getInputClassName("message")}
                name="message"
                cols="30"
                rows="5"
                placeholder="message..."
                onFocus={() => handleInputFocus("message")}
                onBlur={() => handleInputBlur("message")}
                noValidate
              />
              {validationMessages.message && (
                <span className="validation-message">
                  <BiErrorCircle className="contact-error-icon" />
                  {validationMessages.message}
                </span>
              )}

              <button className="contact-btn" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </AOSAnimation>
        <AOSAnimation animation="fade-left" duration={2000} delay={100}>
          <div className="contact-social-icon-container">
            <div className="contact-social-icon-sub-container">
              <a
                href="https://www.linkedin.com/in/mgcm-ph/"
                target="_blank"
                rel="noreferrer"
                className="contact-social-icon"
              >
                linkedin
              </a>
              <a
                href="https://www.facebook.com/menchylin"
                target="_blank"
                rel="noreferrer"
                className="contact-social-icon"
              >
                facebook
              </a>
              <a
                href="https://github.com/menchy-lin"
                target="_blank"
                rel="noreferrer"
                className="contact-social-icon"
              >
                github
              </a>
            </div>
          </div>
        </AOSAnimation>
      </div>
    </section>
  );
};

export default Contact;
