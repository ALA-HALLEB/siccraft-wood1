import React from 'react'

type Props = {
  title: string
  img?: string
}

export default function ProductCard({ title, img }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="h-56 bg-gray-100 flex items-center justify-center overflow-hidden">
        {img ? (
          <img
            src={img}
            alt={title}
            className="object-cover h-full w-full hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <span className="text-gray-400">No image available</span>
        )}
      </div>

      <div className="p-5 text-center">
        <h3 className="text-lg font-semibold text-[#5C4033] mb-3">{title}</h3>

        <button className="px-5 py-2 text-sm font-medium rounded-full border border-[#5C4033] text-[#5C4033] hover:bg-[#5C4033] hover:text-white transition-colors duration-300">
          Request Quote
        </button>
      </div>
    </div>
  )
}
