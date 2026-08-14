import { useEffect } from "react";
import { useForm } from "react-hook-form";

function Form({ editingUser, onAddUser, onUpdateUser }) {      
  const { 
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ 
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      imageUrl: "", 
    },
  });

  // When editingUser changes, fill the form
  useEffect(() => { 
    if (editingUser) {
      reset({
        name: editingUser.name,
        email: editingUser.email,
        mobile: editingUser.mobile,
        imageUrl: editingUser.imageUrl,
      });
    } else {
      reset({
        name: "",
        email: "",
        mobile: "",
        imageUrl: "",
      });
    }
  }, [editingUser, reset]);

  const onSubmit = (data) => {
    if (editingUser) {
      onUpdateUser({
        ...editingUser,
        ...data,
      });
    } else {
      onAddUser(data);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6">
        {editingUser ? "Update User" : "Create User"}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>

        {/* NAME */}
        <div className="mb-5">
          <label className="block font-medium mb-2">
            User Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            {...register("name", {
              required: "User name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
            })}
          />

          {errors.name && (
            <p className="text-red-500 text-sm mt-1">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* EMAIL */}
        <div className="mb-5">
          <label className="block font-medium mb-2">
            Email
          </label>

          <input
            type="text"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            {...register("email", {
              required: "Email is required",

              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* MOBILE */}
        <div className="mb-5">
          <label className="block font-medium mb-2">
            Mobile Number
          </label>

          <input
            type="text"
            placeholder="Enter 10 digit mobile number"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            {...register("mobile", {
              required: "Mobile number is required",

              pattern: {
                value: /^[6-9]\d{9}$/,
                minLength: 10,
                maxLength: 10,
                message: "Enter a valid 10 digit mobile number",
              },
            })}
          />

          {errors.mobile && (
            <p className="text-red-500 text-sm mt-1">
              {errors.mobile.message}
            </p>
          )}
        </div>

        {/* IMAGE URL */}
        <div className="mb-6">
          <label className="block font-medium mb-2">
            Image URL
          </label>

          <input
            type="text"
            placeholder="Enter image URL"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            {...register("imageUrl", {
              required: "Image URL is required",

              pattern: {
                value: /^(https?:\/\/)[^\s]+$/i,
                message: "Please enter a valid URL",
              },
            })}
          />

          {errors.imageUrl && (
            <p className="text-red-500 text-sm mt-1">
              {errors.imageUrl.message}
            </p>
          )}
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-semibold transition"
        >
          {editingUser ? "Update User" : "Add User"}
        </button>
      </form>
    </div>
  );
}

export default Form;