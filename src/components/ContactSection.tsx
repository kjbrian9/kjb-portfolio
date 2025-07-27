import Image from "next/image";
import { getImagePath } from "../lib/imagePath";

function ContactSection() {
  return (
    <section
      id="contacts"
      className="flex min-h-screen flex-col w-full items-center justify-center gap-20 "
    >
      <p className="text-8xl animate-pulsing">Contacts</p>

      <div className="flex flex-col xl:gap-10 mb-5 ">
        <div className="flex flex-col gap-5 items-center xl:items-start ">
          <div className="flex flew-row items-center mb-3 ">
            <Image
              width={40}
              height={40}
              alt="mail logo"
              src={getImagePath("/MailLogo.svg")}
              className="dark:invert"
            ></Image>
            <a
              href="mailto:brian.julius.k@gmail.com"
              className="text-2xl font-bold ml-2"
            >
              brian.julius.k@gmail.com
            </a>
          </div>
          <div className="flex flew-row  items-center justify-center mb-3 w-full ">
            <Image
              width={40}
              height={40}
              alt="location logo"
              src={getImagePath("/LocationLogo.svg")}
              className="invert dark:invert-0"
            ></Image>
            <p className="text-2xl font-bold"> Košice, Slovakia</p>
          </div>

          <div className="flex flex-row gap-4 justify-center w-full  order-first  ">
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
