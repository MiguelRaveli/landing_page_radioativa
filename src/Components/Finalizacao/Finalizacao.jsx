import React from 'react'
import classes from "./Finalizacao.module.css"
import Botao from '../Botao/Botao'
const Finalizacao = () => {
  return (
    <div className={classes.Finalizacao}>
        <h2>ESCRITORA</h2>
        <h1>ALLANA AIRES</h1>
        <h2>PESQUISADORA</h2>
        <h1>EMILLY GABRIELA</h1>
        <h2>REVISÃO</h2>
        <h1>EMILLY GABRIELA</h1>
        <h2>DESIGN</h2>
        <h1>ALLANA AIRES</h1>
        <div className={classes.img}></div>
        <Botao titulo={"Fim"} link={"/"}/>
    </div>
  )
}

export default Finalizacao