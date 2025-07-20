"use client";
import Image from "next/image";

import Header from "@/components/header";
import React from "react";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen pb-20 sm:p- font-[family-name:var(--font-geist-sans)] rounded-xl flex flex-col gap-6  [box-shadow:0_0_0_1px_hsla(0,0%,0%,0.14),0_0.3px_0.4px_hsla(0,0%,0%,0.08),0_0.9px_1.5px_hsla(0,0%,0%,0.1),0_3.5px_6px_hsla(0,0%,0%,0.16)]">
      <Header></Header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <HomeSection></HomeSection>
        <AboutSection></AboutSection>
        <ProjectSection></ProjectSection>
        <ContactSection></ContactSection>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="no er noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
