import styles from "../styles/SendMessage.module.css";
import { useRef } from "react";

const SendMessage = (props) => {
  let cls;
  let cls2;
  const name = useRef(null);
  const email = useRef(null);
  const message = useRef(null);

  props.location == "home" ? (cls = styles.wrapper) : (cls = styles.wrapper2);
  props.location == "home" ? (cls2 = "") : (cls2 = styles.contact);

  const sendMessage = () => {
    const nme = name.current;
    const eml = email.current;
    const msg = message.current;

    if (nme.value == "" || eml.value == "" || msg.value == "") {
      alert("Please completely fill out the fields.");
    } else {
      Email.send({
        Host: "smtp.elasticemail.com",
        Username: "ibikidsfc56@gmail.com",
        Password: "F9C7D0EA9FD5302C6BBE629C98348D5A1A36",
        To: "victoribironke2019@gmail.com",
        From: "ibikidsfc56@gmail.com",
        Subject: "New Message From Your Portfolio",
        Body: `Name: ${nme.value}\nEmail: ${eml.value}\nMessage: ${msg.value}`,
      }).then((mssg) => console.log(mssg));
      nme.value = "";
      eml.value = "";
      msg.value = "";
    }
  };

  return (
    <div className={cls}>
      <p className={styles.text}>Send me a message</p>
      <div className={styles.inputWrapper}>
        <input
          className={`${styles.name} ${cls2}`}
          id="name"
          type="text"
          ref={name}
          placeholder="Your name"
          name="name"
        />
        <input
          className={`${styles.email} ${cls2}`}
          type="email"
          ref={email}
          placeholder="Your email (to contact you)"
          name="email"
        />
      </div>
      <textarea
        className={`${styles.textarea} ${cls2}`}
        name="message"
        ref={message}
        placeholder="Message"
        cols="30"
        rows="10"
      ></textarea>
      <button onClick={sendMessage} className={styles.button}>
        Send
      </button>
    </div>
  );
};

export default SendMessage;
