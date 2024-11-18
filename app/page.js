import About from "@/components/AboutSection";
import Banner from "@/components/Banner";

import MyBlogs from "@/components/MyBlogs";
import Resume from "@/components/Resume";
import Skills from "@/components/Skillssec";




export default function Home() {
  return (
    <>
    <Banner/>
    <About/>
    <Skills/>
    <Resume/>
    
    <MyBlogs/>
    
    </>
  );
}
