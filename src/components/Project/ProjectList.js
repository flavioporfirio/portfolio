import { v4 as uuidv4 } from "uuid";

export const projectList = [
  {
    id: uuidv4(),
    title: "Financial Control",
    projectInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ab vel quibusdam quia. Ipsum perferendis earum officia eveniet non fuga, debitis at eum nemo consectetur dignissimos laboriosam cum veniam quae.",
    tech: ["javascript, css, react, html"],
    image: "./imgs/project-imgs/financial-control.png",
    link: "https://financial-control-flavioporfirio86.netlify.app/",
  },
  {
    id: uuidv4(),
    title: "Financial",
    projectInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ab vel quibusdam quia. Ipsum perferendis earum officia eveniet non fuga, debitis at eum nemo consectetur dignissimos laboriosam cum veniam quae.",
    tech: ["javascript, css, react, html"],
    image: "./imgs/project-imgs/financial-control.png",
    link: "https://financial-control-flavioporfirio86.netlify.app/",
  },
];

console.log(projectList[0].id);
