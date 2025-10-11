import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";

export default function Login() {

   
const navigate = useNavigate();
  const [form, setForm] = useState({email: "", password: "" });

const handleSubmit = async (e) => {
  e.preventDefault();

  const res = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

  const data = await res.json();

  if (res.ok) {
    // Store token & user info in localStorage
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    alert("Login successful!");
    n
  } else {
    alert(data.message || "Login failed");
  }
};


  return (
    <div>
      <div className="login">
        <h1 className='text-3xl font-medium'>Welcome Back!</h1>
        <form className="space-y-6 w-1/2" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={form.email}
  onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={form.password}
  onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Forgot password */}
          <div className="text-center">
            <a href="#" className="text-blue-600 hover:underline text-sm " onClick={()=> alert("please register Again!")}>
              Forgot password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
          
        </form>
         <div className="text-center w-1/2">
            <a href="/registration" className="text-blue-600 hover:underline text-sm">
              New user? Register <br /><br /><br /><br />
            </a>
          </div>
      </div>
    </div>
  )
}
