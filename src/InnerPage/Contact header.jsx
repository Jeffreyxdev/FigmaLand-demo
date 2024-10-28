
import { useEffect } from "react";
import AOS from 'aos'
import Typewriter from "typewriter-effect";
import styles from "./ContactHeader.module.css"
const ContactHeader = () => {
  useEffect(()=> {
    AOS.init({
        duration: 1000,
        mirror: false,
        once: true,
    });
},[] );
  return (
      <div className={styles.contact_section}>
        <h1
        className=" text-center md: text-[36px]
        sm:w-[390px] sm:h-[200px] flex items-center 
        tracking-[0.2px] md:w-[700px] md:h-[65px]  md:pl-[60px] mt-[100px]
        font-mono ml-[30px]" 

        >CONTACT US</h1>
       <div className="ml-[39px]">
        <Typewriter  
                
                
        options={{
          strings: [
           "LET'S KNOW HOW WE CAN HELP YOU",
            "WE OFFER 24/7 SERVICE SUPPORT",
            "NEED MORE INFO ABOUT FIGMALAND?",
            "SEND A TEXT"
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 20,
          typeSpeed: 10,
          delay: 10,
          
        }}
      />
      </div>
  </div>
   )
};

export default ContactHeader;