import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6s9xz26", // Replace with your EmailJS service ID
        "template_i864zvj", // Replace with your EmailJS template ID
        form.current,
        "csFxyitEre1_1Q6Fp" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setShowPopup(true);
          setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="font-mono bg-secondary mt-20 py-10">
      <h1 className="text-4xl font-semibold text-center text-secondary">
        Contact Us
      </h1>
      <h1 className="text-4xl font-semibold text-primary text-center">
        Stay connected with us
      </h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="flex flex-col md:px-0 px-20 md:w-4/12 mx-auto mt-8">
          <input
            className="mb-4 py-4 px-4 rounded"
            type="text"
            placeholder="Enter Your Name"
            name="user_name"
            id=""
          />
          <input
            className="mb-4 py-4 px-4 rounded"
            type="email"
            placeholder="Enter Your E-mail"
            name="user_email"
            id=""
          />
          <input
            className="mb-4 py-4 px-4 rounded"
            type="text"
            placeholder="Subject"
            name="subject"
            id=""
          />
          <textarea
            className="py-4 px-4 rounded"
            name="message"
            id="message"
            placeholder="Your Message"
            cols="30"
            rows="10"
          ></textarea>
          <button
            className="mt-10 rounded px-8 py-4 w-36 mx-auto bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 text-lg font-semibold text-white transition-all duration-300"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <p className="text-lg font-semibold">Thank you!</p>
            <p>We will respond to you as early as possible.</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
