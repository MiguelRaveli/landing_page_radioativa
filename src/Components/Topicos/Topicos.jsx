import React from "react";
import Navbar from "../Navbar/Navbar";
import classes from "./Topicos.module.css";
import Botao from "../Botao/Botao";
const Topicos = () => {
  return (
    <div>
      <Navbar />
      <div className={classes.container_pai}>
        <h2>
          Radioatividade é a propriedade que alguns átomos, como urânio e rádio,
          possuem de emitirem espontaneamente energia na forma de partículas e
          onda, tornando-se elementos químicos mais estáveis e mais leves.
        </h2>
        <div className={classes.topicos}>
          <div className={classes.topicos_dentro}>
            <h3>ENERGIA NUCLEAR</h3>
            <span>
              A energia nuclear é a energia liberada pelo núcleo de átomos que
              sofrem a ação de desintegração de suas partículas.
            </span>
          </div>
          <div className={classes.topicos_dentro}>
            <h3>USINA NUCLEAR</h3>
            <span>
              A usina nuclear é uma estrutura geradora de energia por meio da
              fissão de material nuclear.
            </span>
          </div>
          <div className={classes.topicos_dentro}>
            <h3>BOMBAS</h3>
            <span>
              BOMBA DE HIDROGÊNIO: <p>Fusão Nuclear</p>
              BOMBA ATÔMICA: <p>Fissão Nuclear</p>
            </span>
          </div>
        </div>
        <Botao link={"/conceitos"} titulo={"Continuar"} />
      </div>
    </div>
  );
};

export default Topicos;
