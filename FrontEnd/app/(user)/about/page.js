
import Aboutbanner from "@/components/Aboutbanner";
import MyHobbie from "@/components/MyHobbie";
import MyJourney from "@/components/MyJourney";
import Quite from "@/components/Quite";
import Special from "@/components/Special";
import React from 'react'



const page = () => {
  
  return (
    <>
      
      <Aboutbanner/>
      <Special/>
      <MyJourney/>
      <Quite/>
      <MyHobbie/>
    </>
  )
}

export default page

export const metadata = {
  title: "About Mridul Singh Saklani | Software Developer, Masters in Computer Applications",
  description: "Discover more about Mridul Singh Saklani, a passionate web developer dedicated to continuous learning and innovation. Learn about the journey, hobbies, and values that shape the vision behind this portfolio.",
};
