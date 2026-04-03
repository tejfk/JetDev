import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [formState, setFormState] = useState('idle'); // idle | sending | sent | error
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('sending');

    try {
      const formData = new FormData();
      formData.append("access_key", "ca4be9d3-fd9b-457a-ab86-202a73878584");
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("message", form.message);
      formData.append("subject", `New Message from Portfolio - ${form.name}`);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setFormState('sent');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setFormState('idle'), 5000);
      } else {
        setFormState('error');
        setTimeout(() => setFormState('idle'), 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormState('error');
      setTimeout(() => setFormState('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="section-padding bg-bg-primary">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
        
        {/* Left Side: Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-text-secondary text-sm font-bold uppercase tracking-[0.3em] mb-4">
            Contact
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8">
            Get in touch<span className="text-white/20">.</span>
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed max-w-md mb-12">
            Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to new opportunities.
          </p>

          <div className="space-y-8">
            <div className="group">
              <p className="text-[0.6rem] font-bold uppercase tracking-widest text-white/30 mb-2">Email Me</p>
              <a 
                href="mailto:jancinaljetjet@gmail.com" 
                className="text-xl md:text-2xl font-heading font-bold text-white hover:text-text-secondary transition-colors duration-300"
              >
                jancinaljetjet@gmail.com
              </a>
            </div>
            
            <div className="group">
              <p className="text-[0.6rem] font-bold uppercase tracking-widest text-white/30 mb-2">Location</p>
              <p className="text-xl font-heading font-medium text-white">
                Cebu City, Philippines
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-bg-section border border-white/5 p-8 md:p-12 rounded-3xl"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
              <label htmlFor="name" className="text-[0.65rem] font-bold uppercase tracking-widest text-white/40 ml-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-[0.65rem] font-bold uppercase tracking-widest text-white/40 ml-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="hello@example.com"
                className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-[0.65rem] font-bold uppercase tracking-widest text-white/40 ml-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="How can I help?"
                className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-white transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={formState !== 'idle'}
              className="btn-bw-primary w-full h-[3.5rem] mt-4"
            >
              <AnimatePresence mode="wait">
                {formState === 'idle' && (
                  <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    Send Message
                  </motion.span>
                )}
                {formState === 'sending' && (
                  <motion.span key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-black" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </motion.span>
                )}
                {formState === 'sent' && (
                  <motion.span key="sent" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex items-center gap-2">
                    Message Sent
                  </motion.span>
                )}
                {formState === 'error' && (
                  <motion.span key="error" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-red-500">
                    Error sending...
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
