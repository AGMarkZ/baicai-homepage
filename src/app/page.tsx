import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "baicai.dev 你的AI前哨基地",
  description: "T探索AI、科技、個人專案的全新可能，從這裡開始。",
  // other metadata
};

export default function Home() {
  return (
    <>
      {/* <ScrollUp />*/}
      <Hero />
      {/* <Features />*/}
      {/* <Video />*/}
      {/* <Brands />*/}
      {/* <AboutSectionOne />*/}
      {/* <AboutSectionTwo />*/}
      {/* <Testimonials />*/}
      {/* <Pricing />*/}
      {/* <Blog />*/}
      {/* <Contact />*/}
    </>
  );
}
