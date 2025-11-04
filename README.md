# SICCraft Wood — Portfolio Website (Scaffold)

This is a starter Vite + React + TypeScript project scaffold for the SICCraft Wood portfolio website. It uses Tailwind CSS for styling and Framer Motion for subtle animations.

Features included:
- Tailwind CSS setup
- React Router and page skeletons (Home, About, Products, Custom Designs, Contact)
- Components: Navbar, Footer, Hero, ProductCard, ContactForm (stub)
- SEO meta tags in `index.html`

Getting started (Windows PowerShell):

```powershell
npm install
npm run dev
```

Notes and next steps:
- Install dev dependencies (Tailwind, Vite plugins) if missing.
- Replace placeholder images in `/img` with high-quality optimized photos.
- Connect the `ContactForm` to EmailJS or Formspree — instructions:
  - EmailJS: create account, get service ID, template ID and user ID, then call emailjs.send in `ContactForm`.
  - Formspree: use the form action attribute to submit to Formspree endpoint.
- Add Google Maps iframe in `Contact` page and real contact details.
- Consider multilingual support using `react-i18next`.
- For WhatsApp inquiries, add a link like `https://wa.me/<number>?text=I'm%20interested%20in...` on product cards.

Quality gates:
- Build: not yet run in this workspace (install dependencies first).
- Lint/Typecheck: will require installing dependencies and types.
