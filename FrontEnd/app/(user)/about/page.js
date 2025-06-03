
import Aboutbanner from "@/components/Aboutbanner";
import Learning from "@/components/Learning";
import MyHobbie from "@/components/MyHobbie";
import MyJourney from "@/components/MyJourney";
import Quite from "@/components/Quite";
import Skills from "@/components/Skillssec";
import Special from "@/components/Spacial";
import React from 'react'



const page = () => {
  
  return (
    <>
      
      <Aboutbanner/>
      <Special/>
      <MyJourney/>
      <Quite/>
      {/* <Learning/> */}
      <MyHobbie/>
    </>
  )
}

export default page

export const metadata = {
  title: "About Mridul Singh Saklani | MERN Stack & Artificial Intelligence/Machine earning Developer ",
  description: "Discover more about Mridul Singh Saklani, a passionate MERN Stack & Artificial Intelligence/Machine earning Developer dedicated to continuous learning and innovation. Learn about the journey, hobbies, and values.",
};
