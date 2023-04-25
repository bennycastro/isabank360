import styles from "../styles";
import { discount,internal, external, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}` }>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 pb-[150px]`}>
      { /*  <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 ">*/}
        { /*   <img src={discount} alt="discount" className="w-[32px] h-[32px]" />*/}
        { /*   <p className={`${styles.paragraph} ml-2`}>*/}
         { /*     <span className="text-white">20%</span> Discount For{" "}*/}
          { /*    <span className="text-white">1 Month</span> Account*/}
          { /*  </p>*/}
        { /*  </div>*/}

        <div className="flex flex-row justify-between items-center w-full mt-[50px]" >
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          La Siguiente <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generación</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Del Cloud Bank.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        ISA Bank es la plataforma bancaria en la nube
         que impulsa el cambio para las instituciones financieras que buscan innovar con agilidad y eficiencia..
        </p>
      </div>
    
      <div className="graphic lg:-mt-[70px] lg:ml-[80px]">
                <div className="graphic-circles absolute">
                  <img src={internal} alt="" className="graphic-circle-1 absolute"/>
                  <img src={external} alt="" className="graphic-circle-2 absolute"/>
                 
              </div>
          </div> 
          <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      
      <img src={robot} alt="billing" className="w-[90%] h-[100%] relative z-[5]" />
      
     
        
  
       
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
