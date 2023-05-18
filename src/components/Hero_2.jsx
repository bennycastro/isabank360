import styles from "../styles";


const Hero_2 = (props) => {
   const { Title, Intro, Description } = props;
  return (
    <section className={`flex md:flex-row flex-col ${styles.paddingY} h-[400px]  mt-[150px]` }>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 pb-[150px]`}>
   
        <div className="flex flex-row justify-between items-center w-full mt-[50px]" >
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] mt-[50px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
         { Title }<br className="sm:block hidden" />{" "}
            <span className="text-gradient"> { Intro } </span>{" "}
          </h1>
          
        </div>

    
        <p className={`${styles.paragraph} max-w-[700px] mt-5`}>
        {Description}
        </p>
      </div>
  
    </section>
  );
};

export default Hero_2;
