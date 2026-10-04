import { useState, useEffect } from 'react'
import Header from './components/Header'
import ProductList from './components/ProductList'
import Profile from './components/Profile'

function App() {
  // ---- State (Requirement 3) ----
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')
  const [cartCount, setCartCount] = useState(0)

  // ---- Requirement 6: fetch from Fake Store API ----
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
      .catch(() => {
        setError('ไม่สามารถโหลดข้อมูลได้')
        setLoading(false)
      })
  }, [])

  // ---- Requirement 5: filter by search ----
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  )

  // ---- Requirement 4: onClick event ----
  const handleAddToCart = () => {
    setCartCount((c) => c + 1)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header cartCount={cartCount} search={search} onSearchChange={setSearch} />

      <main className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold text-gray-800">Products</h2>
        <p className="mt-1 text-gray-500 mb-6">Browse items and add them to your cart</p>

        {/* Requirement 7: Loading state */}
        {loading && (
          <div className="p-10 text-center text-gray-500">Loading products...</div>
        )}

        {/* Requirement 8: Error state */}
        {!loading && error && (
          <div className="p-10 text-center text-red-600">{error}</div>
        )}

        {/* Requirement 9: Empty state */}
        {!loading && !error && filteredProducts.length === 0 && (
          <div className="p-10 text-center text-gray-500">ไม่พบสินค้าที่ค้นหา</div>
        )}

        {!loading && !error && filteredProducts.length > 0 && (
          <ProductList products={filteredProducts} onAdd={handleAddToCart} />
        )}

        <h2 className="text-xl font-bold mt-12 mb-4">Profile</h2>
        <Profile cartCount={cartCount} />
      </main>
    </div>
  )
}

export default App
