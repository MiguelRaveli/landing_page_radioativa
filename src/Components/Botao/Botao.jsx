import React from 'react'
import classes from "./Botao.module.css"
import {Link} from "react-router-dom"
const Botao = ({titulo, link}) => {
  return (
    <div>
        <Link to={link} className={classes.botao}>{titulo}</Link>
    </div>
  )
}

export default Botao