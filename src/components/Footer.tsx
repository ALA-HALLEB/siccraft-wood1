import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#f6f3ee] via-[#efe8dd] to-[#e7dfd3] text-[#5a4b3b] mt-20 pt-12 pb-6 border-t border-[#d8cdbf]/50">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="font-serif text-2xl font-bold text-[#795c34] mb-3">SICCraft Wood</h3>
          <p className="text-sm mb-5 text-[#7a6d5b]">Monastir, Tunisia</p>

        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h4 className="font-bold text-[#795c34] mb-4 text-lg">Quick Links</h4>
          <ul className="space-y-2 text-[#6b5e4c]">
            {[
              { to: '/', text: 'Home' },
              { to: '/products', text: 'Products' },
              { to: '/custom', text: 'Custom Orders' },
              { to: '/about', text: 'About' },
              { to: '/contact', text: 'Contact' },
            ].map((link, i) => (
              <li key={i}>
                <Link
                  to={link.to}
                  className="hover:text-[#b49b74] transition-colors"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4 className="font-bold text-[#795c34] mb-4 text-lg">Stay Updated</h4>
          <p className="text-sm text-[#6b5e4c] mb-4">
            Join our mailing list to receive exclusive offers and updates on new olive wood creations.
          </p>
          <form className="flex bg-white rounded-full overflow-hidden shadow-sm border border-[#cfc2af] max-w-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 text-sm outline-none text-[#5a4b3b]"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#b49b74] hover:bg-[#a48a63] text-white text-sm font-semibold transition-colors"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#d8cdbf]/50 mt-10 pt-4 text-center text-xs text-[#7a6d5b]">
        © {new Date().getFullYear()} SICCraft Wood — Crafted with passion in Tunisia 🇹🇳
      </div>
    </footer>
  );
}
