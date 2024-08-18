import React from "react";
import { Link } from "react-router-dom";

import { IoTimeSharp } from "react-icons/io5";

import img1 from "../../assets/blog/1.png";
import img2 from "../../assets/blog/2.png";
import img3 from "../../assets/blog/3.png";

const Blog = () => {
  return (
    <section
      className="blog wrapper mt-4 xs:mt-10
  "
    >
      <div className="blog__info px-2 flex justify-between items-center">
        <p className="text-2xl xs:text-4xl">Our Blog</p>
        <Link>
          <button className="btn px-5 xs:px-8 py-3 h-auto min-h-fit xs:py-4 text-[.82rem] xs:text-xl btn-outline text-[#359740] rounded-full xs:rounded-lg">
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
            <div className="blog-item--info w-full md:w-[53%] p-4 xs:p-8 flex flex-col gap-3">
              <p className="time flex items-center gap-2 text-sm xs:text-[1rem]">
                <IoTimeSharp />
                12.09.2021
              </p>
              <h4 className="text-xl xs:text-2xl m-0 p-0 font-bold ">
                How to plant spinach correctly in winter
              </h4>
              <p className=" text-[#eaf2d7] xs:text-[#3fad59] bg-[#58480819] xs:bg-transparent rounded-md p-2 xs:p-0 backdrop-blur-sm md:backdrop-blur-none drop-shadow-sm md:text-[#70737C] text-sm xs:text-[1rem]">
                In most areas, successive sowing can be done from early spring
                until early winter, but more often during hotter months...
              </p>
              <button className="btn h-auto min-h-fit py-4 w-fit px-5 xs:px-8 text-[#359740] text-[.9rem] xs:text-[1rem] rounded-full xs:rounded-md bg-white hover:text-green-500">
                Read
              </button>
            </div>
          </div>
          <div
            className="blog-item rounded-xl col-span-2 md:col-span-1 flex justify-between bg-[#EFF2F8] h-[18.75rem] bg-no-repeat bg-right-bottom"
            style={{ backgroundImage: `url(${img2})` }}
          >
            <div className="blog-item--info p-4 xs:p-8 flex flex-col gap-3">
              <p className="time flex items-center gap-2 text-sm xs:text-[1rem]">
                <IoTimeSharp />
                12.09.2021
              </p>
              <h4 className="text-xl xs:text-2xl m-0 p-0 font-bold ">
                How to plant spinach correctly in winter
              </h4>
              <p className=" text-[#3fad59] ounded-md p-2 backdrop-blur-sm md:backdrop-blur-none drop-shadow-sm block md:hidden text-sm xs:text-[1rem]">
                In most areas, successive sowing can be done from early spring
                until early winter, but more often during hotter months...
              </p>
              <button className="btn h-auto min-h-fit py-4 w-fit px-5 xs:px-8 text-[#359740] text-[.9rem] xs:text-[1rem] rounded-full xs:rounded-md bg-white hover:text-green-500">
                Read
              </button>
            </div>
          </div>
          <div
            className="blog-item rounded-xl col-span-2 md:col-span-1 flex justify-between bg-[#EFF2F8] h-[18.75rem] bg-no-repeat bg-right-bottom"
            style={{ backgroundImage: `url(${img2})` }}
          >
            <div className="blog-item--info p-4 xs:p-8 flex flex-col gap-3">
              <p className="time flex items-center gap-2 text-sm xs:text-[1rem]">
                <IoTimeSharp />
                12.09.2021
              </p>
              <h4 className="text-xl xs:text-2xl m-0 p-0 font-bold ">
                How to plant spinach correctly in winter
              </h4>
              <p className=" text-[#3fad59] ounded-md p-2 backdrop-blur-sm md:backdrop-blur-none drop-shadow-sm block md:hidden text-sm xs:text-[1rem]">
                In most areas, successive sowing can be done from early spring
                until early winter, but more often during hotter months...
              </p>
              <button className="btn h-auto min-h-fit py-4 w-fit px-5 xs:px-8 text-[#359740] text-[.9rem] xs:text-[1rem] rounded-full xs:rounded-md bg-white hover:text-green-500">
                Read
              </button>
            </div>
          </div>
        </div>
        <div
          className="blog-item rounded-xl flex flex-col bg-[#EFF2F8] bg-no-repeat bg-right-top lg:bg-right-bottom"
          style={{ backgroundImage: `url(${img3})` }}
        >
          <div className="blog-item--info p-4 xs:p-8 flex flex-col gap-3">
            <p className="time flex items-center gap-2 text-sm xs:text-[1rem]">
              <IoTimeSharp />
              12.09.2021
            </p>
            <h4 className="text-xl xs:text-2xl m-0 p-0 font-bold ">
              How to plant spinach correctly in winter
            </h4>
            <p className=" text-[#3fad59] ounded-md p-2 backdrop-blur-sm md:backdrop-blur-none drop-shadow-sm block md:hidden text-sm xs:text-[1rem]">
              In most areas, successive sowing can be done from early spring
              until early winter, but more often during hotter months...
            </p>
            <button className="btn h-auto min-h-fit py-4 w-fit px-5 xs:px-8 text-[#359740] text-[.9rem] xs:text-[1rem] rounded-full xs:rounded-md bg-white hover:text-green-500">
              Read
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
