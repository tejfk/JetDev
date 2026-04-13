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
    <section id="contact" className="section-padding bg-bg-primary relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-white opacity-[0.015] blur-[150px] rounded-full pointer-events-none translate-y-1/2 translate-x-1/3" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
        
        {/* Left Side: Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col justify-center"
        >
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm w-fit">
             <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
             <p className="text-text-secondary text-xs sm:text-sm font-bold uppercase tracking-[0.2em] pt-[2px]">
               Available for Freelance
             </p>
          </div>
          
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-white tracking-tighter mb-8 leading-[1.1]">
            Let's build something <br className="hidden md:block"/>
            <span className="text-white/40">extraordinary.</span>
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed max-w-md mb-12">
            Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new opportunities and collaborations.
          </p>

          <div className="space-y-10">
            <div className="group border-l-2 border-white/10 pl-6 hover:border-white/40 transition-colors duration-300">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/30 mb-2 group-hover:text-white/50 transition-colors">Direct Email</p>
              <a 
                href="mailto:jancinaljetjet@gmail.com" 
                className="text-2xl font-heading font-bold text-white hover:text-white/70 transition-colors duration-300"
              >
                jancinaljetjet@gmail.com
              </a>
            </div>
            
            <div className="group border-l-2 border-white/10 pl-6 hover:border-white/40 transition-colors duration-300">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/30 mb-2 group-hover:text-white/50 transition-colors">Location</p>
              <p className="text-2xl font-heading font-bold text-white">
                Cebu City, Philippines
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="glass-panel p-8 md:p-12 relative overflow-hidden"
        >
          {/* Form Glare Effect */}
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-white/[0.03] blur-[80px] pointer-events-none rounded-full" />
          
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="space-y-2 group">
              <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-white/40 group-focus-within:text-white/80 transition-colors ml-1">
                Name
              </label>
              <div className="relative">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all placeholder:text-white/20"
                />
              </div>
            </div>

            <div className="space-y-2 group">
              <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-white/40 group-focus-within:text-white/80 transition-colors ml-1">
                Email
              </label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="hello@example.com"
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all placeholder:text-white/20"
                />
              </div>
            </div>

            <div className="space-y-2 group">
              <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-white/40 group-focus-within:text-white/80 transition-colors ml-1">
                Message
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your vision..."
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all resize-none placeholder:text-white/20"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={formState !== 'idle'}
              className="btn-bw-primary w-full h-14 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <AnimatePresence mode="wait">
                {formState === 'idle' && (
                  <motion.span key="idle" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}>
                    Send Message
                  </motion.span>
                )}
                {formState === 'sending' && (
                  <motion.span key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-3">
                    <svg className="animate-spin h-5 w-5 text-black" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending request...
                  </motion.span>
                )}
                {formState === 'sent' && (
                  <motion.span key="sent" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex items-center gap-2 text-green-600">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                    Message Delivered
                  </motion.span>
                )}
                {formState === 'error' && (
                  <motion.span key="error" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex items-center gap-2 text-red-600">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
                    Delivery Failed
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
