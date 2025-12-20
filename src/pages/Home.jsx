import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center gap-12 bg-yellow-50">

      <div
        onClick={() => navigate("/products")}
        className="
          w-44 h-44
          rounded-full
          bg-blue-500
          hover:bg-blue-600
          text-white
          text-2xl
          font-bold
          flex items-center justify-center
          cursor-pointer
          shadow-xl
          transition-transform
          hover:scale-110
        "
      >
        Product
      </div>

      <div
        onClick={() => navigate("/todo")}
        className="
          w-44 h-44
          rounded-full
          bg-green-500
          hover:bg-green-600
          text-white
          text-2xl
          font-bold
          flex items-center justify-center
          cursor-pointer
          shadow-xl
          transition-transform
          hover:scale-110
        "
      >
        ToDo
      </div>

      <div
        onClick={() => navigate("/profile")}
        className="
          w-44 h-44
          rounded-full
          bg-purple-500
          hover:bg-purple-600
          text-white
          text-2xl
          font-bold
          flex items-center justify-center
          cursor-pointer
          shadow-xl
          transition-transform
          hover:scale-110
        "
      >
        Profile
      </div>

    </div>
  );
}
