import React from "react";
import Navbar from "../Navbar/Navbar";
import classes from "./Usinas.module.css";
import Botao from "../Botao/Botao";
const Usinas = () => {
  return (
    <>
      <Navbar />
      <div className={classes.Usinas}>
        <div className={classes.titulo}>
          <h1>USINAS NUCLEARES</h1>
        </div>
        <div className={classes.primeiro_paragrafo}>
          <p>
            <span>A </span>
            principal técnica empregada para a geração de eletricidade em usinas
            nucleares é a fissão do átomo de urânio. Segundo a Eletronuclear
            (estatal responsável pela operação das usinas brasileiras), essa
            técnica é usada em mais de 400 centrais nucleares no mundo.
          </p>{" "}
          A energia nuclear está na categoria de energias não renováveis, mas
          tem como vantagem ambiental o fato de não emitir CO2 na geração
          (críticos à fonte alegam, no entanto, que as nucleares não são neutras
          em carbono, se consideradas as emissões ocorridas ao longo de todo o
          ciclo completo da geração das usinas, desde a extração do urânio até
          os depósitos de lixo nuclear).{" "}
          <p>
            {" "}
            Outra vantagem é que o urânio é um combustível de baixo custo, além
            do fato de a fonte termitente (contínua). Por outro lado, embora as
            usinas tenham um sistema avançado de segurança, pesa sobre a energia
            nuclear o potencial de acidentes catastróficos.
          </p>
          <p>
            A fissão dos átomos de urânio ocorre dentro das varetas do elemento
            combustível (componente que contém, de forma vedada, o combustível
            nuclear). A divisão do núcleo dos átomos aquece a água - que passa
            pelo reator a uma temperatura de 320ºC (para que não entre em
            ebulição, a água é mantida sob uma pressão 157 vezes maior que a
            pressão atmosférica). O gerador de vapor realiza então uma troca de
            calor entre as águas deste primeiro circuito e a do circuito
            secundário, que são independentes entre si.
          </p>{" "}
          <div className={classes.img}></div>
        </div>
        <div className={classes.segundo_paragrafo}>
          <div className={classes.segundo_paragrafo}>
            <div className={classes.texto_esquerda}></div>
            <div className={classes.texto_direita}>
              <div className={classes.fusao}>
                <p>
                  <span>BOMBA ATÔMICA:</span> Fissão Nuclear. O princípio de uma
                  bomba atômica é a fissão, ou seja, a quebra do núcleo dos
                  átomos. A ideia é simples: como a região nuclear em si já
                  libera muita energia, sua quebra produz ainda mais. O artefato
                  detonado em Hiroshima tinha a mesma potência do que 15 mil
                  dinamites.
                </p>
                <div className={classes.img_fissao}></div>
              </div>
              <div className={classes.hidrogenio}>
                <p>
                  <span>BOMBA DE HIDROGÊNIO:</span> Fusão Nuclear. O princípio
                  da bomba termonuclear é a fusão nuclear, ou seja, unir os
                  núcleos de dois diferentes átomos, o que gera uma enorme
                  quantidade de energia, pois é necessário muito mais força é
                  necessária para se unir duas regiões nucleares do que
                  separá-las.
                </p>{" "}
                <div className={classes.img_fusao}></div>
              </div>
            </div>
          </div>
        </div>
        <Botao link={"/finalizacao"} titulo={"Continuar"}/>
      </div>
    </>
  );
};

export default Usinas;
