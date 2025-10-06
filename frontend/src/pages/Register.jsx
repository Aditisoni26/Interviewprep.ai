import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";


export default function Register() {
  
const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
     navigate("/login");
    alert(data.message || "Registration failed");
  };


  return (
    <div>
      <div className="login">
        <h1 className='text-3xl font-medium'>Registration!</h1>
        <form className="space-y-6 w-1/2" onSubmit={handleSubmit} >
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
          {/* username */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              User name
            </label>
            <input
              type="username"
              placeholder="Enter your user name"
              value={form.username}
  onChange={(e) => setForm({ ...form, username: e.target.value })}
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
          

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Register
          </button>
          
        </form>
         <div className="text-center w-1/2">
            <a href="/login" className="text-blue-600 hover:underline text-sm">
              Already Registered?login <br /><br /><br /><br />
            </a>
          </div>
      </div>
    </div>
  )
}
