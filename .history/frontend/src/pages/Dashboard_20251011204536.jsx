import React from "react";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Welcome, {user?.username}</h1>
      <p>Email: {user?.email}</p>

      <button
        className="bg-red-600 text-white px-4 py-2 rounded mt-4"
        onClick={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          window.location.href = "/login"; // Logout & redirect
        }}
      >
        Logout
      </button>
    </div>
  );
}
