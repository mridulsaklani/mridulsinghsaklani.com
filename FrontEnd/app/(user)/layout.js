

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";



export const metadata = {
  title: "Mridul Singh Saklani - MERN STACK & Artificial Intelligence / Machine Learning Developer",
  description: "mridulsinghsaklani.com",
};


export default function UserLayout({ children }) {
  return (
    <html lang="en">
      
    
      <body
        className={` antialiased text-slate-500 bg-slate-900`}
       
      >
        
    <Navbar/>
       <ChatBot/>
        {children}
        <Footer/>

      </body>
     
    </html>
  );
}
