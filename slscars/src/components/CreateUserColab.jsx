import React from "react";
import style from "./CreateUserColab.module.css"
import Input from "./forms/Input"
import Select from "./forms/Select";
import Button from "./forms/Button";

const CreateUserColab = () =>{
    return(
        <section className={style.create_colab}>
            <h1>CADASTRO DE COLABORADOR </h1>
            <Input 
                type='text'
                name='txt_cadastro'
                placeHolder='Digite o seu nome aqui'
                text='Nome do colaborador'
            />
            

            <Input 
                type="email"
                name='txt_email'
                placeHolder='Digite seu email'
                text='Email do colaborador'
            />
            
               <Input 
                type="senha"
                name='txt_senha'
                placeHolder='Digite sua senha'
                text='senha do colaborador'
            />





            <Select

                name='Função'
                text='Escolha uma seu cargo'

            />
             




            <Button
                rotulo='Cadastrar Colaborador'
            />







        </section>



    )




}

export default CreateUserColab;