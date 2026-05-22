import React from 'react'
import { motion } from 'motion/react'
import { Mail, User, MessageSquare, Send, Check } from "lucide-react";
import { useEffect, useState } from "react";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/mnnoedrv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setShowSnackbar(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setStatus('');
          setShowSnackbar(false);
        }, 3000);
      }
    } catch (error) {
      setStatus('error', error);
    }
    {
      showSnackbar && (
        <div className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-fade-up z-50">
          <span>Message envoyé avec succès</span>
          <Check className="w-5 h-5" />
        </div>
      )
    }
  };
  return (
    <>
      <div className='w-full pb-40 min-h-max bg-bg dark:bg-bg-dark z-10 flex flex-col items-center mx-auto'>
        <motion.h2
          className='mt-32 text-4xl text-primary-text dark:text-primary-text-dark font-semibold mb-20'

          //motion animation
          initial={{ opacity: 0, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Contacts
        </motion.h2>

        <div className='w-full md:w-[60%] max-w-300 h-max mx-auto relative'>
          {/* top left */}
          <div className='hidden absolute top-0 left-0 md:flex flex-col items-center justify-center'>
            <span className='absolute block w-px h-8 bg-accent ' />
            <span className='absolute rotate-90 block w-px h-8 bg-accent ' />
          </div>
          {/* top right */}
          <div className='hidden absolute top-0 right-0 md:flex flex-col items-center justify-center'>
            <span className='absolute block w-px h-8 bg-accent ' />
            <span className='absolute rotate-90 block w-px h-8 bg-accent ' />
          </div>
          {/* bottom left */}
          <div className='hidden absolute bottom-0 left-0 md:flex flex-col items-center justify-center'>
            <span className='absolute block w-px h-8 bg-accent ' />
            <span className='absolute rotate-90 block w-px h-8 bg-accent ' />
          </div>
          {/* bottom right */}
          <div className='hidden absolute bottom-0 right-0 md:flex flex-col items-center justify-center'>
            <span className='absolute block w-px h-8 bg-accent ' />
            <span className='absolute rotate-90 block w-px h-8 bg-accent ' />
          </div>


          {/* form */}

          <div className='p-2 md:p-8'>
            <div className="space-y-8">
              <div>
                <label htmlFor="name" className="dark:text-white block text-sm font-medium mb-2 opacity-70">
                  Nom
                </label>
                <div className="relative dark:text-white">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 opacity-40" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className='block w-full pl-10 pr-3 py-3 border-accent-light focus:border-accent dark:text-white dark:border-accent-dark border rounded-full focus:ring-2 focus:ring-accent/60 transition outline-none'
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block dark:text-white  text-sm font-medium mb-2 opacity-70">
                  Email
                </label>
                <div className="relative dark:text-white">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 opacity-40" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className='block w-full pl-10 pr-3 py-3 border-accent-light focus:border-accent dark:text-white dark:border-accent-dark border rounded-full focus:ring-2 focus:ring-accent/60 transition outline-none'
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block dark:text-white  text-sm font-medium mb-2 opacity-70">
                  Message
                </label>
                <div className="relative dark:text-white">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <MessageSquare className="h-5 w-5 opacity-40" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className='block w-full pl-10 pr-3 py-3 border-accent-light focus:border-accent dark:text-white dark:border-accent-dark border rounded-[20px] resize-none no-scrollbar focus:ring-2 focus:ring-accent/60 transition outline-none'
                    placeholder="Votre message..."
                  />
                </div>
              </div>

              <button
                onClick={handleSubmit}
                disabled={status === 'sending'}
                className="w-full bg-accent text-white font-semibold py-3 px-6 rounded-full transition duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Envoyer le message</span>
                  </>
                )}
              </button>
            </div>

            <div className="mt-8 pt-6 border-t dark:text-white border-accent/50 text-center text-md">
              <p className='mb-10'>Ou </p>
              <div className='w-full flex flex-row gap-8 items-center justify-center'>

                {/* mail */}
                <a href="mailto:martharun514@gmail.com" className="text-accent text-lg font-medium">
                  <Mail className='w-8 h-8 hover:text-[#607AFB]' strokeWidth={1.5} />
                </a>

                {/* facebook */}
                <a href="https://facebook.com"
                  target='blank'
                  className="text-accent text-lg font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="cursor-pointer w-8 h-8 hover:text-[#607AFB] transition-colors duration-300 filled-icon"
                    aria-hidden="true">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>

                {/* likedin */}
                <a href="https://www.linkedin.com/in/marthely-adjovi-2936a432b/"
                  target='blank'
                  className="text-accent text-lg font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="cursor-pointer w-8 h-8 hover:text-[#607AFB] transition-colors duration-300 filled-icon"
                    aria-hidden="true">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div >

    </>
  )
}
