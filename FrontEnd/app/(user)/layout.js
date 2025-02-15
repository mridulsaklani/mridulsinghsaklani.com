

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



export const metadata = {
  title: "Mridul Singh Saklani - Web Developer",
  description: "Generated by create next app",
};


export default function UserLayout({ children }) {
  return (
    <html lang="en">
      
    
      <body
        className={` antialiased text-slate-500 bg-slate-900`}
       
      >
        
    <Navbar/>
       
        {children}
        <Footer/>

      </body>
     
    </html>
  );
}
