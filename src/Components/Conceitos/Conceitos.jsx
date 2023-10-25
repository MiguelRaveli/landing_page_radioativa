import React from "react";
import Navbar from "../Navbar/Navbar";
import classes from "./Conceitos.module.css";
import Botao from "../Botao/Botao";
const Conceitos = () => {
  return (
    <>
      <Navbar />
      <div className={classes.Conceitos}>
        <div className={classes.texto_esquerda}>
          <div className={classes.titulo}>
            <h1>CONCEITO</h1>
          </div>
          <div className={classes.primeiro_paragrafo}>
            <p>
              <span>A </span>
              Radioatividade está ligada diretamente ao núcleo do átomo, que
              sofre alteracão ao final do processo. Trata-se basicamente da
              emissão de particulas ou ondas eletromagneticas quando
              o núcleo de um átomo esta com excesso de energia.
            </p>
          </div>
          <div className={classes.img}></div>
          <div className={classes.segundo_paragrafo}></div>
        </div>
        <div className={classes.texto_meio}>
          <div className={classes.titulo}>
            <h1>RADIAÇÃO ALFA OU PARTÍCULA ALFA</h1>
          </div>
          <div className={classes.segundo_paragrafo}>
            <p>
              Um dos processos de estabilização de um núcleo com excesso de
              energia é o da emissão de um grupo de partículas positivas,
              constituídas por dois prótons e dois nêutrons, e da energia a elas
              associada. São as radiações alfa ou partículas alfa, núcleos de
              hélio (He), um gás chamado "nobre" por não reagir quimicamente com
              os demais elementos.{" "}
            </p>
          </div>
          <div className={classes.titulo}>
            <h1>RADIAÇÃO BETA OU PARTÍCULA BETA</h1>
          </div>
          <div className={classes.segundo_paragrafo}>
            <p>
              Outra forma de estabilização, quando existe no núcleo um ex
              nêutrons em relação a prótons, é através da emissão de uma
              negativa, um elétron, resultante da conversão de um nêutron em um
              próton. É a partícula beta negativa ou, simplesmente, partícula
              beta.
            </p>
          </div>

          <Botao link={"/usinas"} titulo={"Continuar"} />
        </div>
      </div>
    </>
  );
};

export default Conceitos;
