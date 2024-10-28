import {useEffect} from "react";
import AOS from 'aos'
import 'aos/dist/aos.css';
import img from '../assets/Boards.png'
import Typewriter from "typewriter-effect";

const About =() =>{

    useEffect(()=> {
        AOS.init({
            duration: 1000,
            mirror: false,
            once: true,
        });
    },[] );

    return(
       
       <div className="hero overflow-hiddenp-[35px] p-[27px] mt-[120px]
       md:mt-[200px] w-full flex flex-col gap-10 md:gap-10 items-center justify-center">
        <h1 data-aos="fade-down" 
      data-aos-delay="200"
      data-aos-easing="linear"
      data-aos-duration='500'
      className='heroH text-center
       md:w-[709px] h-[186px] md:h-[196px] 
       lg:text-[80px] sm:text-[60px]  
       xs:text-[50px]
        text-[40px] leading-[62px] 
      md:leading-[88px]
       tracking-[0.2px] md:font-bold '>About us</h1>
      
       <div data-aos="fade-down" 
       className="typed text-center md: text-[36px]
                sm:w-[390px] sm:h-[200px] flex items-center 
                tracking-[0.2px] md:w-[700px] md:h-[65px]  md:pl-[60px] mt-[100px]
                font-mono 
               ">
       <Typewriter  
                
                
      options={{
        strings: [
          "Welcome to Figma Land, your go-to platform for freelancers looking to streamline their scheduling and task management!",
          "At Figma Land, we understand that freelancing can be both rewarding and challenging. With multiple projects on your plate and deadlines looming",
          "we’ve created a user-friendly space where you can easily organize your tasks, set schedules, and boost your productivity.",
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
        typeSpeed: 1,
        delay: 10,
        
      }}
    />
    </div>
      
            <div className="">
                <img 
                data-aos="flip-right" 
                data-aos-delay="200"
                data-aos-easing="linear"
                data-aos-duration='500'
                src={img} 
                alt="screenshots of app" 
                className="w-screen"/>
                </div>
               <h3
               data-aos="fade-down" 
               className="typed text-center md: text-[26px]
                        sm:w-[390px] sm:h-[200px] flex items-center 
                        tracking-[0.2px] md:w-[700px] md:h-[65px]  md:pl-[60px] mt-[100px]
                        font-mono 
                       ">
               What We Offer
                    
                    Task Management: Easily create, track, and prioritize your tasks.
                    Scheduling Tools: Plan your day, week, or month with intuitive calendar features.
                    Resource Hub: Access tips, guides, and resources tailored for freelancers.
                    Join us at Figma Land and take control of your freelance journey. Let’s make your workflow smoother and your projects more enjoyable!

                    For any questions or feedback, feel free to reach out to us!
               </h3>
       </div>
    )
}


export default About;