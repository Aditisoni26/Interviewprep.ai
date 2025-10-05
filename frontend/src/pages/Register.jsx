import React from 'react'

export default function Register() {
  return (
    <div>
      <div className="login">
        <h1 className='text-3xl font-medium'>Registration!</h1>
        <form className="space-y-6 w-1/2">
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
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
            <a href="/login" className="text-blue-600 hover:underline text-sm">
              Already Registered?login <br /><br /><br /><br />
            </a>
          </div>
      </div>
    </div>
  )
}
