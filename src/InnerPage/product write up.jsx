import { useEffect } from 'react'
import img from '../assets/amico.svg'
import '../product.css'

import AOS from 'aos'

function Write () {

    useEffect(()=> {
        AOS.init({
            duration: 1000,
            mirror: false,
            once: true,
        });
    },[] );
  return (
    // parent div
    <main className="container  md:flex flex-row-reverse justify-between items-center mt-[70.0px]">
      <div className="md:max-w-[50%]">
        <img  data-aos="fade-left" 
      data-aos-delay="200"
      data-aos-easing="linear"
      data-aos-duration='500'
        src={img} alt="hero" />
      </div>

       {/* text section */}
      <div
      data-aos="fade-down" 
      data-aos-delay="200"
      data-aos-easing="linear"
      data-aos-duration='500'
       className="text-center sm:text-left md:max-w-[50%]">
        <h1 className="font-bold text-[59px] leading-[60px]">
          Work at the speed of thought
        </h1>
        <p className="mt-4 text-[22px] leading-[28px] font-normal">
          Tools, tutorials, design and innovation experts, all in one place! The
          most intuitive way to imagine your next user experience.
        </p>
        <div className="mt-8 flex items-center justify-around sm:justify-start sm:space-x-8">
          <button className="primary-button" style={{marginLeft:'43px'}}>Get Started</button>
          <p className="font-semibold text-primary whitespace-nowrap flex items-center underline hover:scale-110 active:scale-95 duration-200 cursor-pointer">
           
          </p>
        </div>
      </div>
    </main>
  );
}

export default Write;