import { Button } from "./ui/button";
import Image from "next/image";
import { getImagePath } from "../../next.config";
import { Card, CardContent, CardTitle } from "./ui/card";
import { Input } from "@/components/ui/input";

function ContactSection() {
  return (
    <section
      id="contacts"
      className="flex min-h-screen flex-col w-full items-center justify-center gap-20 "
    >
      <p className="text-6xl">Contacts</p>
      <div className="flex flex-col xl:flex-row xl:gap-10 mb-5  items-center xl:items-start">
        <Card className="w-100 mb-10 xl:w-120">
          <CardTitle className="self-center text-3xl font-[family-name:var(--font-montserrat)] font-bold">
            Contact me
          </CardTitle>
          <CardContent>
            <p className="mb-2 text-xl">Email</p>
            <Input className="mb-5" />
            <p className="mb-2 text-xl">Subject</p>
            <Input className="mb-5" />
            <p className="mb-2 text-xl">Message</p>
            <textarea
              className="h-30 xl:h-50 w-full  flex w-full min-w-0 h-9
  rounded-md border border-input bg-transparent
  px-3 py-1 text-base md:text-sm
  shadow-xs
  outline-none
  transition-[color,box-shadow]
  
  placeholder:text-muted-foreground
  selection:bg-primary selection:text-primary-foreground
  dark:bg-input/30

  focus-visible:border-ring
  focus-visible:ring-ring/50
  focus-visible:ring-[3px]

  aria-invalid:border-destructive
  aria-invalid:ring-destructive/20
  dark:aria-invalid:ring-destructive/40

  file:inline-flex
  file:h-7
  file:border-0
  file:bg-transparent
  file:text-sm
  file:font-medium
  file:text-foreground

  disabled:pointer-events-none
  disabled:cursor-not-allowed
  disabled:opacity-50 align-top resize-none"
            ></textarea>
          </CardContent>
          <Button className="w-20 self-center">Send</Button>
        </Card>
        <div className="flex flex-col gap-5 items-center xl:items-start ">
          <Card className="w-fit h-fit">
            <CardContent>
              <div className="flex flew-row items-center mb-3 justify-start">
                <Image
                  width={40}
                  height={40}
                  alt="location logo"
                  src={getImagePath("/LocationLogo.svg")}
                  className="invert dark:invert-0"
                ></Image>
                <p className="text-2xl font-bold">Košice, Slovakia</p>
              </div>
              <p className="mb-2 text-xl font-medium">
                brian.julius.k@gmail.com
              </p>
            </CardContent>
          </Card>
          <div className="flex flex-row gap-4 w-35 order-first xl:order-last ">
            <a href={"https://github.com/kjbrian9"} target="_blank">
              <Image
                width={50}
                height={50}
                alt="github logo"
                className="invert dark:invert-0 hover:-translate-y-1 duration-800 hover:filter hover:drop-shadow-[0_0_10px_white]"
                src={getImagePath("/github-logo.png")}
              ></Image>
            </a>
            <a
              href={"https://www.linkedin.com/in/brian-julius-kiss-256680280/"}
              target="_blank"
            >
              <Image
                width={50}
                height={50}
                alt="github logo"
                className="hover:-translate-y-1 duration-800 hover:filter hover:drop-shadow-[0_0_10px_white]"
                src={getImagePath("/linkedin-logo.webp")}
              ></Image>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
