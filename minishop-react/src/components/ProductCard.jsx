function ProductCard({ name, price, image, category, onAdd }) {
  return (
    <div className="bg-white rounded-xl shadow p-5 flex flex-col">
      <div className="h-36 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
        <img src={image} alt={name} className="max-h-full max-w-full object-contain" />
      </div>

      <span className="mt-3 text-xs inline-block w-fit bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
        {category}
      </span>

      <h3 className="mt-2 text-base font-bold line-clamp-2">{name}</h3>

      <p className="mt-2 text-lg font-bold text-blue-600">฿{price}</p>

      <button
        onClick={onAdd}
        className="mt-auto pt-4">
        <span className="block w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors text-center">
          Add to Cart
        </span>
      </button>
    </div>
  )
}

export default ProductCard
