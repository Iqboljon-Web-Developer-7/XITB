import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const Protect = () => {
  const [userData, setUserData] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData")) || "");
  }, []);

  useEffect(() => {
    if (userData) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [userData]);

  return (
    <section>
      {isLoggedIn ? (
        <Outlet />
      ) : (
        <h1 className="text-center mt-10 text-3xl text-red-500">
          Please Register
        </h1>
      )}
    </section>
  );
};

export default Protect;
