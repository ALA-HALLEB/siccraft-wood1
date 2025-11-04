import React from 'react'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import { motion } from 'framer-motion'

export default function Home() {
  const featured = [
    { title: 'Olive Wood Cutting Board', img: '/img/IMG-20251029-WA0006.jpg' },
    { title: 'Rustic Bowl', img: '/img/IMG-20251029-WA0007.jpg' },
    { title: 'Utensil Set', img: '/img/IMG-20251029-WA0008.jpg' },
    { title: 'Utensil Set', img: '/img/IMG-20251029-WA0009.jpg' },
    { title: 'Utensil Set', img: '/img/IMG-20251029-WA0010.jpg' },
    { title: 'Utensil Set', img: '/img/IMG-20251029-WA0011.jpg' },
    { title: 'Utensil Set', img: '/img/IMG-20251029-WA0128.jpg' },
    { title: 'Utensil Set', img: '/img/IMG-20251029-WA0129.jpg' },
    { title: 'Utensil Set', img: '/img/IMG-20251029-WA0130.jpg' },
    { title: 'Utensil Set', img: '/img/IMG-20251029-WA0131.jpg' },
    { title: 'Utensil Set', img: '/img/IMG-20251029-WA0132.jpg' },
    { title: 'Utensil Set', img: '/img/IMG-20251029-WA0135.jpg' },
    { title: 'Utensil Set', img: '/img/IMG-20251029-WA0137.jpg' },
    { title: 'Utensil Set', img: '/img/IMG-20251029-WA0144.jpg' },
    { title: 'Utensil Set', img: '/img/IMG-20251029-WA0148.jpg' },
    { title: 'Utensil Set', img: '/img/IMG-20251029-WA0184.jpg' },
    { title: 'Utensil Set', img: '/img/IMG-20251029-WA0185.jpg' },
  ]

  return (
<div className="bg-gradient-to-b from-[#f9f6f1] via-[#f3ede5] to-[#f3ede5] min-h-screen">
      <Hero />

      <section className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#5a4b3b] mb-4">
            Featured Products
          </h2>
          <p className="text-[#776c5a] text-lg max-w-2xl mx-auto">
            Explore our handcrafted olive wood creations, made with passion and inspired by nature.
          </p>
          <div className="w-24 h-1 bg-[#b49b74] mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {featured.map((p, i) => (
            <motion.div
              key={p.title + p.img}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <ProductCard title={p.title} img={p.img} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}
