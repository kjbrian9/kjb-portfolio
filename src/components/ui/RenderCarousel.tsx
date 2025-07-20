import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CardDescription, CardTitle } from "@/components/ui/card";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { type CarouselApi } from "@/components/ui/carousel";

import { Badge } from "@/components/ui/badge";
interface Project {
  id: number;
  name: string;
  description: string;
  demoLink: string;
  gitHubLink: string;
  image: string;
  tools: string[];
}

interface Props {
  projects: Project[];
}

function RenderCarousel({ projects }: Props) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-90 xl:w-260 self-center">
      <Carousel setApi={setApi}>
        <CarouselContent className="h-100 xl:h-130">
          {projects.map((project) => (
            <CarouselItem
              className="flex justify-center items-center flex-col"
              key={project.id}
            >
              <div className="flex flex-row items-center justify-between">
                <CardTitle className="ml-5 xl:text-2xl font-[family-name:var(--font-montserrat)] font-bold"></CardTitle>
                <Drawer>
                  <DrawerTrigger className="hover:opacity-70 transition-opacity:0.5">
                    <Image
                      src={project.image}
                      alt="personal project image"
                      width={900}
                      height={900}
                      layout="fixed"
                      className="self-center max-h-600 "
                    ></Image>
                  </DrawerTrigger>
                  <DrawerContent className="h-500">
                    <DrawerHeader className="">
                      <DrawerTitle className="text-2xl">
                        {project.name}
                      </DrawerTitle>
                      <DrawerDescription className="w-100"></DrawerDescription>
                    </DrawerHeader>
                    <div className="flex justify-center h-400 items-center">
                      <div className="gap-4 xl:gap-0 flex flex-col xl:flex-row xl:justify-between w-300">
                        <Image
                          src={project.image}
                          alt="personal project image"
                          width={600}
                          height={600}
                          layout="fixed"
                          className="w-100 xl:w-auto self-center max-h-600"
                        ></Image>
                        <div className="w-full xl:w-100 self-end flex flex-col xl:mr-20 justify-center content-center items-center xl:gap-3">
                          <p className="w-100 break-all text-xs xl:text-base">
                            {project.description}
                          </p>
                          <div className="xl:self-end">
                            {project.tools.map((tool) => (
                              <Badge variant="secondary" className="ml-3">
                                {tool}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex flex-row xl:self-end gap-5 mt-5">
                            <a href={project.gitHubLink}>
                              <Image
                                width={40}
                                height={40}
                                alt="github logo"
                                className="hover:-translate-y-1 duration-800 hover:filter hover:drop-shadow-[0_0_10px_white]"
                                src="/github-logo.png"
                              ></Image>
                            </a>
                            <a href={project.demoLink}>
                              <Button className="w-20">Demo</Button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <DrawerFooter>
                      <DrawerClose>
                        <Button variant="outline">Close</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </div>
              <CardDescription className="ml-5 text-xl text-white"></CardDescription>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <Progress value={33 * ((api?.selectedScrollSnap() ?? 0) + 1)}></Progress>
    </div>
  );
}
export default RenderCarousel;
