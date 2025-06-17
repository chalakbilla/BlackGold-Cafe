import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleLoginChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setError("");
    const { email, password } = loginForm;

    if (!email || !password) {
      setError("All fields are required");
      return;
    }
    // Placeholder for login API call
    console.log("Login:", loginForm);
    alert("Login successful! (Placeholder)");
  };

  const handleGoogleLogin = () => {
    console.log("Initiate Google Login");
    alert("Google Login clicked! (Requires backend setup)");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-800">
        <h2 className="text-2xl font-semibold text-white text-center mb-6">Login</h2>

        {error && (
          <p className="text-red-400 text-center mb-4">{error}</p>
        )}

        <form onSubmit={handleLoginSubmit}>
          <div className="mb-4">
            <label className="block text-gray-200 mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={loginForm.email}
              onChange={handleLoginChange}
              className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-200 mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={loginForm.password}
              onChange={handleLoginChange}
              className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white text-black py-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Login
          </button>
        </form>

        <div className="mt-4">
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-gray-800 text-white py-2 rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors flex items-center justify-center"
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

        <p className="text-center text-gray-400 mt-4">
          Don't have an account?{" "}
          <Link to="/Signup" className="text-white hover:underline">
            Signup
          </Link>
        </p>
        <p className="text-center text-gray-400 mt-2">
          Back to{" "}
          <Link to="/" className="text-white hover:underline">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;