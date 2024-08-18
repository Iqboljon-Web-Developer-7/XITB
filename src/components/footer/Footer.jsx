import React from "react";

import social1 from "../../assets/footer/youtube.svg";
import social2 from "../../assets/footer/facebook.svg";
import social3 from "../../assets/footer/instagram.svg";
const Footer = () => {
  return (
    <footer className="footer py-20 mt-4">
      <div className="footer__wrapper wrapper grid sm:grid-cols-2 md:grid-cols-[5fr_3fr_3fr_3fr] md:justify-items-center px-2 gap-10">
        <div className="footer--item">
          <h3 className="text-2xl font-bold">StayHealthy</h3>
          <p className="leading-relaxed font-light mt-2 text-[.92rem]">
            Online Training, and Consultation About Diet and Exercise tailored
            based on user needs.
          </p>
          <div className="socials flex gap-4 mt-4">
            <img
              className="max-w-9 p-[.5rem] bg-[#F3F3F3] hover:bg-white duration-200 cursor-pointer rounded-full overflow-visible"
              src={social1}
              alt=""
            />
            <img
              className="max-w-9 p-[.5rem] bg-[#F3F3F3] hover:bg-white duration-200 cursor-pointer rounded-full overflow-visible"
              src={social2}
              alt=""
            />
            <img
              className="max-w-9 p-[.5rem] bg-[#F3F3F3] hover:bg-white duration-200 cursor-pointer rounded-full overflow-visible"
              src={social3}
              alt=""
            />
          </div>
        </div>
        <div className="footer--item">
          <h4 className="text-xl mb-4">Product</h4>
          <p className="leading-7 cursor-pointer hover:underline underline-offset-2 font-light">
            Gym Equipment
          </p>
          <p className="leading-7 cursor-pointer hover:underline underline-offset-2 font-light">
            Suplement
          </p>
          <p className="leading-7 cursor-pointer hover:underline underline-offset-2 font-light">
            Blog
          </p>
        </div>
        <div className="footer--item">
          <h4 className="text-xl mb-4">Explore Us</h4>
          <p className="leading-7 cursor-pointer hover:underline underline-offset-2 font-light">
            FAQ
          </p>
          <p className="leading-7 cursor-pointer hover:underline underline-offset-2 font-light">
            Privacy Policy
          </p>
          <p className="leading-7 cursor-pointer hover:underline underline-offset-2 font-light">
            Term and Conditions
          </p>
        </div>
        <div className="footer--item">
          <h4 className="text-xl mb-4">Contact</h4>
          <p className="leading-7 cursor-pointer hover:underline underline-offset-2 font-light">
            hi@stayhealthy.com
          </p>
          <p className="leading-7 cursor-pointer hover:underline underline-offset-2 font-light">
            021-123-636
          </p>
          <p className="leading-7 cursor-pointer hover:underline underline-offset-2 font-light">
            stayhealthy.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
