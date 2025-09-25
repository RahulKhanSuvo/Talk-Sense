import toast from "react-hot-toast";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const SocialLinks = () => {
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const handelGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Google sign-in successful!");
        navigate("/", { replace: true });
      })
      .catch((error) => {
        console.error("Error with Google sign-in:", error);
        toast.error(error.message);
      });
  };
  return (
    <div>
      <div>
        <p className="text-sm text-center mt-5 text-[#7A7F9A]">
          or sign up with
        </p>
      </div>
      <div className="flex items-center justify-center gap-5 mt-4 text-2xl">
        <button
          onClick={handelGoogleSignIn}
          className="text-3xl cursor-pointer"
        >
          <FcGoogle />
        </button>
        <button className="text-3xl text-blue-600 cursor-pointer">
          <FaFacebook />
        </button>
      </div>
    </div>
  );
};

export default SocialLinks;
