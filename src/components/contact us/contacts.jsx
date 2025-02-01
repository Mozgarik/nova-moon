import React from "react"
import styles from './contact.module.css'
import contact from '../../img/contact-us.svg'
import { useState } from "react"

const ContactUs = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Email отправлен: ${email}`);
    };
    return (
        <div className={styles.contactsSection}>
                <img  src={contact} alt="contact-us" />
            <div className={styles.contactForm}>
                <h3>Contact Us</h3>
                <p>Discover your current English level by taking our free online English test. Sign up to our newsletter for learning tips and free resource</p>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
                    >
                      <span className={styles.subscribe}>Subscribe</span> 
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactUs