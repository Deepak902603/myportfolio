import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nd41kag",
        "template_nvh3fao",
        form.current,
        "IqIhRyvXFmGeoNXJZ"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        () => {
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section id="contact" className="py-24">
      <ToastContainer />

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">CONTACT</h2>
          <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
          <p className="text-gray-400 mt-4 text-lg">
            I’d love to hear from you — reach out anytime!
          </p>
        </div>

        {/* Contact Form */}
        <div className="w-full max-w-md bg-[#0d081f] p-6 rounded-lg border border-gray-700 shadow-lg">
          <h3 className="text-xl font-semibold text-white text-center mb-4">
            Connect With Me 🚀
          </h3>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col space-y-4"
          >
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:border-purple-500 focus:outline-none"
            />

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:border-purple-500 focus:outline-none"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:border-purple-500 focus:outline-none"
            />

            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              required
              className="p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:border-purple-500 focus:outline-none"
            />

            <button
              type="submit"
              disabled={isSent}
              className={`bg-gradient-to-r from-purple-600 to-pink-500 py-3 rounded-md text-white font-semibold transition ${
                isSent ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
              }`}
            >
              {isSent ? "Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
