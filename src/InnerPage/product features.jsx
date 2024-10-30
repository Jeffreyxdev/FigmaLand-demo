
 
  import Feature from "./FeatureItem.jsx";
  
  function Productfeatures() {
    return (
      <section className="container mt-24 flex flex-col items-center">
        <h2 className="text-[32px] font-bold text-center sm:text-left">
          Product was Built Specifically for You
        </h2>
  
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
  
        <Feature
          Icon={}
          title="First Click Test"
          iconBgColor="#02897A"
          description="While most people enjoy casino gambling,"
        />
        <Feature
          Icon={}
          iconBgColor="#4D8DFF"
          title="First Click Test"
          description="While most people enjoy casino gambling,"
        />
        <Feature
          Icon={}
          iconBgColor="#740A76"
          title="First Click Test"
          description="While most people enjoy casino gambling,"
        />
        <Feature
          Icon={}
          iconBgColor="#F03E3D"
          title="First Click Test"
          description="While most people enjoy casino gambling,"
        />
        </div>
  
        <button className="primary-button mt-14">Sign up Now</button>
  
      </section>
    );
  }
  
  export default Productfeatures;