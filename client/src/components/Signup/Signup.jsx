import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";
import styles from "../../styles/styles";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [visible, setVisible] = useState(false);
  const handleSubmit = () => {
    console.log("Hello");
  };
  const handleFileInpitChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-lg">
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
          Register as a new user
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="bg-white flex flex-col gap-2  px-4  sm:rounded-lg sm:px-10">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="fullName"
                name="fullName"
                id="fullName"
                autoComplete="fullName"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full rounded p-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500 border border-gray-200"
              />
            </div>
            <div className="bg-white flex flex-col gap-2  px-4  sm:rounded-lg sm:px-10">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded p-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500 border border-gray-200"
              />
            </div>
            <div className="bg-white flex flex-col gap-2 px-4  sm:rounded-lg sm:px-10">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={visible ? "text" : "password"}
                  name="password"
                  id="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded p-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500 border border-gray-200"
                />
                {visible ? (
                  <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>
            <div className={`${styles.noramlFlex} justify-between w-full`}>
              <div className="flex w-full justify-between">
                <div className="flex justify-center">
                  <input
                    type="checkbox"
                    name="remember-me"
                    id="remember-me"
                    className="w-5 h-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />

                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="avatar"
                className="block text-sm font-medium text-gray-700"
              ></label>
              <div className="mt-2 flex items-center">
                <span
                  className="inline-block h-8 w-8
                    rounded-full overflow-hidden"
                >
                  {avatar ? (
                    <img
                      src={URL.createObjectURL(avatar)}
                      alt="avatar"
                      className="h-full w-full object-cover rounded-full"
                    />
                  ) : (
                    <RxAvatar className="h-8 w-8" />
                  )}
                </span>
                <label
                  htmlFor="file-input"
                  className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium bg-white text-gray-700"
                >
                  <span>Upload a file</span>
                  <input
                    type="file"
                    id="file-input"
                    name="avatar"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleFileInpitChange}
                    className="sr-only"
                  />
                </label>
              </div>
            </div>
            <div className="">
              <button
                type="submit"
                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white "
              >
                Submit
              </button>
            </div>
            <div className={`${styles.noramlFlex} w-full`}>
              <h4> Already have an account?</h4>
              <Link
                to="/login"
                className="text-blue-600 hover:text-pink-500 transition duration-200 pl-2"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
