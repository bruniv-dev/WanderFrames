import React from "react";

import Header from "../Header/header.js";

import "./Inspirations.css";
import CardLayout from "../Card-layout/cardLayout.js";

const Inspirations = () => {
  const cardData = [
    {
      id: 1,
      username: "User1",
      date: "2024-07-11",
      location: "Location1",
      title: "Title 1",
      description: "Description 1",
    },
    {
      id: 2,
      username: "User2",
      date: "2024-07-12",
      location: "Location2",
      title: "Title 2",
      description: "Description 2",
    },
    {
      id: 3,
      username: "User3",
      date: "2024-07-13",
      location: "Location3",
      title: "Title 3",
      description: "Description 3",
    },
    {
      id: 1,
      username: "User1",
      date: "2024-07-11",
      location: "Location1",
      title: "Title 1",
      description: "Description 1",
    },
    {
      id: 2,
      username: "User2",
      date: "2024-07-12",
      location: "Location2",
      title: "Title 2",
      description: "Description 2",
    },
    {
      id: 3,
      username: "User3",
      date: "2024-07-13",
      location: "Location3",
      title: "Title 3",
      description: "Description 3",
    },
    {
      id: 3,
      username: "User3",
      date: "2024-07-13",
      location: "Location3",
      title: "Title 3",
      description: "Description 3",
    },
    {
      id: 3,
      username: "User3",
      date: "2024-07-13",
      location: "Location3",
      title: "Title 3",
      description: "Description 3",
    },
    {
      id: 3,
      username: "User3",
      date: "2024-07-13",
      location: "Location3",
      title: "Title 3",
      description: "Description 3",
    },
    {
      id: 3,
      username: "User3",
      date: "2024-07-13",
      location: "Location3",
      title: "Title 3",
      description: "Description 3",
    },
    {
      id: 3,
      username: "User3",
      date: "2024-07-13",
      location: "Location3",
      title: "Title 3",
      description: "Description 3",
    },
    {
      id: 3,
      username: "User3",
      date: "2024-07-13",
      location: "Location3",
      title: "Title 3",
      description: "Description 3",
    },
    {
      id: 3,
      username: "User3",
      date: "2024-07-13",
      location: "Location3",
      title: "Title 3",
      description: "Description 3",
    },
  ];

  return (
    <>
      <Header
        classNameheader="inspirations-header"
        classNamelogo="inspirations-logo"
        classNamenav="inspirations-nav"
      />
      <div className="inspirations-container">
        <CardLayout cardData={cardData} />
      </div>
      ;
    </>
  );
};

export default Inspirations;
