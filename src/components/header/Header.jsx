import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import { RiMenu5Line } from "react-icons/ri";

import "./Header.scss";

import logo from "../../assets/Header-Hero/logo.svg";
import User from "../user/User";

const Header = ({ type, setType }) => {
  const [isFixed, setIsFixed] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 90) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    });
    setType(JSON.parse(localStorage.getItem("userData"))?.type || "");
  }, []);
  useEffect(() => {
    setType(JSON.parse(localStorage.getItem("userData"))?.type || "");
  }, [type]);
  return (
    <header className={`bg-[#0A3E51] ${isFixed && "mt-[5.5rem]"}`}>
      <div
        className={`header-wrapper max-w-[100rem] mx-auto pb-4 px-2 flex justify-between items-center ${
          isFixed
            ? "fixed pt-4 animate-fade-in bg-[#0A3E51bb]"
            : "relative pt-6 animate-fade-out z-20"
        } inset-[0_0_auto_0] backdrop-blur-sm z-20`}
      >
        <div className="header__logo">
          <NavLink to="/">
            <img
              src={logo}
              alt="website logo"
              className="max-w-10 animate-fade-in-top-1"
            />
          </NavLink>
        </div>
        <nav className="header__nav text-[#A1B5BB] hover:text-slate-200 duration-300 text-[1rem] hidden gap-5 lg:flex">
          <NavLink
            className="hover:underline underline-offset-4 animate-fade-in-top-3"
            to={`/admin/${type}`}
          >
            Personal
          </NavLink>
          <NavLink
            className="hover:underline underline-offset-4 animate-fade-in-top-4"
            to="/register"
          >
            Register
          </NavLink>
        </nav>
        <div className="header__btns z-20 relative text-[1rem] text-slate-100 flex items-center justify-center gap-4">
          <button className=" bg-[#125E76] py-3 px-7 rounded-full hover:contrast-125 hover:shadow-md duration-150 animate-fade-in-top-5">
            Contact
          </button>
          <RiMenu5Line
            className="block lg:hidden text-4xl cursor-pointer animate-fade-in-top-6"
            onClick={() => setOpen((prev) => !prev)}
          />
          {type && <User type={type} setType={setType} />}
        </div>
      </div>

      <div
        className={`header__mobile z-50 ${
          open ? "inset-[0_0_0_auto]" : "inset-[0%_-100%_0_auto]"
        } fixed duration-300 text-slate-100 bg-[#0A3E51] shadow-lg flex justify-center items-center`}
      >
        <span
          className="absolute inset-[4%_6%_auto_auto] cursor-pointer"
          onClick={() => setOpen(false)}
        >
          X
        </span>
        <div className="links text-[#A1B5BB] px-20 gap-2 flex flex-col">
          <NavLink
            className="hover:underline underline-offset-4 animate-fade-in-top-3"
            to={`/admin/${type}`}
          >
            Personal
          </NavLink>
          <NavLink
            className="hover:underline underline-offset-4 animate-fade-in-top-4"
            to="/register"
          >
            Register
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
