import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    gender: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSignupChange = (e) => {
    setSignupForm({ ...signupForm, [e.target.name]: e.target.value });
  };

  const handleLoginChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    setError("");
    const { name, email, gender, phone, password, confirmPassword } = signupForm;

    if (!name || !email || !gender || !phone || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      setError("Phone number must be 10 digits");
      return;
    }
    console.log("Signup:", signupForm);
    alert("Signup successful! (Placeholder)");
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setError("");
    const { email, password } = loginForm;

    if (!email || !password) {
      setError("All fields are required");
      return;
    }
    console.log("Login:", loginForm);
    alert("Login successful! (Placeholder)");
  };

  const handleGoogleLogin = () => {
    console.log("Initiate Google Login");
    alert("Google Login clicked! (Requires backend setup)");
  };

  const handleTabChange = (tab) => {
    console.log("Switching to tab:", tab);
    setActiveTab(tab);
  };

  return (
    <div className="flex items-center justify-center bg-black/80 ">
      <div className="bg-transparent p-8 rounded-xl w-full max-w-md">
        <div className="flex justify-center mb-6 gap-4">
          <button
            onClick={() => handleTabChange("login")}
            aria-selected={activeTab === "login"}
            className={`px-4 py-2 text-lg font-bold ${
              activeTab === "login"
                ? "text-white border-b-2 border-white"
                : "text-gray-400 hover:text-white"
            } transition-all duration-300`}
          >
            Login
          </button>
          <button
            onClick={() => handleTabChange("signup")}
            aria-selected={activeTab === "signup"}
            className={`px-4 py-2 text-lg font-bold ${
              activeTab === "signup"
                ? "text-white border-b-2 border-white"
                : "text-gray-400 hover:text-white"
            } transition-all duration-300`}
          >
            Signup
          </button>
        </div>

        {error && (
          <p className="text-red-300 text-center mb-4">{error}</p>
        )}

        {activeTab === "signup" ? (
          <form onSubmit={handleSignupSubmit}>
            <div className="mb-4">
              <label className="block text-white mb-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={signupForm.name}
                onChange={handleSignupChange}
                className="w-full px-3 py-2 bg-black/50 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm placeholder-gray-400 transition-all duration-300"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={signupForm.email}
                onChange={handleSignupChange}
                className="w-full px-3 py-2 bg-black/50 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm placeholder-gray-400 transition-all duration-300"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-1" htmlFor="gender">
                Gender
              </label>
              <select
                name="gender"
                value={signupForm.gender}
                onChange={handleSignupChange}
                className="w-full px-3 py-2 bg-black/50 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm transition-all duration-300"
              >
                <option value="" className="text-gray-400">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-white mb-1" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                value={signupForm.phone}
                onChange={handleSignupChange}
                className="w-full px-3 py-2 bg-black/50 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm placeholder-gray-400 transition-all duration-300"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-1" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={signupForm.password}
                onChange={handleSignupChange}
                className="w-full px-3 py-2 bg-black/50 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm placeholder-gray-400 transition-all duration-300"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-1" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={signupForm.confirmPassword}
                onChange={handleSignupChange}
                className="w-full px-3 py-2 bg-black/50 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm placeholder-gray-400 transition-all duration-300"
                placeholder="Confirm your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black/70 text-white py-2 rounded-lg border border-gray-600 hover:bg-black/90 transition-all duration-300"
            >
              Signup
            </button>
          </form>
        ) : (
          <form onSubmit={handleLoginSubmit}>
            <div className="mb-4">
              <label className="block text-white mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={loginForm.email}
                onChange={handleLoginChange}
                className="w-full px-3 py-2 bg-black/50 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm placeholder-gray-400 transition-all duration-300"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-1" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={loginForm.password}
                onChange={handleLoginChange}
                className="w-full px-3 py-2 bg-black/50 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm placeholder-gray-400 transition-all duration-300"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black/70 text-white py-2 rounded-lg border border-gray-600 hover:bg-black/90 transition-all duration-300"
            >
              Login
            </button>
          </form>
        )}

        <div className="mt-4">
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-black/70 text-white py-2 rounded-lg border border-gray-600 hover:bg-black/90 transition-all duration-300 flex items-center justify-center"
          >
            <svg
              className="w-5 h-5 mr-2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.24 10.667H7.937v2.666h4.303c-.411 1.378-1.599 2.356-3.021 2.356-1.821 0-3.303-1.489-3.303-3.333s1.482-3.333 3.303-3.333c.822 0 1.578.302 2.163.8l1.911-1.911C11.697 6.378 9.936 5.333 7.937 5.333c-3.293 0-5.97 2.689-5.97 6s2.677 6 5.97 6c3.104 0 5.667-2.356 5.937-5.333h-1.633v-1.333z"
                fill="#4285F4"
              />
              <path
                d="M21.333 10.667h-1.333V12h-1.333v1.333h1.333v1.333h1.333V13.333h1.333V12h-1.333v-1.333z"
                fill="#34A853"
              />
              <path
                d="M17.937 7.333l-1.911 1.911c.585.498 1.341.8 2.163.8 1.821 0 3.303-1.489 3.303-3.333h-1.333c-.411 1.378-1.599 2.356-3.021 2.356-.822 0-1.578-.302-2.163-.8z"
                fill="#FBBC05"
              />
              <path
                d="M7.937 18c1.999 0 3.759-1.044 4.697-2.622l-1.911-1.911c-.585.498-1.341.8-2.163.8-1.422 0-2.611-.978-3.021-2.356H3.937v2.666h4z"
                fill="#EA4335"
              />
            </svg>
            Sign in with Google
          </button>
        </div>

        <p className="text-center text-gray-300 mt-4">
          Back to <Link to="/" className="text-white hover:text-gray-300 transition-all duration-300">Home</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;