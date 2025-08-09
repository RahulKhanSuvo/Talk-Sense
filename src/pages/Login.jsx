import logo from "../assets/logo-dark.png";
import { MdMailOutline } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { useState } from "react";
function Login() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Username:", username);
    console.log("Password:", password);
  };
  return (
    <div className="h-screen text-black bg-[#F7F7FF] flex flex-col items-center justify-center">
      <img className="w-32 mb-12 object-cover" src={logo} alt="logo" />
      <h1 className="font-semibold text-2xl">Sign up</h1>
      <h3 className="mt-2 mb-5 text-sm text-[#7A7F9A]">
        Get your Chatvia account now
      </h3>
      <div className="bg-white max-w-[456px]  w-full p-10 rounded-md">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <div className="flex border rounded-[3px] border-[#E6EBF5] items-center bg-[#F8F9FA]">
              <div className="text-lg py-3.5 border-r px-4 border-[#E6EBF5]">
                <MdMailOutline />
              </div>
              <input
                className="outline-none w-full px-3 "
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>
          </div>
          {/* username */}
          <div className="flex flex-col gap-2">
            <label htmlFor="username">Username</label>
            <div className="flex border rounded-[3px] border-[#E6EBF5] items-center bg-[#F8F9FA]">
              <div className="text-lg py-3.5 border-r px-4 border-[#E6EBF5]">
                <CiUser />
              </div>
              <input
                className="outline-none w-full px-3 "
                type="text"
                name="username"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
              />
            </div>
          </div>
          {/* password */}
          <div className="flex flex-col gap-2">
            <label htmlFor="username">Password</label>
            <div className="flex border rounded-[3px] border-[#E6EBF5] items-center bg-[#F8F9FA]">
              <div className="text-lg py-3.5 border-r px-4 border-[#E6EBF5]">
                <CiLock />
              </div>
              <input
                className="outline-none w-full px-3 "
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <button className="bg-primary w-full py-2.5 text-white rounded-sm">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
