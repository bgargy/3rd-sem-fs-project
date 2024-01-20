import React from "react";
import PageSection from "./PageSection";

import { FaSearch, FaCalendarAlt, FaBolt, FaUserShield } from "react-icons/fa";

const Prodcuts = () => {
  const products = [
    {
      id: 1,
      icon: <FaSearch size={50} className="text-white" />,
      title: "Explore venues",
      subtitle:
        "From Seminar Halls to Classrooms, all are at your fingertip",
    },
    {
      id: 2,
      icon: <FaCalendarAlt size={50} className="text-white" />,
      title: "Date Flexibility",
      subtitle:
        "Choose a date from a 2 week calendar",
    },
    {
      id: 3,
      icon: <FaBolt size={50} className="text-white" />,
      title: "Get Venues in seconds",
      subtitle:
        "Avoid the hassle of running around and getting permission with Campus Space",
    },
    {
      id: 4,
      icon: <FaUserShield size={50} className="text-white" />,
      title: "Admin access available",
      subtitle:
        "Admins can accept or reject venue requests",
    },
  ];

  return (
    <PageSection
      name="features"
      title="FEATURES"
      subtitle={''}
    >
      <div className="grid lg:grid-cols-2 gap-12 text-black">
        {products.map(({ id, icon, title, subtitle }) => (
          <div
            key={id}
            className="group bg-gradient-to-r from-thBlue to-thBlue rounded-lg flex flex-col items-center justify-center p-8 text-center"
          >
            <div className="flex items-center justify-center duration-300 group-hover:scale-110">
              <div className="bg-black rounded-full p-5 m-4">{icon}</div>
            </div>
            <h1 className="text-3xl lg:text-5xl my-8 capitalize">{title}</h1>
            <p className="text-lg">{subtitle}</p>
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default Prodcuts;
