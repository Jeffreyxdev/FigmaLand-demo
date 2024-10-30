
import { HiBookmarkSquare } from "react-icons/hi2";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { HiBuildingStorefront } from "react-icons/hi2";
import { HiMiniCursorArrowRays } from "react-icons/hi2";
  import Feature from "./FeatureItem.jsx";
  
  function Productfeatures() {
    return (
      <section className="container mt-24 flex flex-col items-center">
        <h2 className="text-[32px] font-bold text-center sm:text-left">
          Product was Built Specifically for You
        </h2>
  
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
  
        <Feature
          Icon={HiBuildingOffice2}
          title="Organizations"
          iconBgColor="#02897A"
          
          description="Join us an several other big organization"
        />
        <Feature
          Icon={HiBookmarkSquare}
          iconBgColor="#4D8DFF"
          title="Save time an Resources"
          description="We offer great services that will enhance your efficiency"
        />
        <Feature
          Icon={HiBuildingStorefront }
          iconBgColor="#740A76"
          title="At the size of your pocket"
          description="We at Figmaland wants everyone to has a wonderful expirence offer diffrent package viraities"
        />
        <Feature
          Icon={HiMiniCursorArrowRays}
          iconBgColor="#F03E3D"
          title="First Click Test"
          description="While most people enjoy casino gambling,"
        />
        </div>
  
        <button className="primary-button mt-14" style={{marginLeft:'65px'}}>Sign up Now</button>
  
      </section>
    );
  }
  
  export default Productfeatures;