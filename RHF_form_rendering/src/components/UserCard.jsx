function UserCard({ user, onUpdate, onDelete }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-5 w-70">
      <img
        src={user.imageUrl}
        alt={user.name}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-bold mb-3">
          {user.name}
        </h2>

        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Email:</span>{" "}
          {user.email}
        </p>

        <p className="text-gray-600 mb-5">
          <span className="font-semibold">Mobile:</span>{" "}
          {user.mobile}
        </p>

        <div className="flex gap-3">
          <button
            onClick={() => onUpdate(user)}
            className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg font-medium"
          >
            Update
          </button>

          <button
            onClick={() => onDelete(user.id)}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-medium"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserCard;