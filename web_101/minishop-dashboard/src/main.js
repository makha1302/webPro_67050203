import './style.css'
document.querySelector('#app').innerHTML = `
<div class="min-h-screen bg-gray-100">
<!--================= HEADER ================= -->
<header class="bg-white shadow-md">
<div class="max-w-7xl mx-auto px-6 py-4
flex items-center justify-between">
<div>

<h1 class="text-2xl font-bold text-blue-600">
MiniShop
</h1>
<p class="text-sm text-gray-500">
Admin Dashboard
</p>
</div>
<div class="flex items-center gap-5">
  <button class="text-xl">🔍</button>
  <button class="relative text-xl">
    🛒
    <span class="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
  </button>
  <button class="text-xl">👤</button>
</div>
</div>
</header>

<!--================= SIDEBAR + MAIN WRAPPER ================= -->
<div class="max-w-7xl mx-auto flex flex-col md:flex-row">

  <!--================= SIDEBAR ================= -->
  <aside class="w-full md:w-56 shrink-0 py-4 md:py-8 px-6 md:px-0 md:pr-4">
    <nav class="flex md:flex-col gap-2 md:gap-1 md:space-y-1">
      <a href="#" class="flex items-center gap-3 px-4 py-2 rounded-lg bg-blue-50 text-blue-600 font-medium">
        🏠 Dashboard
      </a>
      <a href="#" class="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-50">
        📦 Products
      </a>
      <a href="#" class="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-50">
        👤 Profile
      </a>
    </nav>
  </aside>

<!--================= MAIN ================= -->
<main class="flex-1 px-6 py-8">
<h2 class="text-3xl font-bold text-gray-800">
Dashboard
</h2>
<p class="mt-2 text-gray-500">
Welcome back to MiniShop
</p>

<!--================= STAT CARDS ================= -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

<!-- Card 1 -->
<div class="bg-white p-6 rounded-xl shadow">
<p class="text-gray-500">
Total Products
</p>
<h3 class="text-3xl font-bold mt-2">
24
</h3>
</div>

<!-- Card 2 -->
<div class="bg-white p-6 rounded-xl shadow">
<p class="text-gray-500">
Orders
</p>
<h3 class="text-3xl font-bold mt-2">
128
</h3>
</div>

<!-- Card 3 -->
<div class="bg-white p-6 rounded-xl shadow">
<p class="text-gray-500">
Revenue
</p>
<h3 class="text-3xl font-bold mt-2">
฿48,500
</h3>
</div>

<!-- Card 4 -->
<div class="bg-white p-6 rounded-xl shadow">
<p class="text-gray-500">
Customers
</p>
<h3 class="text-3xl font-bold mt-2">

86
</h3>
</div>
</div>

<!--================= RECENT ORDERS ================= -->
<div class="bg-white rounded-xl shadow mt-8 p-6 overflow-x-auto">
<h3 class="text-xl font-bold">
Recent Orders
</h3>
<div class="mt-6 min-w-[480px]">
<div class="flex justify-between
border-b py-4">
<span>ORD-001</span>
<span>Alex Student</span>
<span>฿1,590</span>
<span class="text-green-600">
Completed
</span>
</div>

<div class="flex justify-between
border-b py-4">
<span>ORD-002</span>
<span>John Student</span>
<span>฿2,990</span>
<span class="text-yellow-600">
Pending
</span>
</div>

<div class="flex justify-between

py-4">
<span>ORD-003</span>
<span>Jane Student</span>
<span>฿890</span>
<span class="text-blue-600">
Shipping
</span>
</div>
</div>
</div>
      <!--================= PRODUCTS ================= -->
      <h3 class="text-xl font-bold mt-10">
        Products
      </h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">

        <!-- Laptop -->
        <div class="bg-white rounded-xl shadow p-5">
          <div class="h-40 bg-gray-100 rounded-lg flex items-center justify-center text-5xl">
            💻
          </div>
          <h3 class="text-lg font-bold mt-4">Laptop</h3>
          <p class="text-blue-600 font-bold mt-2">฿12,900</p>
          <p class="text-yellow-500 mt-2">★★★★★</p>
          <button class="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Add to Cart
          </button>
        </div>

        <!-- Headphones -->
        <div class="bg-white rounded-xl shadow p-5">
          <div class="h-40 bg-gray-100 rounded-lg flex items-center justify-center text-5xl">
            🎧
          </div>
          <h3 class="text-lg font-bold mt-4">Headphones</h3>
          <p class="text-blue-600 font-bold mt-2">฿1,290</p>
          <p class="text-yellow-500 mt-2">★★★★</p>
          <button class="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Add to Cart
          </button>
        </div>

        <!-- Backpack -->
        <div class="bg-white rounded-xl shadow p-5">
          <div class="h-40 bg-gray-100 rounded-lg flex items-center justify-center text-5xl">
            🎒
          </div>
          <h3 class="text-lg font-bold mt-4">Backpack</h3>
          <p class="text-blue-600 font-bold mt-2">฿890</p>
          <p class="text-yellow-500 mt-2">★★★★★</p>
          <button class="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Add to Cart
          </button>
        </div>

        <!-- Smart Watch -->
        <div class="bg-white rounded-xl shadow p-5">
          <div class="h-40 bg-gray-100 rounded-lg flex items-center justify-center text-5xl">
            ⌚
          </div>
          <h3 class="text-lg font-bold mt-4">Smart Watch</h3>
          <p class="text-blue-600 font-bold mt-2">฿2,990</p>
          <p class="text-yellow-500 mt-2">★★★★</p>
          <button class="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Add to Cart
          </button>
        </div>

      </div>

      <!--================= PROFILE ================= -->
      <h3 class="text-xl font-bold mt-10">
        Profile
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">

        <!-- Profile card -->
        <div class="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
          <div class="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center text-4xl">
            👤
          </div>
          <h3 class="text-xl font-bold mt-4">Alex Student</h3>
          <p class="text-gray-500 mt-2">alex@email.com</p>
          <p class="text-gray-500">Student ID: 6501234567</p>
          <button class="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Edit Profile
          </button>
        </div>

        <!-- Account summary -->
        <div class="bg-white rounded-xl shadow p-6">
          <h3 class="text-lg font-bold mb-4">Account Summary</h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 rounded-lg p-4">
              <p class="text-gray-500 text-sm">Total Orders</p>
              <p class="text-2xl font-bold mt-1">128</p>
            </div>
            <div class="bg-purple-50 rounded-lg p-4">
              <p class="text-gray-500 text-sm">Total Spent</p>
              <p class="text-2xl font-bold mt-1">฿48,500</p>
            </div>
            <div class="bg-green-50 rounded-lg p-4">
              <p class="text-gray-500 text-sm">Wishlist Items</p>
              <p class="text-2xl font-bold mt-1">6</p>
            </div>
            <div class="bg-yellow-50 rounded-lg p-4">
              <p class="text-gray-500 text-sm">Loyalty Points</p>
              <p class="text-2xl font-bold mt-1">320</p>
            </div>
          </div>
        </div>

      </div>

</main>
</div>
</div>
`