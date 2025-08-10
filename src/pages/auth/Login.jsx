import logo from "../assets/logo-dark.png";
import { MdMailOutline } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
function Login() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({});

  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let newError = {};

    if (!formData.email) {
      newError.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newError.email = "Email is invalid";
    }

    if (!formData.username) {
      newError.username = "Username is required";
    } else if (formData.username.length < 3) {
      newError.username = "Username must be at least 3 characters long";
    }

    if (!formData.password) {
      newError.password = "Password is required";
    } else if (formData.password.length < 6) {
      newError.password = "Password must be at least 6 characters long";
    }

    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("form submitted", formData);
      setFormData({ email: "", username: "", password: "" });
      setError({});
    }
  };

  return (
    <div className="h-screen text-black bg-[#F7F7FF] flex flex-col items-center justify-center">
      <img className="w-32 mb-6 object-cover" src={logo} alt="logo" />
      <h1 className="font-semibold text-2xl">Sign up</h1>
      <h3 className="mt-2 mb-5 text-sm text-[#7A7F9A]">
        Get your Chatvia account now
      </h3>
      <div className="bg-white max-w-[456px] w-full p-10 rounded-md">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <div
              className={
                `flex border rounded-[3px] border-[#E6EBF5] items-center bg-[#F8F9FA]` +
                (error.email ? " border-red-500" : "")
              }
            >
              <div className="text-lg py-3.5 border-r px-4 border-[#E6EBF5]">
                <MdMailOutline />
              </div>
              <input
                className="outline-none w-full px-3"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handelChange}
                placeholder="Enter your email"
              />
            </div>
            {error.email && (
              <p className="text-red-500 text-sm mt-1">{error.email}</p>
            )}
          </div>

          {/* username */}
          <div className="flex flex-col gap-2">
            <label htmlFor="username">Username</label>
            <div
              className={
                `flex border rounded-[3px] border-[#E6EBF5] items-center bg-[#F8F9FA]` +
                (error.username ? " border-red-500" : "")
              }
            >
              <div className="text-lg py-3.5 border-r px-4 border-[#E6EBF5]">
                <CiUser />
              </div>
              <input
                className="outline-none w-full px-3"
                type="text"
                name="username"
                id="username"
                value={formData.username}
                onChange={handelChange}
                placeholder="Enter your username"
              />
            </div>
            {error.username && (
              <p className="text-red-500 text-sm mt-1">{error.username}</p>
            )}
          </div>

          {/* password */}
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <div
              className={
                `flex border rounded-[3px] border-[#E6EBF5] items-center bg-[#F8F9FA]` +
                (error.password ? " border-red-500" : "")
              }
            >
              <div className="text-lg py-3.5 border-r px-4 border-[#E6EBF5]">
                <CiLock />
              </div>
              <div className="relative w-full">
                <input
                  className="outline-none w-full px-3"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handelChange}
                  placeholder="Enter your password"
                />
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-lg"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                </button>
              </div>
            </div>
            {error.password && (
              <p className="text-red-500 text-sm mt-1">{error.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-primary w-full py-2.5 text-white rounded-sm"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
