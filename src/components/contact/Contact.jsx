import React, { useRef, useState } from "react";
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_8vog8zt",
        "template_qjmsp6r",
        formRef.current,
        "pQItS_Wstq8TkmrAY"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 740 990 7246
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              sadanmian@outlook.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              Rampur U.P. 244922
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you...Will Contact you soon."}
          </form>
        </div>
      </div>
    </div>
  );
};
