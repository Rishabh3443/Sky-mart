import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { logout, login } from "../Features/Auth";
import { toast } from "react-toastify";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const { currentUser } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (currentUser) {
      reset({
        mobile: currentUser.mobile || "",
        address: currentUser.address || "",
      });
    }
  }, [currentUser, reset]);

  const saveProfile = (data) => {
    const updatedUser = {
      ...currentUser,
      mobile: data.mobile,
      address: data.address,
    };

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const updatedUsers = users.map((user) =>
      user.email === currentUser.email
        ? updatedUser
        : user
    );

    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    );

    localStorage.setItem(
      "currentUser",
      JSON.stringify(updatedUser)
    );

    dispatch(login(updatedUser));

    toast.success("Profile Updated Successfully")
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
  <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-10">

  <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col md:flex-row">

    <div className="w-full md:w-1/3 lg:w-1/4 bg-gray-50 border-r border-gray-200 p-6 md:p-8 flex flex-col items-center md:items-start">

      <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=250&auto=format&fit=crop"
          alt="User Avatar"
          className="w-full h-full object-cover"
        />
      </div>

      <h2 className="text-2xl font-black text-gray-900 tracking-wide uppercase">
        {currentUser?.name}
      </h2>

      <p className="text-sm text-gray-500 mb-8">
        {currentUser?.email}
      </p>

      <div className="w-full flex flex-col gap-2">
        <button className="w-full text-left px-4 py-3 rounded-lg bg-black text-white font-semibold transition-colors cursor-pointer">
          <i className="ri-user-line mr-2"></i>
          Personal Info
        </button>

        <button
          onClick={handleLogout}
          className="w-full text-left px-4 py-3 rounded-lg text-red-500 hover:bg-red-50 font-medium transition-colors mt-8 cursor-pointer border border-transparent hover:border-red-100"
        >
          <i className="ri-logout-box-line mr-2"></i>
          Logout
        </button>
      </div>
    </div>

    <div className="w-full md:w-2/3 lg:w-3/4 p-6 md:p-10">

      <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
        <h1 className="text-3xl font-black uppercase tracking-wide text-gray-900">
          My Profile
        </h1>
      </div>

      <form
        onSubmit={handleSubmit(saveProfile)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >

        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">
            Name
          </label>

          <input
            type="text"
            value={currentUser?.name || ""}
            readOnly
            className="w-full p-3 border border-gray-300 rounded bg-gray-50 text-gray-700 outline-none focus:border-black transition-colors"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">
            Email Address
          </label>

          <input
            type="email"
            value={currentUser?.email || ""}
            readOnly
            className="w-full p-3 border border-gray-300 rounded bg-gray-50 text-gray-700 outline-none focus:border-black transition-colors"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">
            Phone Number
          </label>

          <input
            type="text"
            placeholder="Enter Phone Number"
            {...register("mobile")}
            className="w-full p-3 border border-gray-300 rounded outline-none focus:border-black transition-colors"
          />
        </div>

        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">
            Shipping Address
          </label>

          <textarea
            placeholder="Enter Address"
            {...register("address")}
            className="w-full p-3 border border-gray-300 rounded outline-none focus:border-black transition-colors resize-none h-28"
          ></textarea>
        </div>

        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition cursor-pointer"
          >
            Save Changes
          </button>
        </div>

      </form>

    </div>

  </div>

</div>
  );
};

export default Profile;