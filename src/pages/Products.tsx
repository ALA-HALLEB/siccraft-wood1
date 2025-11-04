import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'

const categories = [
  { title: 'Boards & Platters', img: '/img/Boards & Platters.jpg' },
  { title: 'Bowls', img: '/img/Bowls.jpg' },
  { title: 'Tableware', img: '/img/Tableware.jpg' },
  { title: 'Utensils', img: '/img/Utensils.jpg' },
  { title: 'Candle Holders', img: '/img/Candle Holders.jpg' },
  { title: 'Games', img: '/img/Game1.jpg' }
]

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProducts =
    selectedCategory === 'All'
      ? categories
      : categories.filter(c => c.title === selectedCategory)

  return (
    <section className="min-h-screen bg-[#f9f5f1] pt-28 pb-16 px-6">
      <div className="container mx-auto text-center">
        {/* TITLE */}
        <h1 className="text-5xl font-serif font-bold text-[#5C4033] mb-10 tracking-wide">
          Our Products
        </h1>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          Explore our handcrafted wooden creations — a blend of craftsmanship, beauty, and natural elegance.
        </p>

        {/* CATEGORY BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {['All', ...categories.map(c => c.title)].map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-[#5C4033] text-white shadow-md border-[#5C4033]'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-[#f3ebe6]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProducts.map(c => (
            <ProductCard key={c.title} title={c.title} img={c.img} />
          ))}
        </div>
      </div>
    </section>
  )
}
