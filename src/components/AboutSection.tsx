import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
function AboutSection() {
  return (
    <>
      <section
        id="aboutMe"
        className="flex min-h-screen flex-col justify-center w-full"
      >
        <p className="text-center xl:text-start  text-5xl xl:text-6xl font-semibold">
          About me
        </p>

        <div className="flex gap-5 items-center justify-center flex-col xl:flex-row xl:h-160">
          <div className="flex flex-row gap-2 xl:self-start">
            <div className="bg-[var(--slope)] w-5 h-20 animate-LoadInM"></div>
            <div className="bg-[var(--slope)] w-5 h-40 animate-LoadInL"></div>
            <div className="bg-[var(--slope)] w-5 h-10 animate-LoadInS"></div>
          </div>
          <div className="flex flex-col gap-5 mt-10 ">
            <Card className="w-110 xl:w-130 h-120 hover:scale-105 duration-2000 -translate-y-5 animate-MoveInL">
              <CardContent className="flex flex-col">
                <p className="mb-2 text-3xl font-[family-name:var(--font-montserrat)] font-bold">
                  CAREER OBJECTIVE
                </p>
                <p className="dark:font-thin pb-3 border-b-1">
                  Computer Science Graduate, Seeking Entry-Level Opportunities
                  in Software Development
                </p>
                <p className="text-3xl mt-5 font-[family-name:var(--font-montserrat)] font-bold">
                  Tech Stack
                </p>
                <p className="text-xl mt-2">Proficient / Intermediate</p>
                <p className="mt-2 ml-3 dark:font-thin">
                  Languages:
                  <Badge variant="secondary" className="ml-3">
                    Javascript
                  </Badge>
                  <Badge variant="secondary" className="ml-3">
                    TypeScript
                  </Badge>
                  <Badge variant="secondary" className="ml-3">
                    PHP
                  </Badge>
                  <Badge variant="secondary" className="ml-3">
                    C#
                  </Badge>
                </p>
                <p className="mt-2 ml-3 dark:font-thin">
                  Frameworks/Libraries:
                  <Badge variant="default" className="ml-3">
                    React
                  </Badge>
                  <Badge variant="default" className="ml-3">
                    Next.js
                  </Badge>
                </p>
                <p className="mt-2 ml-3 dark:font-thin">
                  Styling:
                  <Badge variant="secondary" className="ml-3">
                    CSS
                  </Badge>
                  <Badge variant="secondary" className="ml-3">
                    Tailwind
                  </Badge>
                  <Badge variant="secondary" className="ml-3">
                    shadcn/ui
                  </Badge>
                </p>
                <p className="mt-2 ml-3 dark:font-thin">
                  Tools:
                  <Badge variant="default" className="ml-3">
                    GitHub
                  </Badge>
                  <Badge variant="default" className="ml-3">
                    Gitlab
                  </Badge>
                  <Badge variant="default" className="ml-3">
                    Figma
                  </Badge>
                </p>
                <p className="text-xl mt-5">Familiar With</p>
                <p className="mt-3 ml-3 dark:font-thin">
                  Languages:
                  <Badge variant="secondary" className="ml-3">
                    Java
                  </Badge>
                  <Badge variant="secondary" className="ml-3">
                    C
                  </Badge>
                  <Badge variant="secondary" className="ml-3">
                    Python
                  </Badge>
                </p>
              </CardContent>
            </Card>
            <Card className="w-110 xl:w-130  animate-MoveInL">
              <CardContent>
                <p className="text-3xl mb-2 font-[family-name:var(--font-montserrat)] font-bold">
                  Languages
                </p>
                <p className="dark:font-thin">
                  Slovak (native), Hungarian (native), English (fluent), Czech
                  (fluent)
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col gap-5 mt-20">
            <p className="text-3xl font-[family-name:var(--font-montserrat)] font-bold self-center xl:self-start">
              EDUCATION
            </p>
            <Card className="w-110 xl:w-150 animate-MoveInR">
              <CardContent>
                <div>
                  <p className="text-xl font-semibold">
                    8-Year High school with Informatics Focus
                  </p>
                  <p className="dark:font-thin  text-sm mb-5 mt-2 pb-3 border-b-1">
                    Gymnázium Kráľovský Chlmec 2011-2019
                  </p>
                  <div className=" text-x dark:font-thin">
                    <p className="mb-5">
                      Completed an 8-year secondary education program with a
                      strong focus on informatics during the final 4 years.
                    </p>
                    <p>
                      Gained foundational knowledge in programming (Python),
                      computer networks, and basic CNC principles.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="w-110 xl:w-150 mb-10 animate-MoveInR">
              <CardContent className="p-0">
                <div>
                  <p className="text-xl font-semibold">
                    B.Sc. in Computer Science
                  </p>
                  <p className="dark:font-thin text-sm mb-5  pb-3 border-b-1 mt-2">
                    Technical University of Kosice 2020-2023
                  </p>
                  <div className="text-x dark:font-thin">
                    <p className="mb-5">
                      Studied C, C#, UX/UI design, computer networking, and
                      introductory machine learning.
                    </p>
                    <p className="mb-5">
                      Developed practical and theoretical skills in software
                      development and algorithm design.
                    </p>
                    <p className="mb-5">
                      Worked on team projects, applying modern development
                      practices and user-centered design principles.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSection;
