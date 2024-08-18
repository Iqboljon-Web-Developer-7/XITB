import React from "react";

import "./services.scss";

import img1 from "../../assets/services/1.svg";
import img2 from "../../assets/services/2.svg";
import img3 from "../../assets/services/3.svg";
import img4 from "../../assets/services/4.svg";

const Services = () => {
  return (
    <section className="services wrapper mt-[12rem] xs:mt-[16rem] text-center pb-20">
      <div className="services__info">
        <p className="font-schoolBell text-[#265A6A] text-2xl">Services</p>
        <h2 className="mt-[1.4rem] text-[#08546C] text-2xl xs:text-3xl md:text-[2.8125rem] max-w-[30rem] mx-auto leading-[1.1]">
          Building Digital Product With Better Experience
        </h2>
      </div>
      <div className="services__container mt-[3rem] xs:mt-[4.375rem] p-2 grid xs:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
        <div className="service cursor-pointer bg-white group py-8 px-6 hover:bg-[#08546C] duration-200 shadow-transparent">
          <div className="bg-[#F5FBFC] max-w-8 max-h-8 rounded-full mb-4 p-[.34rem] overflow-visible group-hover:bg-[#FFA800]">
            <img
              src={img1}
              alt="img of icon"
              className="group-hover:brightness-[1000%]"
            />
          </div>
          <div className="service--info">
            <p className="text-xl group-hover:text-slate-100 mb-2">
              UI/UX Design
            </p>
            <p className="text-sm group-hover:text-slate-100">
              I’ve created a user interface and user experience with some
              proccess and method.
            </p>
          </div>
        </div>
        <div className="service cursor-pointer bg-white group py-8 px-6 hover:bg-[#08546C] duration-200">
          <div className="bg-[#F5FBFC] max-w-8 max-h-8 rounded-full mb-4 p-[.34rem] overflow-visible group-hover:bg-[#FFA800]">
            <img
              src={img2}
              alt="img of icon"
              className="group-hover:brightness-[1000%]"
            />
          </div>
          <div className="service--info">
            <p className="text-xl group-hover:text-slate-100 mb-2">
              Web Development
            </p>
            <p className="text-sm group-hover:text-slate-100">
              I’ve created a user interface and user experience with some
              proccess and method.
            </p>
          </div>
        </div>
        <div className="service cursor-pointer bg-white group py-8 px-6 hover:bg-[#08546C] duration-200">
          <div className="bg-[#F5FBFC] flex justify-center items-center max-w-8 h-8 rounded-full mb-4 p-[.34rem] overflow-visible group-hover:bg-[#FFA800]">
            <img
              src={img3}
              alt="img of icon"
              className="group-hover:brightness-[1000%]"
            />
          </div>
          <div className="service--info">
            <p className="text-xl group-hover:text-slate-100 mb-2">
              Visual Branding
            </p>
            <p className="text-sm group-hover:text-slate-100">
              I’ve created a user interface and user experience with some
              proccess and method.
            </p>
          </div>
        </div>
        <div className="service cursor-pointer bg-white group py-8 px-6 hover:bg-[#08546C] duration-200">
          <div className="bg-[#F5FBFC] max-w-8 max-h-8 rounded-full mb-4 p-[.34rem] overflow-visible group-hover:bg-[#FFA800]">
            <img
              src={img4}
              alt="img of icon"
              className="group-hover:brightness-[1000%]"
            />
          </div>
          <div className="service--info">
            <p className="text-xl group-hover:text-slate-100 mb-2">
              App Development
            </p>
            <p className="text-sm group-hover:text-slate-100">
              I’ve created a user interface and user experience with some
              proccess and method.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
