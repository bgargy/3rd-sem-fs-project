import React from "react";
import PageSection from "./PageSection";

const Team = () => {
  const facts = [
    {
      id: 1,
      title: "Gargi",
      subtitle: "1BM22CS099",
    },
    {
      id: 2,
      title: "Gayatri",
      subtitle: "1BM22CS102",
    },
    {
      id: 3,
      title: "Pragna",
      subtitle: "1BM22CS103",
    },
    {
      id: 4,
      title: "Gaurav",
      subtitle: "1BM22CS100",
    },
  ];

  const companies = [
    // Removed Google, Facebook, Amazon, Apple, Snapchat
  ];

  return (
    <PageSection
      name="team"
      title="TEAM"
      subtitle={`We are section 3-B. This website is our passion project. `}
    >
      <>
        <div className="grid lg:grid-cols-4 text-left gap-8 mb-16">
          {facts.map(({ id, title, subtitle }) => (
            <div
              key={id}
              className="odd:bg-thBlue even:bg-thOrange text-black p-4 rounded-lg shadow-md"
            >
              <h1 className="text-4xl lg:text-5xl font-bold mb-2">{title}</h1>
              <p className="text-lg">{subtitle}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-around gap-6">
          {companies.map(({ id, title }) => (
            <div
              className="flex items-center capitalize p-4 rounded-lg shadow-md"
              key={id}
            >
              <p className="ml-2 text-xl">{title}</p>
            </div>
          ))}
        </div>
      </>
    </PageSection>
  );
};

export default Team;
