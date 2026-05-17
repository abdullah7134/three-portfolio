import { useState } from 'react';
import { isFirebaseConfigured } from '../lib/firebase.js';
import { saveContactMessage } from '../lib/contact.js';

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
        if (status) setStatus(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        if (!isFirebaseConfigured()) {
            setStatus({
                type: 'error',
                text: 'Contact form is not connected yet. Add Firebase env variables (see .env.example).',
            });
            setLoading(false);
            return;
        }

        try {
            await saveContactMessage(form);
            setStatus({
                type: 'success',
                text: 'Thank you for your message. I will get back to you as soon as possible.',
            });
            setForm({ name: '', email: '', message: '' });
        } catch {
            setStatus({
                type: 'error',
                text: 'Something went wrong. Please try again in a moment.',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="c-space my-20">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img
                    src="assets/terminal.png"
                    alt="terminal"
                    className="absolute inset-0 min-h-screen object-cover opacity-10"
                />

                <div className="contact-container z-10 text-white max-w-xl w-full px-4">
                    <h3 className="text-3xl font-bold mb-4">Let's Connect</h3>
                    <p className="text-lg text-gray-300 mb-10">
                        Whether you need a high-performance website, a Facebook ad campaign that brings in real customers, or an AI automation that works while you sleep — I'm here to build it. My inbox is always open.
                    </p>

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col space-y-7 w-full items-start"
                    >
                        <label className="flex flex-col space-y-1 w-full max-w-md">
                            <span className="text-sm font-medium text-white">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                placeholder="Your Name"
                                className="bg-gray-800 text-white border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </label>

                        <label className="flex flex-col space-y-1 w-full max-w-md">
                            <span className="text-sm font-medium text-white">Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                placeholder="johndoe@example.com"
                                className="bg-gray-800 text-white border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </label>

                        <label className="flex flex-col space-y-1 w-full max-w-md">
                            <span className="text-sm font-medium text-white">Your Message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                placeholder="Hi Abdullah, I'm looking for..."
                                className="bg-gray-800 text-white border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </label>

                        {status && (
                            <p
                                className={`text-sm max-w-md ${
                                    status.type === 'success' ? 'text-green-400' : 'text-red-400'
                                }`}
                                role="alert"
                            >
                                {status.text}
                            </p>
                        )}

                        <button
                            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-md inline-flex items-center gap-2 disabled:opacity-50"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="assets/arrow-up.png" alt="arrow-up" className="w-4 h-4" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
