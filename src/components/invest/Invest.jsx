import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Invest = ({ type, investorsData, addInvestment, investableProjects }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.document.body.style.overflow = "hidden";
    return () => {
      window.document.body.style.overflow = "auto";
    };
  }, []);
  const addInvestHandler = (project) => {
    addInvestment(project);
  };

  return (
    <section className="fixed inset-0 z-50 bg-[#dedbd2] text-slate-100 overflow-auto">
      <Link to={`/admin/${type}`}>
        {" "}
        <span className="absolute inset-[4%_4%_auto_auto]">X</span>
      </Link>
      <h2 className="text-3xl text-center mt-10 text-slate-900">
        Invest Projects
      </h2>
      <p className="text-center max-w-4xl mx-auto text-slate-500 mt-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, veniam
        adipisci voluptates cumque voluptatem omnis at porro laboriosam est
        pariatur.
      </p>
      <div className="max-w-4xl mx-auto mt-32 p-4 bg-gray-400 rounded-xl">
        {investableProjects.length != 0 ? (
          <ul className="grid grid-cols-2 gap-4">
            {investableProjects?.map((project, idx) => (
              <li key={project.id} className="bg-slate-900 p-4">
                <h3 className="text-2xl">{project.name}</h3>
                <p className="text-[1.1rem] text-slate-300">
                  {project.description}
                </p>
                <div className="flex justify-between">
                  <p className="text-[1rem]">
                    <strong>Amount Needed:</strong> {project.investmentAmount}
                  </p>
                  <button
                    onClick={() => {
                      project.id = investorsData.length + 1;
                      investableProjects.splice(idx, 1);
                      localStorage.setItem(
                        "investableProjects",
                        JSON.stringify(investableProjects)
                      );
                      addInvestHandler(project);
                      navigate(`/admin/${type}`);
                    }}
                    className="text-sky-500 hover:underline underline-offset-2"
                  >
                    Invest
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No projects available</p>
        )}
      </div>
    </section>
  );
};

export default Invest;
