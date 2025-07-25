"use client";
import Image from "next/image";
import { getImagePath } from "../lib/imagePath";

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
    </div>
  );
}
