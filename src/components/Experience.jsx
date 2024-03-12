import React from "react";

import html from "../images/html.png";
import css from "../images/css.png";
import javascript from "../images/javascript.png";
import reactImage from "../images/react.png";
import nodejs from "../images/node.png";
import bulma from "../images/bulma.png";
import bootstrap from"../images/bootstrap.png";
import express from "../images/express.png";
import python from "../images/python.png";
import sql from "../images/sql.png";
import github from "../images/github.png";
import tailwind from "../images/tailwind.png";
import prisma from "../images/prisma.png";
import postman from "../images/postman.png";
import sqlite from "../images/sqlite.png";
import nextjs from "../images/nextjs.png";
import typescript from "../images/typescript.png";
import mongodb from"../images/mongodb.png"




const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: bulma,
      title: "BULMA",
      style: "shadow-[#00caac]",
    },
    {
      id: 7,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-[#8663BA]",
    },
    {
      id: 8,
      src: nodejs,
      title: "Node JS",
      style: "shadow-[#75bc3a]",
    },
    {
      id: 9,
      src: express,
      title: "Express",
      style: "shadow-[#9BCB52]",
      },
    {
      id: 10,
      src: python,
      title: "Python",
      style: "shadow-[#FACC50]",
      },
    {
      id: 11,
      src: sql,
      title: "Sql",
      style: "shadow-[#3B84CC]",
      },
    {
      id: 12,
      src: prisma,
      title: "Prisma",
      style: "shadow-[#11384d]",
    },
    {
      id: 13,
      src: postman,
      title: "Postman",
      style: "shadow-[#e95723]",
    },
    {
      id: 14,
      src: sqlite,
      title: "Sqlite",
      style: "shadow-[#47a2da]",
    },
    {
      id: 15,
      src: nextjs,
      title: "NextJs",
      style: "shadow-[#cdcdcd]",
    },
    {
      id: 16,
      src: typescript,
      title: "TypeScript",
      style: "shadow-[#3178c6]",
    },
    {
      id: 17,
      src: mongodb,
      title: "Mongo DB",
      style: "shadow-[#12a54f]",
    },
    {
      id: 18,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-gray-900 w-full h-auto"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with:</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
