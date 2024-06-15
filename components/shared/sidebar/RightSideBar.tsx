import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";

const hotQuestions = [
  {
    _id: 1,
    title: "What is the difference between a web browser and a web server?",
  },
  {
    _id: 2,
    title:
      "Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?",
  },
  {
    _id: 3,
    title: "Is it only me or the font is bolder than necessary?",
  },
  {
    _id: 4,
    title: "Redux Toolkit Not Updating State as Expected",
  },
];

const topTags = [
  {
    _id: 1,
    name: "HTML",
    topQuestions: 5,
  },
  {
    _id: 2,
    name: "CSS",
    topQuestions: 10,
  },
  {
    _id: 3,
    name: "JavaScript",
    topQuestions: 15,
  },
  {
    _id: 4,
    name: "React",
    topQuestions: 20,
  },
];

const RightSideBar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col border-l  p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
            <Link
              href={`/question/${question._id}`}
              key={question._id}
              className="flex w-full cursor-pointer items-center justify-between gap-7"
            >
              <p className="text-dark500_light700 body-medium">
                {question.title}
              </p>
              <Image
                src={"/assets/icons/chevron-right.svg"}
                alt="chevron-right"
                width={20}
                height={20}
                className="invert-colors"
              ></Image>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-14">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {topTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              topQuestions={tag.topQuestions}
              showCount
            ></RenderTag>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
