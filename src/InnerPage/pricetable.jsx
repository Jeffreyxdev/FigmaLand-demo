
import PriceCard from "./Pricecard";
import { useEffect } from "react";
import AOS from "aos";

function PriceTable() {
    useEffect(()=> {
        AOS.init({
            duration: 1000,
            mirror: false,
            once: true,
        });
    },[] );
  
  return (
    <section className="container mt-28 text-center">
      <h3 className="text-[32px] font-bold">Price Table</h3>
      <p className="font-medium">We offer competitive price</p>

      <div 
      data-aos="fade-down" 
      data-aos-delay="200"
      data-aos-easing="linear"
      data-aos-duration='500'
      className="mt-11 grid gap-8 md:gap-5 md:grid-cols-3 lg:gap-8 xl:gap-16 justify-center">
        <PriceCard
          title="Free"
          description="Brief price description"
          price="0"
          operators = "2"
        />
        <PriceCard
          title="Standard"
          description="Brief price description"
          price="5"
          operators = "5+"
        />
        <PriceCard
          title="Premium"
          description="Brief price description"
          price="10"
          operators = "10+"
        />
      </div>
    </section>
  );
}

export default PriceTable;