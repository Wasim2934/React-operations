function Navbar({ onCreateUser }) {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-bold">
        User Management
      </h1>

      <button
        onClick={onCreateUser}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium transition"
      >
        Create User
      </button>
    </nav>
  );
}

export default Navbar;