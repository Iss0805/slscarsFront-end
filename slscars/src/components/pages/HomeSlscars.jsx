// eslint-disable-next-line no-unused-vars
import React from "react";

import style from './Home.module.css'

const Home = () => {
    return(

        <section className={style.home_container}>
            <h1>Bem vindo, colaborador! </h1> 
            <p>O lar do seu carro !</p>
            <img src ="./cars2.png" className={style.img}/>
        </section>


    )



}
export default Home