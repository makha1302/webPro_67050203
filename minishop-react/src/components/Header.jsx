function Header({ cartCount, search, onSearchChange }) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold text-blue-600">MiniShop</h1>

        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search product..."
          className="w-full sm:w-72 border border-gray-300 rounded-lg px-4 py-2"
        />

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <span className="text-xl">🛒</span>
          <span className="bg-blue-600 text-white text-sm font-medium rounded-full w-6 h-6 flex items-center justify-center">
            {cartCount}
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header
