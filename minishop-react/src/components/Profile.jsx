function Profile({ cartCount }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
        <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center text-4xl">
          👤
        </div>
        <h3 className="text-xl font-bold mt-4">Alex Student</h3>
        <p className="text-gray-500 mt-2">alex@email.com</p>
        <p className="text-gray-500">Student ID: 6501234567</p>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-lg font-bold mb-4">Account Summary</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="text-gray-500 text-sm">Items in Cart</p>
            <p className="text-2xl font-bold mt-1">{cartCount}</p>
          </div>
          <div className="bg-yellow-50 rounded-lg p-4">
            <p className="text-gray-500 text-sm">Loyalty Points</p>
            <p className="text-2xl font-bold mt-1">320</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
