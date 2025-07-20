import RenderCarousel from "./ui/RenderCarousel";
import { Projects } from "../app/Projects";
function ProjectSection() {
  return (
    <section
      id="projects"
      className="flex min-h-screen flex-col justify-center w-full"
    >
      <p className="text-6xl text-center xl:text-start xl:mb-10">Projects</p>

      <RenderCarousel projects={Projects}></RenderCarousel>
    </section>
  );
}

export default ProjectSection;
