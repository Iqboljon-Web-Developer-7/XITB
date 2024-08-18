import React from "react";
import { Link, Outlet } from "react-router-dom";

const Partner = ({ partnersData }) => {
  return (
    <div className="bg-[#edf6f9] py-10">
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4 cursor-help">
          Welcome to{" "}
          <abbr
            className="cursor-help"
            title="Xalqaro Investorlarni Tadbirkorlar bilan Bog'lash"
          >
            XITB
          </abbr>
        </h1>
        <h2 className="text-xl font-semibold text-center text-gray-700 mb-8">
          Empowering Partnerships & Investment Opportunities
        </h2>

        <section className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Why Partner with Us?</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Proven Success:</strong> Our track record speaks for
              itself, with a portfolio of successful ventures and satisfied
              partners.
            </li>
            <li>
              <strong>Innovative Solutions:</strong> We’re at the forefront of
              industry innovation, offering cutting-edge solutions that drive
              growth.
            </li>
            <li>
              <strong>Global Network:</strong> Join a global network of
              like-minded professionals, investors, and entrepreneurs.
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">
            Investor Opportunities
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Exclusive Insights:</strong> Gain access to in-depth
              market analyses, financial reports, and exclusive investment
              opportunities.
            </li>
            <li>
              <strong>Long-term Growth:</strong> We prioritize sustainable
              growth, ensuring your investments yield strong returns.
            </li>
            <li>
              <strong>Transparent Communication:</strong> Stay informed with
              regular updates and clear communication at every step of the
              process.
            </li>
          </ul>
        </section>
        <section className="mt-20">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold mb-4">
              Your Investment Details
            </h2>
            <Link to="/admin/partner/partnerPage">
              <button className="py-2 px-5 bg-lime-500 rounded-full text-sm shadow-md cursor-pointer hover:shadow-none duration-200 active:opacity-85">
                <span className="Invest">Be Partner</span>
              </button>
            </Link>
          </div>
          {partnersData?.map((partner) => (
            <div
              key={partner.id}
              className="bg-gray-100 p-4 mb-4 rounded shadow-sm"
            >
              <h3 className="text-xl font-bold">{partner.name}</h3>
              <p>
                <strong>Industry:</strong> {partner.industry}
              </p>
              <p>
                <strong>Partnership Date:</strong> {partner.partnershipDate}
              </p>
              <p>
                <strong>Investment:</strong> {partner.investment}
              </p>
              <p>
                <strong>Projects:</strong> {partner.projects.join(", ")}
              </p>
            </div>
          ))}
        </section>
      </div>
      <Outlet />
    </div>
  );
};

export default Partner;
