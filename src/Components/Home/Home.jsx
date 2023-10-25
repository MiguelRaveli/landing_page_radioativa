import React from "react";
import Navbar from "../Navbar/Navbar";
import classes from "./Home.module.css";
import Botao from "../Botao/Botao";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className={classes.Home}>
          <div className={classes.img_rad}></div>
        </div>
        <div className={classes.container_pai}>
          <div className={classes.texto_dolado}>
            <h3>
              Radioatividade é um processo natural e espontâneo em que átomos
              instáveis emitem radiação por meio de decaimento, a fim de
              diminuírem sua energia e tornarem-se mais estáveis.
            </h3>
          </div>
          <Botao link={"/topicos"} titulo={"Continuar"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
