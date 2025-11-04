import React from 'react'

export default function About() {
  return (
    <section className="min-h-screen bg-[#f9f5f1] pt-28 pb-20">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-5xl font-serif font-bold text-[#5C4033] mb-8 text-center md:text-left">
          About SICCraft Wood
        </h1>

        <p className="mb-10 text-lg text-[#6d5a4a] leading-relaxed max-w-3xl mx-auto md:mx-0">
          SICCraft Wood is a family-owned business based in Monastir, Tunisia, specializing in the
          creation and wholesale of unique olive wood products. With a heritage rooted in generations
          of craftsmanship, we offer a wide collection of handcrafted olive wood items celebrated for
          their durability, natural beauty, and authenticity. Our commitment to quality and tradition
          brings the timeless spirit of Tunisian artistry to homes and clients around the world.
        </p>

        <div className="my-12 border-t border-[#d8c9b6] w-24 mx-auto md:mx-0"></div>

        <h2 className="text-3xl font-serif font-semibold text-[#5C4033] mb-4">
          Heritage & Workshop
        </h2>
        <p className="text-[#6d5a4a] leading-relaxed max-w-3xl mx-auto md:mx-0">
          Our story is shaped by family tradition and pride in skilled workmanship.  
          Photos and a detailed timeline are coming soon — this section will soon showcase  
          the evolution of SICCraft Wood, feature glimpses into our workshop, and share  
          the family journey guiding our craft.
        </p>

        <div className="mt-16 rounded-2xl overflow-hidden shadow-xl">
          <img
            src="/img/Boards & Platters.jpg"
            alt="Olive wood workshop"
            className="w-full object-cover h-80 md:h-[500px]"
          />
        </div>
      </div>
    </section>
  )
}
