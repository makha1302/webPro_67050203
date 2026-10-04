import ProductCard from './ProductCard'

function ProductList({ products, onAdd }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.title}
          price={product.price}
          image={product.image}
          category={product.category}
          onAdd={() => onAdd(product)}
        />
      ))}
    </div>
  )
}

export default ProductList
