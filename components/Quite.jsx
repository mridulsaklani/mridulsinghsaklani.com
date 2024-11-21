import React from "react";
import Image from "next/image";

const Quite = () => {
  return (
    <>
      <div className="max-w-7xl m-auto my-20">
        <div className="mb-12 ">
          <h2 className="text-5xl font-bold text-white mb-4">
            Quiet Moments, Lifelong Learning
          </h2>
          <span className="border-blue-600 border-4 w-20 rounded-full flex flex-col"></span>
        </div>
        <div className="flex items-center gap-8 mb-12">
            <div className="w-2/5">
            <Image 
            className="quite-image"
            src="/images/bike-riding.png"
            width={320}
            height={320}
            alt="bike"
            >

            </Image>
            </div>
            <div className="w-3/5">
            <p className="text-lg text-neutral-200 mb-5">I’m naturally introverted and prefer spending time by myself. Social settings aren’t usually my comfort zone, but with the few people close to my heart, I open up and can talk endlessly. In my free time, I dive into learning new things—a habit that has been with me since childhood.</p>
            <p className="text-lg text-neutral-200 mb-5">I’ve always been captivated by the mysteries of space—something that never fails to excite me. Physics and mathematics are my favorite subjects, and Niels Bohr’s groundbreaking quantum theories have deeply influenced me. I could discuss quantum physics endlessly with anyone knowledgeable on the subject; for me, nothing compares to the intrigue of quantum mechanics.</p></div>
            
        </div>
        <div className="mb-16">
                <p className="text-lg text-neutral-200 mb-5">I consider myself an accidental developer; a career in software development was never my original plan. While I enjoyed technology, my true dream was to crack the CDS exam and serve as a lieutenant in the Indian Army. However, due to significant personal reasons, I had to let go of this dream—a decision that was incredibly difficult for me.
                During that challenging time, I faced a severe illness, one that brought me to the brink of life and death. But when all hope seemed lost, I found the strength to pull myself through and made the decision to start anew, determined to make the most of a new path.
                </p>
               
                <p className="text-lg text-neutral-200 mb-5">
                Afterward, I pursued my MCA from Lovely Professional University. Honestly, I’m not sure why I chose this path, but I did. Soon after, I set new goals for myself and began my corporate career in Chandigarh. The early days were full of challenges, but I am a stubborn person, and through hard work and dedication, I overcame them. However, my life has never been one of long-term stability. Since childhood, I’ve often found myself facing one trouble or another. Yet, through it all, my family has been my unwavering shield, supporting me in ways I could never have imagined.
                </p>
            </div>
            <div className="flex items-center gap-8 mb-12">
            
            <div className="w-3/5">
            <p className="text-lg text-neutral-200 mb-5">Currently, I’m working as a developer at a product-based company in Noida, while simultaneously pursuing an MBA through distance learning. My next goal is to move to Bangalore and secure a position in a reputable corporate organization. Throughout my life, I’ve focused on two key principles: <span className="text-blue-500 font-bold">Consistency</span> and <span className="text-blue-500 font-bold">Discipline</span>. I firmly believe that by holding on to these values, you can stand out from the crowd. To be truly successful, it’s important to step away from the crowd and forge your own path.</p>
            <p className="text-lg text-neutral-200 mb-5">There are many fascinating aspects of my journey, and if we ever meet, there’ll be plenty to talk about! Hahaha!</p></div>
            <div className="w-2/5 flex justify-end">
            <Image 
            className=""
            src="/images/maps.png"
            width={320}
            height={320}
            alt="bike"
            >

            </Image>
            </div>
            
        </div>
      </div>
    </>
  );
};

export default Quite;
