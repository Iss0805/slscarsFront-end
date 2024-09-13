import React from "react";
import style from "./CreateCars.module.css"
import Input from "../formsCars/InputC";
import Button from "../formsCars/ButtonC";


const CreateCarssls= () =>{
    return(
        <section className={style.create_carro}>
            <h1>CADASTRO DE CARRO </h1>
            <Input
                type='text'
                name='txt_cadastro'
                placeHolder='Digite o nome do cliente'
                text='Nome do cliente'
            />
            

            <Input
                type="email"
                name='txt_email'
                placeHolder='Digite email do cliente'
                text='Email do cliente'
            />
            
               <Input
               
                name='txt_telefone'
                placeHolder='Digite o telefone do cliente'
                text='Telefone do cliente'
            />

                <Input
                
                name='txt_placa'
                placeHolder='Digite a placa do carro do cliente'
                text='Placa do carro'
            />

                <Input
                
                name='txt_marca'
                placeHolder='Digite a modelo do carro do cliente'
                text='Modelo do carro'
            />

                




{/* 
            <Select

                name='Marca'
                text='Escolha a marca do carro'

            />
              */}




            <Button
                rotulo='Cadastrar Carros'
            />







        </section>



    )



}

export default CreateCarssls;