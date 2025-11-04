import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero(){
  return (
    <section className="wood-bg text-white py-28">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8}} className="text-4xl md:text-6xl font-serif mb-4">Handcrafted Olive Wood Creations from Tunisia</motion.h1>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}} className="max-w-xl mx-auto mb-6">SICCraft Wood blends tradition and design to craft durable, beautiful olive wood products for homes and brands.</motion.p>
        <div className="space-x-4">
          <Link to="/products" className="px-6 py-3 bg-olive-wood text-white rounded">Explore Products</Link>
          <Link to="/contact" className="px-6 py-3 bg-olive-wood text-white rounded">Contact Us</Link>
        </div>
      </div>
    </section>
  )
}
