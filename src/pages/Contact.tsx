import React from "react";
import { MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section className="min-h-screen bg-[#f9f5f1] pt-28 pb-20 flex items-center">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12">
        
        {/* LEFT SECTION */}
        <div className="space-y-8">
          <div className="text-center md:text-left">
            <h3 className="text-[#b88746] uppercase tracking-wider mb-2 font-medium">
              Get in Touch
            </h3>
            <h1 className="text-5xl font-serif font-bold text-[#5C4033] mb-6">
              We’re Always Here for You
            </h1>
            <p className="text-[#6d5a4a] leading-relaxed max-w-md mx-auto md:mx-0">
              Whether you have a question, need advice, or want to discuss a custom
              woodwork project, our team in Monastir is ready to respond quickly.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-[#e8dfd4] p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
              <MapPin className="mx-auto text-[#b88746]" size={36} />
              <h3 className="text-lg font-semibold mt-4 text-[#5C4033]">Our Address</h3>
              <p className="text-[#6d5a4a] text-sm mt-2">Monastir, Tunisia</p>
            </div>

            <div className="bg-[#e8dfd4] p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
              <Phone className="mx-auto text-[#b88746]" size={36} />
              <h3 className="text-lg font-semibold mt-4 text-[#5C4033]">Call Us</h3>
              <p className="text-[#6d5a4a] text-sm mt-2">+216 20 123 456</p>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-lg mt-8">
            <iframe
              title="Map Location"
              src="https://www.google.com/maps?q=Monastir,Tunisia&output=embed"
              width="100%"
              height="260"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* RIGHT SECTION - Form */}
        <div className="bg-white text-[#5C4033] p-10 rounded-2xl shadow-xl">
          <div className="bg-[#b88746] text-white text-center p-3 rounded-md font-semibold mb-8 shadow">
            Fill out the form below and we’ll get back to you as soon as possible.
          </div>

          <form className="space-y-5">
            <div>
              <label className="block mb-2 font-medium">Full Name *</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full p-3 rounded-md bg-[#f4eee6] border border-[#d2b48c] focus:outline-none focus:border-[#b88746]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 font-medium">Email *</label>
                <input
                  type="email"
                  placeholder="example@mail.com"
                  className="w-full p-3 rounded-md bg-[#f4eee6] border border-[#d2b48c] focus:outline-none focus:border-[#b88746]"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Phone *</label>
                <input
                  type="tel"
                  placeholder="+216 XX XXX XXX"
                  className="w-full p-3 rounded-md bg-[#f4eee6] border border-[#d2b48c] focus:outline-none focus:border-[#b88746]"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 font-medium">Subject *</label>
              <input
                type="text"
                placeholder="Your subject"
                className="w-full p-3 rounded-md bg-[#f4eee6] border border-[#d2b48c] focus:outline-none focus:border-[#b88746]"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Message *</label>
              <textarea
                placeholder="Write your message here..."
                rows={4}
                className="w-full p-3 rounded-md bg-[#f4eee6] border border-[#d2b48c] focus:outline-none focus:border-[#b88746]"
              ></textarea>
              <p className="text-sm text-[#6d5a4a] mt-1">
                Between 50 and 2000 characters
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-[#5C4033] hover:bg-[#4a3429] text-[#f4eee6] font-semibold py-3 rounded-md transition-all shadow-md hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
