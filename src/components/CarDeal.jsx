import { card } from "../assets";
import styles, { layout } from "../styles";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Tecnología que ofrece más.  <br className="sm:block hidden" /> 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      ISA Bank es una plataforma de servicios financieros y bancarios basada en API, nativa de la nube. Está diseñado para impulsar la innovación financiera, llevar soluciones al mercado más rápido, reducir las barreras de costos y permitir que los ecosistemas se expandan.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
