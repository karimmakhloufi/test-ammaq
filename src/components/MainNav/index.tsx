import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  Users,
  Book,
  Calendar,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
} from "react-feather";

import "./mainNav.css";

const tabs = [
  {
    name: "Communauté",
    color: "community",
    icon: <Users className="inline-block" size="32" />,
  },
  {
    name: "Bibliothèque",
    color: "library",
    icon: <Book className="inline-block" size="32" />,
  },
  {
    name: "Agenda",
    color: "agenda",
    icon: <Calendar className="inline-block" size="32" />,
  },
  {
    name: "Quizz",
    color: "quizz",
    icon: <HelpCircle className="inline-block" size="32" />,
  },
];

const MainNav = (): JSX.Element => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      id="mainNav"
      className={`m-1 rounded-md bg-mainnav shadow-mainnav ${
        nav ? "w-72" : "w-24"
      }`}
    >
      <div className="pt-4">
        <div
          className={`rounded-full grid place-items-center bg-circle m-auto shadow-profile ${
            nav ? "w-36 h-36" : "w-20 h-20"
          }`}
        >
          <div
            className={`m-auto grid place-items-center rounded-full bg-workit ${
              nav ? "w-32 h-32" : "w-16 h-16"
            }`}
          >
            <img
              src="/dumbo.jpeg"
              alt="profile pic"
              className={`m-auto rounded-full ${
                nav ? "w-28 h-28" : "w-14 h-14"
              }`}
            />
          </div>
        </div>
        <h3
          className={`text-main-white text-center ${
            nav ? "text-xl" : "text-xs"
          }`}
        >
          <span
            className={`text-transparent bg-workit bg-clip-text font-bold ${
              nav ? "text-3xl" : "text-xl"
            }`}
          >
            M
          </span>
          ohamed
        </h3>
      </div>

      <button
        type="button"
        onClick={handleNav}
        className={`w-10 h-10 bg-main-darkgrey rounded-full focus:outline-none shadow-mainnav absolute ${
          nav ? "nav-open" : "nav-closed"
        }`}
      >
        {nav ? (
          <ChevronLeft className="inline-block text-main-white" />
        ) : (
          <ChevronRight className="inline-block text-main-white" />
        )}
      </button>

      <nav className="grid place-items-center mt-6">
        <ul className="text-main-white text-2xl">
          {tabs.map((tab) => (
            <>
              <NavLink
                to={`/${tab.color}`}
                className={`${
                  nav
                    ? "rounded-md shadow-channels m-4 w-64 h-16 flex justify-between cursor-pointer"
                    : ""
                }`}
                activeClassName={`${
                  nav
                    ? "shadow-pressed bg-pressed gradient-border "
                    : "shadow-pressed bg-pressed "
                }`}
                key={tab.name}
              >
                <div
                  className={`grid place-content-center ${!nav ? "pt-4" : ""}`}
                >
                  <div
                    className={`rounded-full w-14 h-14 ml-1 shadow-circle grid place-items-center self-start ${
                      nav ? "ml-1" : "my-2"
                    }`}
                  >
                    <NavLink
                      to={`/${tab.color}`}
                      activeClassName="shadow-buttonsPressed gradient-border gradient-border-round"
                      className={`rounded-full w-12 h-12 grid place-items-center cursor-pointer bg-${tab.color}`}
                      exact
                    >
                      {tab.icon}
                    </NavLink>
                  </div>
                </div>
                <div
                  className={`${nav ? "grid place-items-center" : "hidden"}`}
                >
                  {/* <NavLink
                    to={`/${tab.color}`}
                    activeClassName="active-name"
                    exact
                  > */}
                  <li className="pr-4">
                    <h2>{tab.name}</h2>
                  </li>
                  {/* </NavLink> */}
                </div>
              </NavLink>
            </>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MainNav;
