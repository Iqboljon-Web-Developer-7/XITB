import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
import Form from "../components/form/Form.jsx";
import Inverstor from "../components/investor/Inverstor.jsx";
import Partner from "../components/partner/Partner.jsx";
import Protect from "../components/protect/Protect.jsx";
import Invest from "../components/invest/Invest.jsx";
import PartnerPage from "../components/partnerInvest/PartnerInvest.jsx";

const Pages = () => {
  const [type, setType] = useState("investor");
  const [investorsData, setInvestorsData] = useState(
    JSON.parse(localStorage.getItem("investorsData")) || [
      {
        id: 1,
        name: "Investor A",
        investmentAmount: "$2,000,000",
        investmentDate: "2023-02-20",
        returns: "15% annual",
        portfolio: ["Project Delta", "Project Epsilon"],
      },
      {
        id: 2,
        name: "Investor B",
        investmentAmount: "$1,500,000",
        investmentDate: "2022-09-12",
        returns: "12% annual",
        portfolio: ["Project Zeta"],
      },
    ]
  );
  const [partnersData, setPartnersData] = useState(
    localStorage.getItem("partnersData") || [
      {
        id: 1,
        name: "Partner A",
        industry: "Technology",
        partnershipDate: "2022-01-15",
        investment: "$1,000,000",
        projects: ["Project Alpha", "Project Beta"],
      },
      {
        id: 2,
        name: "Partner B",
        industry: "Healthcare",
        partnershipDate: "2021-06-10",
        investment: "$500,000",
        projects: ["Project Gamma"],
      },
    ]
  );

  const addInvestment = (data) => {
    setInvestorsData([...investorsData, data]);
    localStorage.setItem("investorsData", JSON.stringify(investorsData));
  };

  const investableProjects = JSON.parse(
    localStorage.getItem("investableProjects")
  ) || [
    {
      id: 3,
      name: "Investor C",
      investmentAmount: "$3,000,000",
      investmentDate: "2024-02-20",
      returns: "20% annual",
      portfolio: ["Project Delta", "Project Epsilon"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eius fugiat laboriosam veritatis dolorum doloremque quo veniam labore a error",
    },
    {
      id: 4,
      name: "Investor D",
      investmentAmount: "$3,500,000",
      investmentDate: "2022-09-12",
      returns: "22% annual",
      portfolio: ["Project Zeta"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eius fugiat laboriosam veritatis dolorum doloremque quo veniam labore a error",
    },
  ];

  const partnerableProjects = JSON.parse(
    localStorage.getItem("partnerableProjects")
  ) || [
    {
      id: 3,
      name: "Partner C",
      industry: "Helicopter Industry",
      partnershipDate: "2024-01-15",
      investment: "$2,200,000",
      projects: ["Project Skuba", "Project Beetee"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eius fugiat laboriosam veritatis dolorum doloremque quo veniam labore a error",
    },
    {
      id: 4,
      name: "Partner D",
      industry: "Car Business (Lambarghini)",
      partnershipDate: "2023-06-10",
      investment: "$5,000,000",
      projects: ["Project Gamma"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eius fugiat laboriosam veritatis dolorum doloremque quo veniam labore a error",
    },
  ];

  const addPartnerProject = (project) => {
    setPartnersData([...partnersData, project]);
    localStorage.setItem("partnersData", JSON.stringify(partnersData));
  };

  return (
    <main className="font-inter bg-[#FDFDFD]">
      <Header type={type} setType={setType} />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Form setType={setType} />} />
        <Route path="/admin" element={<Protect />}>
          <Route
            path="investor"
            element={<Inverstor type={type} investorsData={investorsData} />}
          >
            <Route
              path="invest"
              element={
                <Invest
                  type={type}
                  investorsData={investorsData}
                  addInvestment={addInvestment}
                  investableProjects={investableProjects}
                />
              }
            />
          </Route>
          <Route
            path="partner"
            element={<Partner partnersData={partnersData} />}
          >
            <Route
              path="partnerPage"
              element={
                <PartnerPage
                  type={type}
                  partnersData={partnersData}
                  partnerableProjects={partnerableProjects}
                  addPartnerProject={addPartnerProject}
                />
              }
            />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </main>
  );
};

export default Pages;
