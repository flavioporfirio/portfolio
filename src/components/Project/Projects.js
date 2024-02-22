import { useState } from "react";
import { projectList } from "./ProjectList";
import Project from "./Project";
import "./project.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  function handleSelected(id) {
    setSelectedProject(id !== selectedProject ? id : null);
  }

  return (
    <div id="projects" className="section">
      <h1>Projetos</h1>
      <div className="swiper--container">
        <Swiper
          // spaceBetween={10}
          slidesPerView={2}
          slidesOffsetBefore={50}
          navigation
          scrollbar={{ draggable: true }}
          a11y
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
        >
          {projectList.map((project) => (
            <SwiperSlide key={project.id}>
              <Project
                project={project}
                onHandleSelected={handleSelected}
                selectedProject={selectedProject}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
