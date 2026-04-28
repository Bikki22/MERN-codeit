import { FaMapMarkedAlt } from "react-icons/fa";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaTwitter,
} from "react-icons/fa6";

export const metadata = {
  title: "Contact",
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
            Get in touch
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Have a question or want to work with us? Fill out the form and
            we&apos;ll get back to you as soon as possible.
          </p>
        </div>
        <div className="md:flex">
          <div className="md:w-2/5 mb-10 md:mb-0">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
              Contact Information
            </h3>
            <div className="flex items-start mb-6">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <FaMapMarkedAlt className="text-primary text-xl" />
              </div>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white">
                  Address
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  123 Business Ave, Suite 100
                  <br />
                  San Francisco, CA 94107
                </p>
              </div>
            </div>
            <div className="flex items-start mb-6">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <FaPhone className="text-primary text-xl" />
              </div>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white">
                  Phone
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  +1 (555) 123-4567
                </p>
              </div>
            </div>
            <div className="flex items-start mb-6">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <FaEnvelope className="text-primary text-xl" />
              </div>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white">
                  Email
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  hello@companyname.com
                </p>
              </div>
            </div>
            <div className="mt-10">
              <h4 className="font-medium text-gray-800 dark:text-white mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-primary text-gray-600 dark:text-gray-300 p-3 rounded-full hover:bg-primary hover:text-white transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-primary text-gray-600 dark:text-gray-300 p-3 rounded-full hover:bg-primary hover:text-white transition"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-primary text-gray-600 dark:text-gray-300 p-3 rounded-full hover:bg-primary hover:text-white transition"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-primary text-gray-600 dark:text-gray-300 p-3 rounded-full hover:bg-primary hover:text-white transition"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-3/5 md:pl-16">
            <form className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 dark:text-white">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-700 dark:text-gray-200 font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
                  placeholder="John Doe"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 dark:text-gray-200 font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
                  placeholder="john@example.com"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-gray-700 dark:text-gray-200 font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
                  placeholder="How can we help?"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 dark:text-gray-200 font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
                  placeholder="Type your message here..."
                  defaultValue={""}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 px-4 rounded-xl font-semibold hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/30 transition cursor-pointer"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
