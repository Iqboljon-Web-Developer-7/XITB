import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Inverstor = ({ type, investorsData }) => {
  return (
    <div className={`p-6 mx-auto bg-[#edf6f9] py-10`}>
      <div className={`max-w-4xl mx-auto ${!type && "hidden"}`}>
        <h1 className="text-3xl font-bold text-center mb-4">
          Welcome to{" "}
          <abbr
            className="cursor-help"
            title="Xalqaro Investorlarni Tadbirkorlar bilan Bog'lash "
          >
            XITB
          </abbr>
        </h1>
        <h2 className="text-xl font-semibold text-center text-gray-700 mb-8">
          Invest in the Future with Us
        </h2>

        <section className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Why Invest with Us?</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Proven Track Record:</strong> Our investment portfolio
              demonstrates consistent returns and long-term growth.
            </li>
            <li>
              <strong>Market Leadership:</strong> We operate in high-growth
              sectors with strong potential for future expansion.
            </li>
            <li>
              <strong>Transparency & Trust:</strong> We provide clear, regular
              updates, ensuring that you are always informed.
            </li>
          </ul>
        </section>

        <section className="mt-20">
          <h3 className="text-2xl font-semibold mb-4">Investor Benefits</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Exclusive Opportunities:</strong> Gain access to
              investment opportunities that are not available to the general
              public.
            </li>
            <li>
              <strong>Diversified Portfolio:</strong> Invest in a diverse range
              of projects, reducing risk while maximizing returns.
            </li>
            <li>
              <strong>Personalized Support:</strong> Our team is dedicated to
              providing you with personalized guidance and support throughout
              your investment journey.
            </li>
          </ul>
        </section>
        <section className="mt-20">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold mb-4">
              Your Investment Details
            </h2>
            <Link to="/admin/investor/invest">
              <button className="py-2 px-5 bg-lime-500 rounded-full text-sm shadow-md cursor-pointer hover:shadow-none duration-200 active:opacity-85">
                <span className="Invest">Be Investor</span>
              </button>
            </Link>
          </div>
          {investorsData.map((investor) => (
            <div
              key={investor.id}
              className="bg-gray-100 p-4 mb-4 rounded shadow-sm"
            >
              <h3 className="text-xl font-bold">{investor.name}</h3>
              <p>
                <strong>Investment Amount:</strong> {investor.investmentAmount}
              </p>
              <p>
                <strong>Investment Date:</strong> {investor.investmentDate}
              </p>
              <p>
                <strong>Returns:</strong> {investor.returns}
              </p>
              <p>
                <strong>Portfolio:</strong> {investor.portfolio?.join(", ")}
              </p>
            </div>
          ))}
        </section>
      </div>
      <Outlet />
    </div>
  );
};

export default Inverstor;
