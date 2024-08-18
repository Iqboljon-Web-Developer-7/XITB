import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const User = ({ type, setType }) => {
  const [isShow, setIsShow] = useState(false);

  const navigate = useNavigate();
  return (
    <div className="relative">
      <img
        src="https://picsum.photos/42"
        alt="user random img"
        className="rounded-full cursor-pointer"
        onClick={() => setIsShow((prev) => !prev)}
      />
      <div
        className={`menu absolute w-[8rem] top-[140%] right-2 z-10 p-2 bg-slate-700 rounded-xl shadow-lg ${
          isShow ? `opacity-1` : `opacity-0 hidden`
        } duration-150`}
      >
        <button
          onClick={() => {
            localStorage.clear();
            setType("");
            navigate("/");
          }}
          className="bg-red-400 hover:bg-red-500 active:bg-red-600 duration-150 py-3 rounded-md shadow-md"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default User;
