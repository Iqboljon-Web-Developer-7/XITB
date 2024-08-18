import React from "react";
import { Link } from "react-router-dom";

import { IoTimeSharp } from "react-icons/io5";

import img1 from "../../assets/blog/1.png";
import img2 from "../../assets/blog/2.png";
import img3 from "../../assets/blog/3.png";

const Blog = () => {
  return (
    <section
      className="blog wrapper mt-10
  "
    >
      <div className="blog__info px-2 flex justify-between items-center">
        <p className="text-4xl">Our Blog</p>
        <Link>
          <button className="btn btn-outline text-[#359740] rounded-lg">
            Go to our blog
          </button>
        </Link>
      </div>
      <div className="blog__container mt-8 grid lg:grid-cols-[7.22fr_3fr] gap-4">
        <div className="blog-main grid grid-cols-2 gap-4">
          <div
            className="blog-item rounded-xl flex flex-col col-span-2 bg-[#EAF1EB] bg-no-repeat bg-right-bottom"
            style={{ backgroundImage: `url(${img1})` }}
          >
            <div className="blog-item--info w-5/6 lg:w-[53%] p-8 flex flex-col gap-3">
              <p className="time flex items-center gap-2">
                <IoTimeSharp />
                12.09.2021
              </p>
              <h4 className="text-2xl m-0 p-0 font-bold">
                How to plant spinach correctly in winter
              </h4>
              <p className=" text-[#80ed99] bg-slate-[#ffffff22] backdrop-blur-sm md:backdrop-blur-none drop-shadow-sm md:text-[#70737C] text-[1rem]">
                In most areas, successive sowing can be done from early spring
                until early winter, but more often during hotter months...
              </p>
              <button className="btn w-fit px-8 text-[#359740] text-[1rem] rounded-md bg-white hover:text-green-500">
                Read
              </button>
            </div>
          </div>
          <div
            className="blog-item rounded-xl col-span-2 md:col-span-1 flex justify-between bg-[#EFF2F8] h-[18.75rem] bg-no-repeat bg-right-bottom"
            style={{ backgroundImage: `url(${img2})` }}
          >
            <div className="blog-item--info p-8 flex flex-col gap-3">
              <p className="time flex items-center gap-2">
                <IoTimeSharp />
                12.09.2021
              </p>
              <h4 className="text-2xl m-0 p-0 font-bold">
                How to plant spinach correctly in winter
              </h4>
              <p className="text-[#70737C] text-[1rem] block md:hidden">
                In most areas, successive sowing can be done from early spring
                until early winter, but more often during hotter months...
              </p>
              <button className="btn w-fit px-8 text-[#359740] text-[1rem] rounded-md bg-white hover:text-green-500">
                Read
              </button>
            </div>
          </div>
          <div
            className="blog-item rounded-xl col-span-2 md:col-span-1 flex justify-between bg-[#EFF2F8] h-[18.75rem] bg-no-repeat bg-right-bottom"
            style={{ backgroundImage: `url(${img2})` }}
          >
            <div className="blog-item--info p-8 flex flex-col gap-3">
              <p className="time flex items-center gap-2">
                <IoTimeSharp />
                12.09.2021
              </p>
              <h4 className="text-2xl m-0 p-0 font-bold">
                How to plant spinach correctly in winter
              </h4>
              <p className="text-[#70737C] text-[1rem] block md:hidden">
                In most areas, successive sowing can be done from early spring
                until early winter, but more often during hotter months...
              </p>
              <button className="btn w-fit px-8 text-[#359740] text-[1rem] rounded-md bg-white hover:text-green-500">
                Read
              </button>
            </div>
          </div>
        </div>
        <div
          className="blog-item rounded-xl flex flex-col bg-[#EFF2F8] bg-no-repeat bg-right-top lg:bg-right-bottom"
          style={{ backgroundImage: `url(${img3})` }}
        >
          <div className="blog-item--info p-8 flex flex-col gap-3">
            <p className="time flex items-center gap-2">
              <IoTimeSharp />
              12.09.2021
            </p>
            <h4 className="text-2xl m-0 p-0 font-bold">
              How to plant spinach correctly in winter
            </h4>
            <p className=" text-[#80ed99] bg-slate-[#ffffff22] backdrop-blur-sm md:backdrop-blur-none drop-shadow-sm md:text-[#70737C] text-[1rem]">
              In most areas, successive sowing can be done from early spring
              until early winter, but more often during hotter months...
            </p>
            <button className="btn w-fit px-8 text-[#359740] text-[1rem] rounded-md bg-white hover:text-green-500">
              Read
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
