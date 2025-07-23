import Image from "next/image";
import { getImagePath } from "../lib/imagePath";

function HomeSection() {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-center justify-center w-full  border-b-1 mb-10 pb-30 xl:pb-0 mt-40 xl:mt-0"
    >
      <div className="flex flex-col gap-20 xl:flex-row items-center ">
        <div>
          <Image
            className="rounded-full aspect-square"
            src={getImagePath("/meDark.jpg")}
            alt="a picture about me"
            width={330}
            height={330}
            priority
          ></Image>
        </div>
        <div className="justify-items-center xl:justify-items-start flex-row xl:flex-col">
          <div className="flex flex-row">
            <div className="text-center xl:text-left font-[family-name:var(--font-montserrat)] text-foreground font-medium text-4xl xl:text-7xl  ">
              <p className="xl:-ml-2">Brian Julius Kiss</p>
              <div className="flex flex-row gap-2 mb-5">
                <div className="hidden xl:flex xl:flex-row xl:gap-2 ">
                  <div className="bg-[oklch(0.645_0.246_16.439)] w-5 h-20 animate-LoadInM"></div>
                  <div className="bg-[var(--slope)] w-5 h-40 animate-LoadInL"></div>
                  <div className="bg-[var(--slope)] w-5 h-10 animate-LoadInS"></div>
                </div>
                <div className="flex flex-col content-center items-center ">
                  <p className="pl-20 pr-20 xl:p-0 text-center xl:text-left text-foreground text-xl font-medium pt-1 xl:w-190 mb-3 pb-5 border-b-1">
                    Computer Science Graduate, seeking entry-level opportunities
                    in software development
                  </p>
                  <p className="text-center xl:text-left w-80 md:w-140 xl:w-190 pt-1 font-normal text-base font-[family-name:var(--font-inter)] dark:text-muted-foreground ">
                    I have a Bachelor&lsquo;s degree in Computer Science. I
                    started out programming in C#, and over time I discovered a
                    passion for building web applications with React and
                    JavaScript. These days, I&lsquo;m focused on creating
                    modern, responsive UIs using TypeScript, React, Tailwind
                    CSS, and Next.js.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row w-full justify-center xl:justify-start  ">
            <div className="flex gap-4 relative">
              <a href={"https://github.com/kjbrian9"} target="_blank">
                <Image
                  width={50}
                  height={50}
                  alt="github logo"
                  className="invert dark:invert-0 hover:-translate-y-1 duration-800 hover:filter hover:drop-shadow-[0_0_10px_white]  rotate-x-50 rotate-z-45 relative"
                  src={getImagePath("/github-logo.png")}
                ></Image>
                <div className="invert dark:invert-0 w-12 h-12 rounded-full bg-white rotate-x-50 rotate-z-45 opacity-40 absolute top-2 pointer-events-none "></div>
              </a>
              <a
                href={
                  "https://www.linkedin.com/in/brian-julius-kiss-256680280/"
                }
                target="_blank"
              >
                <Image
                  width={50}
                  height={50}
                  alt="github logo"
                  className="hover:-translate-y-1 duration-800 hover:filter hover:drop-shadow-[0_0_10px_white]  rotate-x-50 rotate-z-45 "
                  src={getImagePath("/linkedin-logo.webp")}
                ></Image>
                <div className="w-12 h-12 rounded-md bg-blue-500 rotate-x-50 rotate-z-45 opacity-30 absolute top-2 pointer-events-none"></div>
              </a>
            </div>
            {/*
            <div className="flex flex-col gap-3 items-end ml-auto">
              <div className="bg-white w-140 h-4"></div>
              <div className="bg-white w-100 h-4"></div>
              <div className=" w-60 h-4 bg-[oklch(0.645_0.246_16.439)]"></div>
              <div className="bg-white w-40 h-4"></div>
              <div className="bg-white w-20 h-4"></div>
              <div className="bg-white w-10 h-4"></div>
            </div>
            */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
